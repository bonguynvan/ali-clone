<template>
  <MainLayout>
    <div id="CheckoutPage" class="mt-4 max-w-[1200px] mx-auto px-2">
        <div class="md:flex gap-4 justify-between mx-auto w-full">
            <div class="md:w-[65%]">
                <div class="bg-white rounded-lg p-4">
                    <div class="text-xl font-semibold mb-2">Shipping Address</div>
                    <div v-if="false">
                        <NuxtLink to="/address" class="flex items-center pb-2 text-blue-500 hover:text-red-400">
                            <Icon name="mdi:plus" size="18" class="mr-2"/>Update Address
                        </NuxtLink>

                        <div class="pt-2 border-t">
                            <div class="underline pb-1">Delivery Address</div>

                            <ul class="text-xs">
                                <li class="flex items-center gap-2">
                                    <div>Contact name:</div>
                                    <div class="font-bold">{{ currentAddress.data.name }}</div>
                                </li>
                                <li class="flex items-center gap-2">
                                    <div>Address:</div>
                                    <div class="font-bold">{{ currentAddress.data.name }}</div>
                                </li>
                                <li class="flex items-center gap-2">
                                    <div>Zip Code:</div>
                                    <div class="font-bold">{{ currentAddress.data.name }}</div>
                                </li>
                                <li class="flex items-center gap-2">
                                    <div>Country:</div>
                                    <div class="font-bold">{{ currentAddress.data.name }}</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <NuxtLink 
                        v-else
                        to="/address"
                        class="flex items-center text-blue-500 hover:text-red-400"
                    >
                        <Icon name="mdi:plus" size="18" class="mr-2"/>
                        Add New Address
                    </NuxtLink>
                </div>
                <div id="Items" class="bg-white rounded-lg p-4 mt-4">
                    <div v-for="product in products">
                        <CheckoutItem :product="product" />
                    </div>
                </div>
            </div>

            <div class="md:hidden block my-4"></div>
            <div class="md:w-[35%]">
                <div id="PlaceOrder" class="bg-white rounded-lg p-4">
                    <div class="text-2xl font-extrabold mb-2">Summary</div>
                    <div class="flex items-center justify-between my-4">
                        <div>Total Shipping</div>
                        <div>Free</div>
                    </div>

                    <div class="border-t"></div>
                    <div class="flex items-center justify-between my-4">
                        <div>Total</div>
                        <div class="text-2xl font-semibold">
                            $ <span class="font-extrabold">{{ total / 100 }}</span>
                        </div>
                    </div>

                    <form @submit.prevent="pay">
                        <div id="card-element" class="border border-gray-500 p-2 rounded-sm">

                        </div>
                        <p id="card-error" role="alert" class="text-red-700 text-center font-semibold"></p>
                        <button
                            type="submit"
                            :disabled="isProcessing"
                            class="
                                mt-4
                                bg-gradient-to-r
                                from-[#fe630c]
                                to-[#ff3200]
                                w-full
                                text-white
                                text-[21px]
                                font-semibold
                                p-1.5
                                rounded-full
                            "
                            :class="isProcessing ? 'opacity-70' : 'opacity-100'"
                        >
                            <Icon v-if="isProcessing" name="eos-icons:loading"/>
                            <div v-else>Place Order</div>
                        </button>
                    </form>
                </div>

                <div class="bg-white rounded-lg p-4 mt-4">
                    <div class="text-lg font-semibold mb-2 mt-2">AliExpress</div>
                    <p class="my-">
                        AliExpress keeps your information and payment safe
                    </p>
                </div>
            </div>
        </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from '~/layouts/MainLayout.vue';
import CheckoutItem from '~/components/CheckoutItem.vue';
import { useUserStore } from '~/stores/user';
const userStore = useUserStore();
const route = useRoute()

let stripe = null
let elements = null
let card = null
let form = null
let total = ref(0)
let clientSecret = null
let currentAddress = ref(null)
let isProcessing = ref(false)

onMounted(() => {
    isProcessing.value = true

    userStore.checkout.forEach(item => {
        total.value += item.price
    })
})

watch(() => total.value, () => {
    if(total.value >0) {
        stripeInit()
    }
})

const stripeInit = async () => {

}

const pay = async () => {

}

const createOrder = async (stripeId) => {

}

const showError = (errorMsgText) => {

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
