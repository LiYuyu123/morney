<template>
  <div class="tags">
    <ul class="current">
      <li>
        <Icon name="food"></Icon>
        <span>餐饮</span>
      </li>
      <li>
        <Icon name="shopping"></Icon>
        <span>购物</span>
      </li>
      <li>
        <Icon name="live"></Icon>
        <span>居住</span>
      </li>
      <li>
        <Icon name="traffic"></Icon>
        <span>交通</span>
      </li>
      <li v-for="tag in tagList" :key="tag.id"
          :class="{selected:selectedTags.indexOf(tag.id)>=0}"
          @click="toggle(tag.id)">
        <Icon :name="tag.name" />
        <span>{{tag.name}}</span>
      </li>
      <li @click="createTag">
        <Icon name="add"></Icon>
        <span>新增</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {Component} from 'vue-property-decorator';
import {mixins} from 'vue-class-component';
import TagHelper from '@/mixins/tagHelper';


@Component
export default class Tags extends mixins(TagHelper) {
   get tagList(){
     return this.$store.state.tagList
   }
  selectedTags: string[] = [];
  toggle(tag: string) {
    const index = this.selectedTags.indexOf(tag);
    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tag);
    }
    this.$emit('update:value',this.selectedTags)
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

@media (min-width: 500px) {
  .tags {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 966.7px;
    margin-left: auto;
    margin-right: auto;
  }
}

.tags {
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;

  .current {
    display: flex;
    flex-wrap: wrap;

    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20px 40.8px;

      &.selected {
        background: black;
        color: white;
      }
    }

    .icon {
      background: rgb(245, 245, 245);
      border-radius: 50%;
      width: 56px;
      height: 56px;
    }
  }
}
</style>