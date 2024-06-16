<script setup lang="ts"></script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <RouterLink to="/" class="nav-link">NewsRead</RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <RouterLink to="/read" class="nav-link">
            <template v-slot="{ isActive }">
              <span :class="{ active: isActive }">Read</span>
            </template>
          </RouterLink>
          <RouterLink to="/search" class="nav-link">
            <template v-slot="{ isActive }">
              <span :class="{ active: isActive }">Search</span>
            </template>
          </RouterLink>
          <RouterLink to="/sources" class="nav-link">
            <template v-slot="{ isActive }">
              <span :class="{ active: isActive }">Sources</span>
            </template>
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
  <RouterView />
</template>

<style scoped>
.active {
  font-weight: bold;
  font-size: 17px;
}

.nav-link {
  font-size: 18px;
}
</style>
