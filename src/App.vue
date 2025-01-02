<script setup lang="ts">
import { ref } from 'vue';
import SearchBar from '@/components/SearchBar.vue';
import LoginButton from '@/components/LoginButton.vue';
import LogoutButton from '@/components/LogoutButton.vue';
import { RouterLink, RouterView } from 'vue-router';

// Define the searchQuery in the parent component (App.vue)
const searchQuery = ref('');
const steamUser = ref(null); // To store user data

// Define the handleSearch method to handle updates from the SearchBar
function handleSearch(query: string) {
  searchQuery.value = query;
  console.log("Search Query:", searchQuery.value);
}
</script>

<template>
  <div id="app">
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink to="/" class="nav-link">Home</RouterLink>
          <RouterLink to="/heroes" class="nav-link">Heroes</RouterLink>
          <RouterLink to="/players" class="nav-link">Players</RouterLink>
          <RouterLink to="/items" class="nav-link">Items</RouterLink>
          <RouterLink to="/matches" class="nav-link">Matches</RouterLink>
          <RouterLink to="/about" class="nav-link">About</RouterLink>
        </nav>

        <!-- Include the SearchBar component and bind the search query update event -->
        <SearchBar @update:searchQuery="handleSearch" />
        <div>
          <LoginButton v-if="!steamUser" />
          <LogoutButton v-else />
        </div>
      </div>
    </header>

    <!-- The content area where routes will be displayed -->
    <main>
      <RouterView :searchQuery="searchQuery" />
    </main>
  </div>
</template>

<style scoped>
/* Style for the navigation */
nav {
  display: flex;
  justify-content: space-around;
  background-color: #1a1a1a;
  /* Dark background for the nav */
  padding: 10px;
  border-bottom: 2px solid #f4a261;
  /* Gold accent on the bottom */
}

.nav-link {
  color: var(--vt-c-white);
  /* White text */
  text-decoration: none;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.nav-link:hover {
  background-color: var(--vt-c-red);
  /* Red background on hover */
  color: var(--vt-c-black);
  /* Change text color to black on hover */
}
</style>
