<template>
  <div>
    <button
      class="secondary-1 "
      @click="onCreated"
    >
      Created Item
    </button>
    <div class="containers-list">
      <container
        v-for="(item , index) in getToDoList"
        :key="index"
        :title="item.title"
        :content="item.content"
        :created="item.createAt"
        @onEdit="()=> handleEdit({ id: item.id,index })"
        @onDelete="()=> handleDelete(index)"
      />
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

import container from '@/components/container'
export default {
  name: 'ToDoList',
  components: { container },
  computed: {
    ...mapGetters({
      getToDoList: 'getToDoList'
    })
  },
  methods: {
    ...mapActions({
      deleteItem: 'deleteItem'
    }),
    onCreated () {
      this.$router.push({ name: 'Created' })
    },
    handleEdit ({ id, index }) {
      this.$router.push({ name: 'Edit', params: { id, index } })
    },
    async handleDelete (index) {
      await this.deleteItem(index)
    }
  }
}
</script>

<style lang="scss" scoped>
.containers-list {
  max-width: 68.75rem;
  margin: auto;
  display: grid;
  grid-template-columns: 33% 33% 33%;
}
.secondary-1{
  margin: 2rem 0;
}
</style>
