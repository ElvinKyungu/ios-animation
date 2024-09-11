<script setup lang="ts">
import { ref } from 'vue'
import ScreenWhatsapp from './ScreenWhatsapp.vue'
const isOpenWhatsapp = ref(false)

const openWhatsapp = ()=>{
  isOpenWhatsapp.value = true
}
</script>
<template>
  <main class="p-5" v-if="!isOpenWhatsapp">
    <div class="flex justify-between gap-6 mt-5">
      <div class="bg-[#4379c9]/20 backdrop-blur-sm cursor-pointer w-full rounded-lg p-2 text-white">
        <div class="flex flex-col">
          <span class="text-xs  font-semibold">Lubumbashi</span>
          <span class="text-2xl">12°</span>
        </div>
        <p class="mt-7 text-xs font-semibold">Sunny</p>
      </div>
      <div class="flex flex-col justify-between cursor-pointer backdrop-blur-sm bg-[#cfe4b4]/20 w-full p-2 rounded-lg">
        <div class="flex justify-end items-end">
          <div class="bg-[#1c8ff5]  border-2 border-white w-8 h-8 rounded-full "></div>
        </div>
        <span class="text-xs font-semibold">Hudson Ave</span>
      </div>
    </div>
    <div class="flex justify-center">
      <ul class="grid grid-cols-4 gap-5 mt-8 text-white">
        <li class="icons-app" @click="openWhatsapp">
          <img src="@/assets/whatsap.png" class="w-10 cursor-pointer" alt="">
          <span class="text-xs">Whatsapp</span>
        </li>
        <li class="icons-app">
          <img src="@/assets/facebook.png" class="w-10 cursor-pointer" alt="">
          <span class="text-xs">Facebook</span>
        </li>
        <li class="icons-app">
          <img src="@/assets/insta.png" class="w-10 cursor-pointer" alt="">
          <span class="text-xs">Instagram</span>
        </li>
        <li class="icons-app">
          <img src="@/assets/telegram.png" class="w-10 cursor-pointer" alt="">
          <span class="text-xs">Telegram</span>
        </li>
        <li class="icons-app">
          <img src="@/assets/twitter.png" class="w-10 cursor-pointer" alt="">
          <span class="text-xs">Twitter</span>
        </li>
      </ul>
    </div>
  </main>
  <ScreenWhatsapp v-else/>
</template>
<style scoped>
.icons-app{
  @apply flex flex-col items-center cursor-pointer
}
</style>