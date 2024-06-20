<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue';
  import ScreenPassword from '@/components/ScreenPassword.vue';
  import IconBattery from '@/components/icons/IconBattery.vue';
  import IconWifi from '@/components/icons/IconWifi.vue';
  import IconNetwork from '@/components/icons/iconNetwork.vue';
  import ScreenLock from '@/components/SreenLock.vue';
  import ScreenHome from '@/components/ScreenHome.vue';
  import BorderPhone from '@/components/BorderPhone.vue';

  const currentScreen = ref('lock')

  const handleCorrectPasscode = () => {
    console.log('Passcode correct event received')
    currentScreen.value = 'home'
  }

  onMounted(() => {
    window.addEventListener('correct-passcode', handleCorrectPasscode as EventListener)
  })

  onUnmounted(() => {
    window.removeEventListener('correct-passcode', handleCorrectPasscode as EventListener)
  })

  const toggleScreen = () => {
    currentScreen.value = 'password'
  }
</script>

<template>
  <main class="w-full h-screen bg-gray-900 flex justify-center items-center">
    <div class="px-10 min-h-screen flex justify-center items-center z-50">
      <div 
        class="
          relative h-[600px] w-[320px] bg-black rounded-[45px] shadow-xl 
          overflow-hidden border-[10px] border-black cursor-pointer z-40
        "
      >
        <div @click="currentScreen === 'lock' && toggleScreen()">
          <img 
            src="https://blogdoiphone.com/wp-content/uploads/2024/06/iOS-18-Wallpaper-ac.jpeg" 
            class="absolute h-full w-full inset-0 object-cover" 
            alt="" 
            srcset=""
          >
          <div class="absolute inset-x-0 top-0 z-50">
            <div class="h-6 w-[45%] m-auto bg-gray-900 rounded-b-[1rem]"></div>
          </div>
          <div class="relative h-full">
            <div class="mt-1 mr-5 flex justify-end space-x-1 z-50">
              <IconNetwork/>
              <IconWifi />
              <IconBattery />
            </div>
            <div class="h-0.5 w-10 bg-white rounded ml-auto mr-7 mt-1"></div>
            <ScreenLock v-if="currentScreen === 'lock'" />
            <ScreenPassword v-else-if="currentScreen === 'password'" />
            <ScreenHome v-else-if="currentScreen === 'home'" />
          </div>
        </div>
      </div>
    </div>
    <BorderPhone />
  </main>
</template>

<style>
/* Ajoutez ici votre style personnalisé si nécessaire */
</style>
