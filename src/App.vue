<script lang="ts">
import { defineComponent } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import logo from "./assets/logo.svg" 

export default defineComponent({
  components: {
    RouterLink, RouterView
  },
  setup(){
    return {logo}
  }
})
</script>

<template>

  <header class="fixed-top">
    <nav class="d-flex justify-content-between mb-4 header">
      <div>
        <img :src="logo" alt="" class="image-thumbnail" style="width: 40px;">
      </div>
      <div>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink :to="{name: 'tasks'}">Tasks</RouterLink>
        <RouterLink :to="{name: 'task-create'}">Create Tasks</RouterLink>
      </div>   
    </nav>
  </header>
  <main style="padding-top: 80px;">
    <RouterView />
  </main>
</template>

<style scoped>

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  padding: 0 1rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    font-size: 1rem;
    font-family: bold;
    margin-top: 1.4rem;
  }
}
</style>
