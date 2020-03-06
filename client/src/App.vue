<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App',
  methods: {
    // google api login
    login () {
      if (this.$isAuthenticated() !== true) {
        this.$router.push({ name: 'Login' })
      }
    }
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  background: $gray-100;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}
button {
  cursor: pointer;
  outline: none;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  transition: 0.2s;
  border-radius: 0.25rem;
  @include font-16(500);
  &.secondary-1 {
    @include button-secondary-1($secondary-1);
  }
  &.secondary-3 {
    @include button-secondary-3($secondary-3);
  }
  &.warning {
    @include button-warning;
  }
  &.gray {
    @include button-gray;
  }
  &.add-button {
    color: $secondary-2;
    @include font-14(500);
    &::before {
      content: '';
      background-image: url('./assets/images/plus-sign-blue.svg');
      background-repeat: no-repeat;
      height: 1rem;
      width: 1rem;
      padding-right: 0.625rem;
    }
  }
}
</style>
