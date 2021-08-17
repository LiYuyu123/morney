<template>
  <div>
    <section class="content">
      <Types :value.sync="record.type"/>
      <div class="tags-wrapper">
        <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
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
import Types from '@/components/money/Types.vue';
import Tags from '@/components/money/Tags.vue';
import FormItem from '@/components/money/FormItem.vue';
import NumberPad from '@/components/money/NumberPad.vue';
import NavCancel from '@/components/money/NavCancel.vue';
import {Component} from 'vue-property-decorator';








@Component({
  components: {FormItem, NavCancel, NumberPad, Tags, Types}
})
export default class Money extends Vue {
  tags=window.tagList
  recordList=window.recordList
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
   window.createRecord(this.record)
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