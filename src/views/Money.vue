<template>
  <div>
    {{recordList}}
    <section class="content">
      <Tabs :data-source="recordTypeList" :value.sync="record.type"/>
      <div class="tags-wrapper">
        <Tags @update:value="record.tags=$event"/>
      </div>
      <div>
        <div class="date">
          <FormItem field-name="日期"
                    type="date"
                    placeholder="写点备注吧"
                    :value.sync="record.createAt"
          />
        </div>
        <div class="notes">
          <FormItem field-name="备注"
                    placeholder="写点备注吧"
                    :value.sync="record.notes"
                    @update:isShow="(value) => {isShow=value}"
          />
        </div>
        <NumberPad @update:value="onUpdateAmount" @submit="saveRecord" v-show="isShow"/>
        <NavCancel v-show="isShow"/>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Tabs from '@/components/Tabs.vue';
import Tags from '@/components/money/Tags.vue';
import FormItem from '@/components/money/FormItem.vue';
import NumberPad from '@/components/money/NumberPad.vue';
import NavCancel from '@/components/money/NavCancel.vue';
import {Component} from 'vue-property-decorator';
import recordTypeList from '@/constants/recordTypeList';


@Component({
  components: {FormItem, NavCancel, NumberPad, Tags, Tabs},
})
export default class Money extends Vue {
  isShow = true;
  recordTypeList = recordTypeList;

  get recordList() {
    return this.$store.state.recordList;
  }

  record: RecordItem = {tags: [], type: '-', notes: '', amount: 0,createAt:new Date().toISOString()};

  created() {
    this.$store.commit('fetchRecords');
  }


  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
  }

  saveRecord() {
    if (!this.record.tags || this.record.tags.length === 0) {
      return window.alert('请至少选择一个标签');
    }
    this.$store.commit('createRecord', this.record);
    if (this.$store.state.createRecordError === null) {
      window.alert('保存成功');
      this.$router.replace('/statistics');
    }
  }

}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  height: 100vh;

  .tags-wrapper {
    flex-grow: 1;
    overflow: auto;

    ::v-deep .tags {
      background: #f5f5f5;
    }
  }
}

.notes {
  ::v-deep .formItem {
    background: rgb(201, 201, 201);
  }
}
.date {
  ::v-deep .formItem {
    background: rgb(201, 201, 201);
    border-bottom: 1px solid #e6e6e6;
  }
}
</style>