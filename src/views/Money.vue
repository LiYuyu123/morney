<template>
  <div>
    <section class="content">
      <Types/>
    <div class="tags-wrapper">
        <Tags/>
    </div>
    <div class="all-wrapper">
      <Notes />
      <NumberPad />
      <NavCancel/>
    </div>
    </section>
  </div>
</template>

<script lang="ts">

import Types from '@/components/money/Types.vue'
import Tags from '@/components/money/Tags.vue'
import Notes from '@/components/money/Notes.vue'
import NumberPad from '@/components/money/NumberPad.vue'
import NavCancel from '@/components/money/NavCancel.vue'

export default {
  name: 'Money',
  components: {NavCancel, NumberPad, Notes, Tags, Types},
}
</script>

<style lang="scss" scoped>
.content{
  display: flex;
  flex-direction: column;
  height: 100vh;
  .tags-wrapper{
    flex-grow: 1;
    overflow: auto;
  }
}
</style>