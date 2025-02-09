<template>
  <button @click="loginWithSteam" class="steam-login-button">Sign in with Steam</button>
</template>

<script setup lang="ts">
const api = import.meta.env.VITE_API_URL

function loginWithSteam() {
  window.location.href = `${api}/api/v1/steam/auth` // Redirect to backend Steam login route
}
</script>

<style scoped>
.steam-login-button {
  background-color: #1b2838;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.steam-login-button:hover {
  background-color: #2a475e;
}
</style>
