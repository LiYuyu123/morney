<template>
  <Layout>
    <div class="head">
      <div>明细</div>
    </div>
    <ol class="tags">
      <li v-for="tag in tags" :key="tag">
        <span>{{ tag }}</span>
        <Icon name="right" />
      </li>
    </ol>
    <div class="createTag-wrapper">
      <button class="createTag" @click="createTag">新增标签</button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import tagListModel from '@/models/tagListModel.ts';

tagListModel.fetch()

@ Component
export default class Labels extends Vue {
  tags = tagListModel.data;

  createTag() {
    const name = window.prompt('添加标签');
    if (name) {
       const message= tagListModel.create(name);
      if(message==='duplicated'){
        window.alert('标签不能重复')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.head {
  @extend %outerShadow;
  background: #c4c4c4;

  div {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 19px;
  }
}

.tags {
  background: white;
  font-size: 16px;
  padding-left: 16px;

  li {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
      width: 18px;
      height: 18px;
      color: #666;
      margin-right: 16px;
    }
  }
}

.createTag {
  background: #767676;
  color: white;
  border-radius: 4px;
  border: none;
  height: 40px;
  padding: 0 16px;

  &-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
}
</style>