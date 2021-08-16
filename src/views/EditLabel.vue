<template>
<Layout>
  <div class="navBar">
    <Icon class="leftIcon" name="left" />
    <span class="title">编辑</span>
    <span class="rightIcon"></span>
  </div>
  <div class="form-wrapper">
    <FormItem  field-name="标签名" placeholder="请输入标签名" />
  </div>
  <div class="button-wrapper">
    <Button>删除标签</Button>
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
  created(){
    const id =this.$route.params.id;
    tagListModel.fetch
    const tags=tagListModel.data
    const tag=tags.filter(t=>t.id===id)[0]
    if(tag){
      console.log(tag)
    }else {
      this.$router.replace('/404')
    }
  }
}
</script>

<style lang="scss" scoped>
.navBar{
  padding: 7px 16px;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #c4c4c4;
  .title{
  }
  .rightIcon{
    width: 24px;
    height: 24px;
  }
  .leftIcon{
    width: 24px;
    height: 24px;
  }
}
.form-wrapper{
  background: white;
  margin-top: 8px;
}
.button-wrapper{
  text-align: center;
  padding: 16px;
  margin-top: 44-16px;
}
</style>