<template>
    <Layout class="content" :style="{height:h+'px'}" >
      <Tabs :data-source="recordTypeList" :value.sync="record.type"/>
        <Tags @update:value="record.tags=$event" class="container"/>
          <FormItem field-name="日期"
                    type="date"
                    placeholder="写点备注吧"
                    :value.sync="record.createAt"
          />
          <FormItem field-name="备注"
                    placeholder="写点备注吧"
                    :value.sync="record.notes"

          />
        <NumberPad @update:value="onUpdateAmount" @submit="saveRecord" v-show="isShow"/>
    </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import Tabs from '@/components/Tabs.vue';
import Tags from '@/components/money/Tags.vue';
import FormItem from '@/components/money/FormItem.vue';
import NumberPad from '@/components/money/NumberPad.vue';
import {Component} from 'vue-property-decorator';
import recordTypeList from '@/constants/recordTypeList';


@Component({
  components: {FormItem, NumberPad, Tags, Tabs},
})
export default class Money extends Vue {
  h = document.body.clientHeight;
  isShow = true;
  recordTypeList = recordTypeList;

  get recordList() {
    return this.$store.state.recordList;
  }

  record: RecordItem = {tags: [], type: '-', notes: '', amount: 0, createAt: new Date().toISOString()};

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
  ::v-deep.icon {
    display: block;
  }
  }
  ::v-deep .formItem {
    background: rgb(201, 201, 201);
  }

  ::v-deep .formItem {
    background: rgb(201, 201, 201);
  }

::v-deep .content {
  display: flex;
  flex-direction: column;
}
.container{
  top: 0;
}
</style>