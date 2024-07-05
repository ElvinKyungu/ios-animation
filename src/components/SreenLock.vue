<script setup lang="ts">
  import IconLock from './icons/IconLock.vue'
</script>
<template>
  <div class="mt-20 flex flex-col items-center">
    <IconLock />
    <p class="text-white mt-3 text-6xl font-extralight">9:11</p>
    <p class="text-white mt-1 text-lg font-light">Jeudi, 20 Juin</p>
  </div>
  <div class="relative mt-2 mx-2 cursor-pointer">
    <div class="absolute -bottom-2 inset-x-0 h-full bg-white/30 backdrop-blur-md rounded-2xl scale-95 origin-bottom shadow-sm"></div>
    <div class=" p-4 rounded-3xl bg-white/20 backdrop-blur-md">
      <div class="flex justify-space-between">
        <div class="w-full">
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <img 
                src="@/assets/whatsapp.png"
                class="w-10"
                alt=""
              >
              <p class="uppercase font-medium">wa business</p>
            </div>
            <p class="text-xs">now</p>
          </div>
          <h2 class="text-lg font-bold">Gabriel</h2>
          <p class="text-sm">mais focus sur le code Elvin</p>
        </div>
      </div>
    </div>
  </div>
</template>