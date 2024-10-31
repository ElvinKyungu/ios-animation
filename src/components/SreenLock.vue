<script setup lang="ts">
  import IconLock from './icons/IconLock.vue'
</script>
<template>
  <div class="mt-5 md:mt-20 flex flex-col items-center">
    <IconLock class="w-5 h-5 md:w-10 md:h-10" />
    <p class="text-white md:mt-3 text-lg md:text-3xl lg:text-6xl font-extralight">9:11</p>
    <p class="text-white md:mt-1 text-base md:text-lg font-light">Jeudi, 20 Juin</p>
  </div>
  <div class="relative mt-2 mx-2 cursor-pointer">
    <div class="absolute -bottom-2 inset-x-0 h-full bg-white/30 backdrop-blur-md rounded-2xl scale-95 origin-bottom shadow-sm"></div>
    <div class="p-2 md:p-4 rounded-3xl bg-white/20 backdrop-blur-md">
      <div class="flex justify-space-between">
        <div class="w-full">
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <img 
                src="@/assets/whatsapp.png"
                class="w-7 md:w-10"
                alt=""
              >
              <p class="uppercase text-xs md:text-base">wa business</p>
            </div>
            <p class="text-xs">now</p>
          </div>
          <h2 class="text-sm md:text-lg font-bold mt-2">Gabriel</h2>
          <p class="text-xs md:text-sm">mais focus sur le code Elvin</p>
        </div>
      </div>
    </div>
  </div>
</template>