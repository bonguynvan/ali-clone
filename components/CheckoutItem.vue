<template>
    <div class="flex justify-start my-2">
        <img :src="product.url" class="rounded-md md:w-[150px] w-[90px]" alt="">

        <div class="overflow-hidden pl-2">
            <div class="flex items-center justify-between truncate">
                <span
                    class="bg-[#fd374f] text-white text-[9px] font-semibold px-1.5 rounded-sm min-w-[80px]">Welcome
                    Deal</span>
                <div class="truncate pl-2">{{ product.title }}</div>
            </div>
            <div class="text-lg font-semibold mt-2">
                $ <span class="font-bold">{{ product.price / 100 }}</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps(['product'])
const { product } = props
</script>
