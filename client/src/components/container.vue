<template>
  <div class="container">
    <div class="container-title">
      {{ title }}
    </div>
    <div class="container-content">
      <span>Content:</span>
      <div>{{ content }}</div>
    </div>
    <div class="container-created">
      CreateAt: {{ created }}
    </div>
    <div class="mask">
      <img
        src="@/assets/images/edit.svg"
        @click="$emit('onEdit')"
      >
      <img
        src="@/assets/images/delete.svg"
        @click="$emit('onDelete')"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'Container',
  props: {
    title: { type: String, required: true },
    content: { type: String, required: true },
    created: { type: String, required: true }
  }
}
</script>

<style lang="scss" scoped>
.container {
  overflow: hidden;
  position: relative;
  width: 20rem;
  height: 18rem;
  border: 1px solid $gray-400;
  border-radius: 0.4rem;
  padding: 0.6rem;
  cursor: pointer;
  margin-bottom: 1rem;
  background-color: $white;
  &-title {
    @include font-24(600);
    min-height: 3rem;
    overflow: hidden;
    white-space: nowrap;

    text-overflow: ellipsis;
  }
  &-content {
    @include font-16(500);
    height: 14rem;
    word-break: break-all;
    text-overflow: ellipsis;
    overflow: auto;
  }
  &-created {
    @include font-12(500);
  }

  &:hover {
    .mask {
      bottom: 0px;
    }
  }
}
.mask {
  position: absolute;
  width: 100%;
  height: 10rem;
  bottom: -10rem;
  line-height: 10rem;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  transition: 0.3s;
  text-align: center;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  img {
    width: 1.5rem;
    margin: 0 0.6rem;
    padding: 0.3rem;
    &:hover {
      background-color: $white;
      border-radius: 10rem;
    }
  }
}
</style>
