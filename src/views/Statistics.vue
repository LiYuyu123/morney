<template>
  <div class="container">
    <div class="header">
      <div>统计</div>
    </div>
    <Tabs class-prefix="type" :data-source="recordTypeList" :value.sync="type"/>
    <div class="charts-wrapper" ref="chartWrapper">
      <Charts class="charts" :options="chartOptions"/>
    </div>
    <div class="content">
      <ol v-if="groupedList.length>0">
        <li v-for="(group,index) in groupedList" :key="index">
          <h3 class="title">{{ beautify(group.title) }}<span>￥{{ group.total }}</span></h3>
          <ol>
            <li v-for="(item,index) in group.items" :key="index"
                class="record"
            >
              <span>{{ tagArray(item.tags) }}</span>
              <span class="notes">{{ item.notes }}</span>
              <span>￥{{ item.amount }}</span>
            </li>
          </ol>
        </li>
      </ol>
      <div v-else class="noResult">
        目前没有相关记录
      </div>
    </div>
    <Nav />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
import recordTypeList from '@/constants/recordTypeList';
import dayjs from 'dayjs';
import clone from '@/lib/Clone';
import Charts from '@/components/Charts.vue';
import _ from 'lodash';

@Component({
  components: {Tabs, Charts}

})
export default class Statistics extends Vue {
  tagArray(tags: Tag[]) {
    return tags.length === 0 ? '无' : tags.map(i => i.name).join('，');
  }

  get recordList() {
    return (this.$store.state as RootStore).recordList;
  }

  get groupedList() {
    const {recordList} = this;
    type Result = { title: string, total?: number, items: RecordItem[] }[]
    const newList = clone(recordList).filter(r => r.type === this.type).sort((a, b) => dayjs(b.createAt).valueOf() - dayjs(a.createAt).valueOf());
    if (newList.length === 0) {
      return [] as Result;
    }
    const result: Result = [{title: dayjs(newList[0].createAt).format('YYYY-MM-DD'), items: [newList[0]]}];
    for (let i = 1; i < newList.length; i++) {
      const current = newList[i];
      const last = result[result.length - 1];
      if (dayjs(last.title).isSame(dayjs(current.createAt), 'day')) {
        last.items.push(current);
      } else {
        result.push({title: dayjs(current.createAt).format('YYYY-MM-DD'), items: [current]});
      }
    }

    result.map(group => {
      group.total = group.items.reduce((sum, item) => sum + item.amount, 0);
    });

    return result;
  }

  get keyValueList() {
    const today = new Date();
    const array = [];
    for (let i = 0; i <= 29; i++) {
      const dateString = dayjs(today).subtract(i, 'day').format('YYYY-MM-DD');
      const found = _.find(this.groupedList, {title: dateString});
      array.push({key: dateString, value: found ? found.total : 0});
    }
    array.sort((a, b) => {
      if (a.key > b.key) {
        return 1;
      } else if (a.key === b.key) {
        return 0;
      } else{
        return -1;
      }
    });
    return array;
  }

  get chartOptions() {

    const keys = this.keyValueList.map(i => i.key);
    const dates = this.keyValueList.map(i => i.value);
    return {
      grid: {
        left: 0,
        right: 0,
      },
      xAxis: {
        type: 'category',
        data: keys,
        axisTick: {
          show: false,
        },
        axisLine: {
          lineStyle: {color: '#666'}
        },
        axisLabel:{
          formatter: function (value:string, index:number) {
            return value.substr(5);
          }
        }
      },
      yAxis: {
        type: 'value',
        show: false
      },
      tooltip: {
        show: true,
        formatter: '{c}',
        position: 'top'
      },
      series: [{
        symbol: 'circle',
        itemStyle: {
          color: '#666'
        },
        data: dates,
        type: 'line',
        symbolSize: 12
      }]
    };
  }

  beautify(string: string) {
    const day = dayjs(string);
    const now = dayjs();
    if (day.isSame(now, 'day')) {
      return '今天';
    } else if (day.isSame(now.subtract(1, 'day'), 'day')) {
      return '昨天';
    } else if (day.isSame(now.subtract(2, 'day'), 'day')) {
      return '前天';
    } else if (day.isSame(now, 'year')) {
      return day.format('M月D日');
    } else {
      return day.format('YYY年M月D日');
    }
  }

  mounted() {
    const div = (this.$refs.chartWrapper as HTMLDivElement);
    div.scrollLeft = div.scrollWidth;
  }

  beforeCreate() {
    this.$store.commit('fetchRecords');
  }

  type = '-';
  recordTypeList = recordTypeList;
}
</script>
<style lang="scss" scoped>
.noResult {
  padding: 16px;
  text-align: center;
}

::v-deep {
  .type-tabs-item {
    background: rgb(232, 232, 232);

    &.selected {
      background: white;

      &::after {
        display: none;
      }
    }
  }

  .interval-tabs-item {
    height: 30px;
    font-size: 16px;
  }
}

</style>
<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

%item {
  padding: 8px 16px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header {
  @extend %outerShadow;
  background: #c4c4c4;

  div {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
  }
}

.title {
  @extend %item
}

.record {
  background: white;
  @extend %item
}

.notes {
  margin-right: auto;
  margin-left: 8px;
  color: #999;
  overflow: auto;
}

.charts {
  width: 430%;
  &-wrapper {
    overflow: auto;
    height: 200px;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
.container{
   display: flex;
  flex-direction: column;
  height:100vh ;
  .content{
    flex-grow: 1;
    overflow: auto;
  }
}
</style>