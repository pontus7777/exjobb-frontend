<template>
    <div>
        <input type="text" v-model="query" @keydown.enter="handleSearch" placeholder="Search for players..." />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// Define a reactive variable for the query input
const query = ref('');
const router = useRouter();

// Method to handle the search when Enter is pressed
const handleSearch = () => {
    if (query.value.trim()) {
        // Navigate to the search page with the query as a URL parameter
        router.push({ path: `/search`, query: { q: query.value } });
    }
};
</script>

<style scoped>
/* Style for the search bar */
input {
    padding: 8px;
    font-size: 16px;
    width: 300px;
    margin: 10px;
}
</style>
