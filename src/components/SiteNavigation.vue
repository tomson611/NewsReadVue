<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { UiNavigation } from '@infermedica/component-library'
</script>

<template>
  <UiNavigation />
  <!--  <header>-->
  <!--    <nav class="navigation">-->
  <!--      <RouterLink :to="{ name: 'home' }">Home</RouterLink>-->
  <!--      <RouterLink :to="{ name: 'about' }">About</RouterLink>-->
  <!--    </nav>-->
  <!--  </header>-->
  <!--  <RouterView />-->
</template>

<style scoped>
/* Style your navigation component here */
.navigation {
  /* ... */
}
</style>
