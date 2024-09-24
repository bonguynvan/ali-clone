<template>
  <MainLayout>
    <div id="ShoppingCartPage" class="mt-4 max-w-[1200px] mx-auto px-2">
        <div v-if="false" class="h-[500px] flex items-center justify-center">
            <div class="pt-20">
                <img src="/cart-empty.png" alt="" width="250" class="mx-auto">
                <div class="text-xl text-center mt-4">No items yet?</div>
                <div class="flex text-center">
                  <NuxtLink to="/auth" class="bg-[#fd374f] w-full text-white text-[29px] font-semibold p-1.5 rounded-full mt-4">Sign in</NuxtLink>
                </div>
            </div>
        </div>
        <div v-else class="md:flex gap-4 justify-between mx-auto w-full">
          <div class="md:w-[65%]">
            <div class="bg-white rounded-lg p-4">
              <div class="text-2xl font-bold mb-2">
                Shopping Cart (0)
              </div>
            </div>
            <div class="bg-[#feeeef] rounded-lg pt-4 mt-4">
              <div class="text-red-500 font-bold">Welcome Deal applicable on 1 item only</div>
            </div>

            <div id="Items" class="bg-white rounded-lg p-4 mt-4">
              <div v-for="product in products">
                <CartItem
                  :product="product"
                  :selectedArray="selectedArray"
                  @selectedRadio="selectedRadioFunc"
                />
              </div>
            </div>
          </div>

          <div class="md:hidden block my-4"></div>

          <div class="md:w-[35%]">
            <div id="Summary" class="bg-white rounded-lg p-4">
              <div class="text-2xl font-extrabold mb-2">Summary</div>
              <div class="flex items-center justify-between my-4">
                <div class="font-semibold">Total</div>
                <div class="text-2xl font-semibold">
                  $ <span class="font-extrabold">{{ totalPriceComputed }}</span>
                </div>
              </div>
              <button
                @click="goToCheckout"
                class="
                  flex
                  items-center
                  justify-center
                  bg-[#fd374f]
                  w-full
                  text-white
                  text-[21px]
                  font-semibold
                  p-1.5
                  rounded-full
                  mt-4
                "
              >
                Checkout
              </button>
            </div>
            <div id="PaymentProtection" class="bg-white rounded-lg p-4 mt-4">
              <div class="text-lg font-semibold mb-2">Payent methods</div>
              <div class="flex items-center justify-start gap-8 my-4">
                <div v-for="card in cards">
                  <img class="h-6" :src="card" alt="">

                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from '~/layouts/MainLayout.vue';
import CartItem from '~/components/CartItem.vue';

import { useUserStore } from '~/stores/user';
const userStore = useUserStore();
const cards = ref([
  'visa.png',
  'mastercard.png',
  'paypal.png',
  'applepay.png'
])

let selectedArray = ref([])

const selectedRadioFunc = (e) => {
  if (!selectedArray.value.length) {
    selectedArray.value.push(e)
    return
  }
  selectedArray.value.forEach((item, index) => {
    if(e.id != item.id) {
      selectedArray.value.push(e)
    } else {
      selectedArray.value.splice(index, 1)

    }
  })
}

onMounted(() => {
  setTimeout(() => userStore.isLoading = false, 200)
})

const totalPriceComputed = computed(() => {
  let price = 0
  userStore.cart.forEach(prod => {
    price += prod.price
  })
  return price/100
})

const goToCheckout = () => {
  let ids = []
  userStore.checkout = []

  selectedArray.value.forEach(item => ids.push(item.id))

  let res = userStore.cart.filter(item => {
    return ids.indexOf(item.id) != -1
  })

  res.forEach(item => userStore.checkout.push(toRaw(item)))

  return navigateTo('/checkout')

}

const products = [
      {id: 1, title: "Shoes", description: "this is description", url: "https://picsum.photos/id/7/800/800", price: 9199},
      {id: 2, title: "Shoes", description: "this is description", url: "https://picsum.photos/id/6/800/800", price: 9299},
      {id: 3, title: "Shoes", description: "this is description", url: "https://picsum.photos/id/71/800/800", price: 3999},
      {id: 4, title: "Shoes", description: "this is description", url: "https://picsum.photos/id/72/800/800", price: 4999},
      {id: 5, title: "Shoes", description: "this is description", url: "https://picsum.photos/id/73/800/800", price: 5999},
      {id: 6, title: "Shoes", description: "this is description", url: "https://picsum.photos/id/74/800/800", price: 6999},
      {id: 7, title: "Shoes", description: "this is description", url: "https://picsum.photos/id/75/800/800", price: 7999},
      {id: 8, title: "Shoes", description: "this is description", url: "https://picsum.photos/id/76/800/800", price: 8999},
      {id: 9, title: "Shoes", description: "this is description", url: "https://picsum.photos/id/77/800/800", price: 3999},
      {id: 10, title: "Shoes", description: "this is description", url: "https://picsum.photos/id/87/800/800", price: 12999},
      {id: 11, title: "Shoes", description: "this is description", url: "https://picsum.photos/id/79/800/800", price: 91299},
      {id: 12, title: "Shoes", description: "this is description", url: "https://picsum.photos/id/12/800/800", price: 9949},
      {id: 13, title: "Shoes", description: "this is description", url: "https://picsum.photos/id/123/800/800", price: 954399},
      {id: 14, title: "Shoes", description: "this is description", url: "https://picsum.photos/id/733/800/800", price: 999923},
    ]



</script>
