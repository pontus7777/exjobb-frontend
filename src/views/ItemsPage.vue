<template>
  <div class="items-page">
    <header>
      <h2>Items</h2>
    </header>
    <section class="items-list">
      <ItemCard v-for="item in items" :key="item.id" :item="item" />
    </section>
  </div>
</template>

<script lang="ts">
import ItemCard from '../components/ItemCard.vue'

export default {
  name: 'ItemsPage',
  components: {
    ItemCard,
  },
  data() {
    return {
      items: [
        { id: 1, name: 'Blink Dagger', img: 'path/to/blink.png' },
        { id: 2, name: 'Power Treads', img: 'path/to/power-treads.png' },
        { id: 3, name: 'Manta Style', img: 'path/to/manta-style.png' },
      ],
    }
  },
}
</script>

<style scoped>
.items-page {
  padding: 2rem;
  text-align: center;
}

.items-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
