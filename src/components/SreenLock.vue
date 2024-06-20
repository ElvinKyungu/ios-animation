<script setup lang="ts">
  import IconCamera from './icons/IconCamera.vue'
  import IconLight from './icons/IconLight.vue'
  import IconLock from './icons/IconLock.vue'
</script>
<template>
  <div class="mt-5 flex flex-col items-center">
    <IconLock />
    <p class="text-white mt-3 text-6xl font-extralight">9:11</p>
    <p class="text-white mt-1 text-lg font-light">Jeudi, 20 Juin</p>
  </div>
  <div class="relative mt-2 mx-2">
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
          <p>mais focus sur le code Elvin</p>
        </div>
      </div>
    </div>
  </div>
  <div 
    class="
      flex mt-52 justify-between w-full px-10
    "
  >
    <button class="bg-gray-800/40 h-8 w-8 text-white rounded-full flex justify-center items-center" >
      <IconLight />
    </button>
    <button  
      class="bg-gray-800/40 h-8 w-8 text-white rounded-full flex justify-center items-center"
    >
      <IconCamera />
    </button>
  </div>
  <div class="h-1 w-28 bg-white rounded flex m-auto mt-1"></div>
</template>