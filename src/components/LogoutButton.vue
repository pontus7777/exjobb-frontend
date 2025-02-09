<template>
  <button @click="logout" class="logout-button">Logout</button>
</template>

<script setup lang="ts">
const api = import.meta.env.VITE_API_URL

function logout() {
  window.location.href = `${api}/api/v1/steam/logout` // Redirect to backend logout route
}
</script>

<style scoped>
.logout-button {
  background-color: #ff5c5c;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.logout-button:hover {
  background-color: #d9534f;
}
</style>
