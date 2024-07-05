<script setup lang="ts">
  import { ref, onMounted, onUnmounted, nextTick } from 'vue'
  import gsap from 'gsap'
  import ScreenPassword from '@/components/ScreenPassword.vue'
  import IconBattery from '@/components/icons/IconBattery.vue'
  import IconWifi from '@/components/icons/IconWifi.vue'
  import IconNetwork from '@/components/icons/iconNetwork.vue'
  import ScreenLock from '@/components/SreenLock.vue'
  import ScreenHome from '@/components/ScreenHome.vue'
  import ScreenWhatsapp from '@/components/ScreenWhatsapp.vue'

  const currentScreen = ref('lock')
  const animateIn = (element: HTMLElement) => {
    gsap.fromTo(element, 
      { 
        opacity: 0
      },
      { 
        opacity: 1, 
        duration: .5 
      }
    )
  }
  const handleCorrectPasscode = () => {
    currentScreen.value = 'home';
    nextTick(() => {
      const homeElement = document.querySelector('.screen-home')
      if (homeElement) {
        animateIn(homeElement as HTMLElement)
      }
    })
  }

  const toggleScreen = () => {
    currentScreen.value = 'password'
    nextTick(() => {
      const passwordElement = document.querySelector('.screen-password')
      if (passwordElement) {
        animateIn(passwordElement as HTMLElement)
      }
    })
  }
  onMounted(() => {
    window.addEventListener('correct-passcode', handleCorrectPasscode as EventListener)
    const lockElement = document.querySelector('.screen-lock')
    if (lockElement) {
      animateIn(lockElement as HTMLElement)
    }
  })
  onUnmounted(() => {
    window.removeEventListener('correct-passcode', handleCorrectPasscode as EventListener)
  })
</script>

<template>



<div class="scene">
  <div class="phone-con">
    <div class="phone">
      <div class="buttons">
        <div class="left">
          <div class="button"></div>
          <div class="button"></div>
          <div class="button"></div>
        </div>
        <div class="right">
          <div class="button"></div>
        </div>
      </div>
      <div class="screen-container">
        <div 
          @click="currentScreen === 'lock' && toggleScreen()"
          class="bg relative"
        >
          <img 
            src="https://blogdoiphone.com/wp-content/uploads/2024/06/iOS-18-Wallpaper-ac.jpeg" 
            class="absolute h-full w-full inset-0 object-cover z5" 
            alt="" 
            srcset=""
          >
          <div class="notch-container" v-if="currentScreen === 'home'">
            <div class="notch">
              <div class="content">
                <div class="left">
                  <div class="tile"></div>
                  <div class="text"></div>
                </div>
                <div class="right"></div>
                <div class="bar">
                  <div class="duration"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="relative h-full w-full">
            <div class="mt-4 mr-5 flex justify-end space-x-3 z-50">
              <IconNetwork/>
              <IconWifi />
              <IconBattery />
            </div>
            <!-- <ScreenLock 
              v-if="currentScreen === 'lock'" 
              class="screen-lock cursor-pointer"
            />
            <ScreenPassword 
              v-else-if="currentScreen === 'password'" 
              class="screen-password"
            /> -->
            <ScreenHome  class="screen-home mt-5" /> 
            
            <!-- <ScreenWhatsapp /> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
