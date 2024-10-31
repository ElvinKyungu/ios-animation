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
    <div class="grid grid-cols-12 gap-2 md:gap-6 mt-5">
      <div class="bg-[#4379c9]/20 col-span-6 backdrop-blur-sm cursor-pointer w-full rounded-lg p-2 text-white">
        <div class="flex flex-col ">
          <span class="text-[10px] md:text-xs md:font-semibold text-wrap">Lubumbashi</span>
          <span class="text-xl md:text-2xl">12°</span>
        </div>
        <p class="mt-3 mt:mt-7 text-xs font-semibold">Sunny</p>
      </div>
      <div class="flex flex-col col-span-6 justify-between cursor-pointer backdrop-blur-sm bg-[#cfe4b4]/20 w-full p-2 rounded-lg">
        <div class="flex justify-end items-end">
          <div class="bg-[#1c8ff5]  border-2 border-white w-4 h-4 md:w-8 md:h-8 rounded-full "></div>
        </div>
        <span class="text-xs font-semibold text-white">Hudson Ave</span>
      </div>
    </div>
    <div class="flex justify-center">
      <ul class="grid grid-cols-3 md:grid-cols-4 gap-5 mt-8 text-white">
        <li class="icons-app" @click="openWhatsapp">
          <img src="@/assets/whatsap.png" class="w-10 cursor-pointer" alt="">
          <span class="text-[10px] md:text-xs">Whatsapp</span>
        </li>
        <li class="icons-app">
          <img src="@/assets/facebook.png" class="w-10 cursor-pointer" alt="">
          <span class="text-[10px] md:text-xs">Facebook</span>
        </li>
        <li class="icons-app">
          <img src="@/assets/insta.png" class="w-10 cursor-pointer" alt="">
          <span class="text-[10px] md:text-xs">Instagram</span>
        </li>
        <li class="icons-app">
          <img src="@/assets/telegram.png" class="w-10 cursor-pointer" alt="">
          <span class="text-[10px] md:text-xs">Telegram</span>
        </li>
        <li class="icons-app">
          <img src="@/assets/twitter.png" class="w-10 cursor-pointer" alt="">
          <span class="text-[10px] md:text-xs">Twitter</span>
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