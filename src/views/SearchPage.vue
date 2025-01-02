<template>
  <div class="search-page">
    <!-- Search Section -->
    <div class="search-header">
      <h2>Search for Players</h2>
      <input v-model="searchQuery" type="text" placeholder="Search for players..." class="search-input"
        @input="debouncedSearch" />
    </div>

    <!-- Player List -->
    <div class="player-list">
      <!-- Pass each property separately to PlayerProfile -->
      <PlayerProfile v-for="player in paginatedPlayers" :key="player.account_id" :account_id="player.account_id"
        :avatarfull="player.avatarfull" :personaname="player.personaname" :last_match_time="player.last_match_time"
        :similarity="player.similarity" />
    </div>

    <!-- Pagination -->
    <div class="pagination">
      <button @click="currentPage--" :disabled="currentPage === 1">Previous</button>
      <span>Page {{ currentPage }}</span>
      <button @click="currentPage++" :disabled="currentPage >= totalPages">Next</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { debounce } from 'lodash';
import axios from 'axios';
import PlayerProfile from '@/components/PlayerProfile.vue'; // Player profile component
import type { PlayerSearch } from '@/types/Search';

// Search query and pagination
const searchQuery = ref('');
const currentPage = ref(1);
const players = ref<PlayerSearch[]>([]); // Players list

// Helper function to filter players based on the search query
const filteredPlayers = computed(() => {
  return players.value.filter(player =>
    player.personaname.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

// Pagination settings
const playersPerPage = 10;
const totalPages = computed(() => Math.ceil(filteredPlayers.value.length / playersPerPage));
const paginatedPlayers = computed(() => {
  const start = (currentPage.value - 1) * playersPerPage;
  const end = start + playersPerPage;
  return filteredPlayers.value.slice(start, end);
});

// Debounce search to prevent excessive API calls
const debouncedSearch = debounce(async () => {
  try {
    // Fetch data from backend
    const response = await axios.get('/api/v1/search', {
      params: { q: searchQuery.value }
    });

    // Update players list with the response data
    players.value = response.data;
  } catch (error) {
    console.error('Error searching players:', error);
  }
}, 300);
</script>

<style scoped>
.search-page {
  padding: 16px;
}

.search-header {
  margin-bottom: 16px;
}

.search-input {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.player-list {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.pagination {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 10px;
}

.pagination button {
  padding: 10px;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  cursor: pointer;
}

.pagination button:disabled {
  cursor: not-allowed;
  background-color: #ddd;
}
</style>
