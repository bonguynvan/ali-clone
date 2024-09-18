<template>
  <MainLayout>
    <div id="IndexPage" class="mt-4 max-w-[1200px] mx-auto px-2">
        <div class="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
          <div v-if="products" v-for="product in products" :key="product.id">
              <ProductComponent :product="product"/>
          </div>
        </div>
    </div>
  </MainLayout>
</template>

<script lang="ts" setup>
    import MainLayout from '~/layouts/MainLayout.vue'
    const products = [
      {id: 1, title: "Shoes", description: "this is description", url: "https://picsum.photos/id/7/800/800", price: 9999},
      {id: 2, title: "Shoes", description: "this is description", url: "https://picsum.photos/id/7/800/800", price: 9999},
      {id: 3, title: "Shoes", description: "this is description", url: "https://picsum.photos/id/7/800/800", price: 9999},
      {id: 4, title: "Shoes", description: "this is description", url: "https://picsum.photos/id/7/800/800", price: 9999},
      {id: 5, title: "Shoes", description: "this is description", url: "https://picsum.photos/id/7/800/800", price: 9999},
      {id: 6, title: "Shoes", description: "this is description", url: "https://picsum.photos/id/7/800/800", price: 9999},
      {id: 7, title: "Shoes", description: "this is description", url: "https://picsum.photos/id/7/800/800", price: 9999},
      {id: 8, title: "Shoes", description: "this is description", url: "https://picsum.photos/id/7/800/800", price: 9999},
      {id: 9, title: "Shoes", description: "this is description", url: "https://picsum.photos/id/7/800/800", price: 9999},
      {id: 10, title: "Shoes", description: "this is description", url: "https://picsum.photos/id/7/800/800", price: 9999},
      {id: 11, title: "Shoes", description: "this is description", url: "https://picsum.photos/id/7/800/800", price: 9999},
      {id: 12, title: "Shoes", description: "this is description", url: "https://picsum.photos/id/7/800/800", price: 9999},
      {id: 13, title: "Shoes", description: "this is description", url: "https://picsum.photos/id/7/800/800", price: 9999},
      {id: 14, title: "Shoes", description: "this is description", url: "https://picsum.photos/id/7/800/800", price: 9999},
    ]
</script>
