<template>
  <div>
    <section class="content">
      <Types :value.sync="record.type"/>
      <div class="tags-wrapper">
        <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
      </div>
      <div class="all-wrapper">
        <Notes @update:value="onUpdateNotes"/>
        <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
        <NavCancel/>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Types from '@/components/money/Types.vue';
import Tags from '@/components/money/Tags.vue';
import Notes from '@/components/money/Notes.vue';
import NumberPad from '@/components/money/NumberPad.vue';
import NavCancel from '@/components/money/NavCancel.vue';
import {Component, Watch} from 'vue-property-decorator';
import model from '@/model.ts';
import RecordItem from '@/custom.d.ts';



const recordData=model.fetch()

@Component({
  components: {NavCancel, NumberPad, Notes, Tags, Types}
})
export default class Money extends Vue {
  tags = ['吃饭', '睡觉', '打游戏'];
  recordList: RecordItem[] =recordData
  record: RecordItem = {tags: [], type: '-', notes: '', amount: 0};

  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
  }

  saveRecord() {
    const record2:RecordItem =model.clone(this.record)
    record2.createAt=new Date()
    this.recordList.push(record2);
    console.log(this.recordList);
  }

  @Watch('recordList')
  onRecordChanged() {
   model.save(this.recordList)
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
</style>