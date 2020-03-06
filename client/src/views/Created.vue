<template>
  <div class="create-page">
    <button
      class="back-button"
      @click.stop="$router.back()"
    >
      <img
        class="chevron-back"
        src="@/assets/images/chevron-left-blue.svg"
        alt="Arrow pointing left. Click to go back"
      >
      <span>&nbsp;</span>
      <b> Back </b>
    </button>
    <div class="create-page-containers">
      <div class="create-page-title">
        <div class="create-page-text">
          Title *
        </div>
        <div class="input-container">
          <input
            v-model="title"
            type="text"
          >
        </div>
        <div
          v-if="titleError"
          class="error-message"
        >
          Please fill out title
        </div>
      </div>
      <div class="create-page-title">
        <div class="create-page-text">
          Content *
        </div>
        <div class="input-container">
          <input
            v-model="content"
            type="text"
          >
        </div>
        <div
          v-if="contentError"
          class="error-message"
        >
          Please fill out content
        </div>
      </div>
      <div class="create-page-containers-button">
        <button
          class="gray"
          @click.stop="$router.back()"
        >
          Cancel
        </button>
        <button
          class="secondary-1"
          @click.stop="handleSubmit"
        >
          {{ submitButton }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import moment from 'moment'
export default {
  name: 'Created',
  data () {
    return {
      title: '',
      content: '',
      titleError: false,
      contentError: false
    }
  },
  computed: {
    ...mapGetters({ getToDoList: 'getToDoList' }),
    submitButton () {
      return this.$route.params.id ? 'Submit Changes' : 'Create'
    }
  },
  mounted () {
    if (this.$route.params.id) {
      const { title, content } = this.getToDoList.filter(item => item.id === this.$route.params.id)[0]
      this.title = title
      this.content = content
    }
  },
  methods: {
    ...mapActions({
      createTodoItem: 'createTodoItem',
      updateTodoItem: 'updateTodoItem'
    }),
    async handleSubmit () {
      if (this.title === '') this.titleError = true
      if (this.content === '') this.contentError = true
      if (this.title !== '' && this.content !== '') {
        try {
          const createAt = moment.utc().format('MM/DD/YYYY hh:mm A')
          this.$route.params.id
            ? await this.updateTodoItem({ title: this.title, content: this.content, createAt, id: this.$route.params.id })
            : await this.createTodoItem({ title: this.title, content: this.content, createAt })
          this.$router.back()
        } catch (error) {
          console.log(error)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.create-page {
  width: 50%;
  height: 100%;
  text-align: left;
  margin-top: 1rem;
  &-containers {
    background-color: $white;
    height: 22rem;
    padding: 2rem;

    &-button {
      text-align: right;
      button {
        width: 10rem;
        &:first-child {
          margin-right: 0.7rem;
        }
      }
    }
  }
  &-title {
    margin-bottom: 1.5rem;
    div {
      @include font-14(500);
    }
  }
  &-text {
    color: $gray-400;
  }
  .back-button {
    margin-bottom: 1.25rem;
    justify-content: flex-start;
    .chevron-back {
      height: 0.875rem;
      width: 1rem;
    }
    b {
      @include font-16(bold);
      color: $secondary-2;
      text-transform: uppercase;
    }
  }
}

.input-container {
  width: 100%;
  height: 3rem;
  @include input-style;

  &.prompt-required {
    @include prompt-required;
  }
  input {
    width: calc(100% - 1rem);
    height: 100%;
    background: none;
    border: none;
    outline: none;
    padding: 0 0 0 1rem;
    @include font-14(normal);
    &:focus {
      border: 0.0625rem solid $secondary-2;
    }
  }
}

.error-message {
  color: $warning;
}
</style>
