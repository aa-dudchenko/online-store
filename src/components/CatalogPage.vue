<template>
  <div class="CatalogPage">
    <h2>Catalog</h2>
    <catalog-item/>
  </div>
</template>

<script>
import CatalogItem from './CatalogItem.vue'
export default {
  name: 'CatalogPage',

  components: {
    CatalogItem,
  },
}
</script>