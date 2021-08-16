<template>
  <Layout>
    <div class="navBar">
      <Icon class="leftIcon" name="left" @click="goBack"/>
      <span class="title">编辑</span>
      <span class="rightIcon"></span>
    </div>
    <div class="form-wrapper">
      <FormItem field-name="金额"
                placeholder="请输入标金额"        />
      <FormItem field-name="日期"
                placeholder="请输入标日期"        />
      <FormItem :value="tag.name"
                @update:value="update"
                field-name="备注"
                placeholder="请输入标签名"/>
    </div>
    <div class="button-wrapper">
      <Button  @click="save">保存</Button>
      <Button class="remove" @click="remove">删除</Button>
    </div>

  </Layout>

</template>

<script lang="ts">

import {Component} from 'vue-property-decorator';
import Vue from 'vue';
import tagListModel from '@/models/tagListModel';
import Labels from '@/views/Labels.vue';
import FormItem from '@/components/money/FormItem.vue';
import Button from '@/components/Button.vue';

@Component({
  components: {Button, FormItem, Labels}
})
export default class EditLabel extends Vue {
  tag?: { id: string, name: string } = undefined;

  created() {
    const id = this.$route.params.id;
    tagListModel.fetch;
    const tags = tagListModel.data;
    const tag = tags.filter(t => t.id === id)[0];
    if (tag) {
      this.tag = tag;
      console.log(this.tag)
    } else {
      this.$router.replace('/404');
    }
  }
  update(name:string){
    if(this.tag){
      tagListModel.update(this.tag.id,name)
    }
  }
  remove(){
    if(this.tag){
      if(tagListModel.remove(this.tag.id)){
        this.$router.back()
      }
    }
  }
  save(){
    this.$router.back()
  }
  goBack(){
    this.$router.back()
  }
}
</script>

<style lang="scss" scoped>
.navBar {
  padding: 7px 16px;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #c4c4c4;

  .title {
  }

  .rightIcon {
    width: 24px;
    height: 24px;
  }

  .leftIcon {
    width: 24px;
    height: 24px;
  }
}

.form-wrapper {
  background: white;
  margin-top: 8px;
}

.button-wrapper {
  text-align: center;
  padding: 16px;
  margin-top: 44-16px;
  display: flex;
  justify-content: space-around;
  .remove{
    background: #b62f2f;
  }
}
</style>