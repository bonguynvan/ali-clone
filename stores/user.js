import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
    state: () => ({
        isMenuOverlay: false,
        isLoading: false,
        cart: [],
        checkout: [],
        selectedArray: []
    }),
    persist: true
})