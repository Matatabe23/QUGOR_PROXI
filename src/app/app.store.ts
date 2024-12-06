import { defineStore } from 'pinia';
import { useToast } from 'vue-toastification';

const toast = useToast();

export const useAppStore = defineStore('app', {
    state: () => ({
        isProxx: false
    }),

    getters: {
        isLg: (state) => state.width >= 1366,
        isMd: (state) => state.width >= 768,
    },

    actions: {

    },
});
