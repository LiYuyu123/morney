<template>
  <div>
    {{ record }}
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

type Record = {
  tags: string[]
  type: string
  notes: string
  amount: number
}
@Component({
  components: {NavCancel, NumberPad, Notes, Tags, Types}
})
export default class Money extends Vue {
  tags = ['吃饭', '睡觉', '打游戏'];
  recordList: Record[] = [];
  record: Record = {tags: [], type: '-', notes: '', amount: 0};

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
    const record2=JSON.parse(JSON.stringify(this.record)) //深拷贝
    this.recordList.push(record2);
    console.log(this.recordList);
  }

  @Watch('recordList')
  onRecordChanged() {
    window.localStorage.setItem('recordList', JSON.stringify(this.recordList));
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