<script setup lang="ts">
  import IconBattery from './icons/IconBattery.vue'
  import IconCamera from './icons/IconCamera.vue'
  import IconLight from './icons/IconLight.vue'
  import IconLock from './icons/IconLock.vue'
  import IconWifi from './icons/IconWifi.vue'
  import IconNetwork from './icons/iconNetwork.vue'
</script>
<template>
  <img 
    src="https://blogdoiphone.com/wp-content/uploads/2024/06/iOS-18-Wallpaper-ac.jpeg" 
    class="absolute h-full w-full inset-0 object-cover" 
    alt="" 
    srcset=""
  >
  <div class="absolute inset-x-0 top-0">
    <div class="h-6 w-[45%] m-auto bg-gray-900 rounded-b-[4rem]"></div>
  </div>
  <div class="relative h-full">
    <div class="mt-1 mr-5 flex justify-end space-x-1 ">
      <IconNetwork/>
      <IconWifi />
      <IconBattery />
    </div>
    <div class="h-0.5 w-10 bg-white rounded ml-auto mr-7 mt-1"></div>
    <div class="mt-2 flex flex-col items-center">
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
  </div>
</template>