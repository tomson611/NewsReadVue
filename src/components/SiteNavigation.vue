<script setup lang="ts"></script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">NewsRead</a>
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
            <RouterLink to="/" class="nav-link">Home</RouterLink>
            <RouterLink to="#" class="nav-link">Read</RouterLink>
            <RouterLink to="#" class="nav-link">Search</RouterLink>
            <RouterLink to="#" class="nav-link">Sources</RouterLink>
          </div>
        </div>
      </div>
    </nav>
    <RouterView />
  </header>
</template>

<style scoped></style>
