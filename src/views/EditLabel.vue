<template>
  <Layout :style="{height:h+'px'}">
    <div class="navBar">
      <Icon class="leftIcon" name="left" @click="goBack"/>
      <span class="title">编辑</span>
      <span class="rightIcon"></span>
    </div>
    <div class="form-wrapper">
      <FormItem :value="currentTag.name"
                @update:value="update"
                field-name="备注"
                placeholder="请输入标签名"/>
    </div>
    <div class="button-wrapper">
      <Button @click="save">保存</Button>
      <Button class="remove" @click="remove">删除</Button>
    </div>

  </Layout>

</template>

<script lang="ts">

import {Component} from 'vue-property-decorator';
import Vue from 'vue';
import Labels from '@/views/Labels.vue';
import FormItem from '@/components/money/FormItem.vue';
import Button from '@/components/Button.vue';


@Component({
  components: {Button, FormItem, Labels},
})
export default class EditLabel extends Vue {
  h = document.body.clientHeight;

  get currentTag() {
    return this.$store.state.currentTag;
  }

  get recordList() {
    return this.$store.state.recordList;
  }

  created() {
    const id = this.$route.params.id;
    this.$store.commit('fetchRecords');
    this.$store.commit('fetchTags');
    this.$store.commit('setCurrentTag', id);
    if (!this.currentTag) {
      this.$router.replace('/404');
    }
  }

  update(name: string) {
    if (name === '') {
      return window.alert('名字不能为空');
    }
    if (this.currentTag) {
      this.$store.commit('updateTag', {id: this.currentTag.id, name});
    }
  }

  remove() {
    if (this.currentTag) {
      this.$store.commit('removeTag', this.currentTag.id);
    }
  }

  save() {
    if(this.$store.state.updateMessage===true){
      this.$router.back();
    }
  }

  goBack() {
      this.$router.back();
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

  ::v-deep .formItem {
    border-bottom: 1px solid #e6e6e6;
  }
}

.button-wrapper {
  text-align: center;
  padding: 16px;
  margin-top: 44-16px;
  display: flex;
  justify-content: space-around;

  .remove {
    background: #b62f2f;
  }
}
</style>