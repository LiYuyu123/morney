<template>
<Layout>
  <div>
    <Icon name="left" />
    <span>编辑</span>
  </div>
  <Notes field-name="标签名" placeholder="请输入标签名" />
</Layout>
</template>

<script lang="ts">

import {Component} from 'vue-property-decorator';
import Vue from 'vue';
import tagListModel from '@/models/tagListModel';
import Labels from '@/views/Labels.vue';
import Notes from '@/components/money/Notes.vue';
@Component({
  components: {Notes, Labels}
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

</style>