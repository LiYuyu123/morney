<template>
  <div>
    <section class="content">
      <Tabs :data-source="recordTypeList" :value.sync="record.type"/>
      <div class="tags-wrapper">
        <Tags/>
      </div>
      <div>
        <div class="notes">
          <FormItem field-name="备注"
                    placeholder="写点备注吧"
                    @update:value="onUpdateNotes"
          />
        </div>

        <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
        <NavCancel/>
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
  recordTypeList=recordTypeList
  get recordList(){
    return this.$store.state.recordList
  }
  record: RecordItem = {tags: [], type: '-', notes: '', amount: 0};
  created(){
    this.$store.commit('fetchRecords')
  }
  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
  }

  saveRecord() {
   this.$store.commit('createRecord',this.record)
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
  }
}
.notes{
  padding: 10px 0;
}
</style>