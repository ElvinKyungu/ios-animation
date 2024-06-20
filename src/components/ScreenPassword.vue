<script setup lang="ts">
  import { ref, onMounted, onUnmounted, watch } from 'vue';
  import IconBattery from '@/components/icons/IconBattery.vue';
  import IconWifi from '@/components/icons/IconWifi.vue';
  import iconNetwork from './icons/iconNetwork.vue';

  const correctPasscode = '123580';
  const passcode = ref<string[]>([]);
  const isShaking = ref(false);

  const handleDigitClick = (digit: string) => {
    if (passcode.value.length < 6) {
      passcode.value.push(digit);
      if (passcode.value.length === 6) {
        checkPasscode();
      }
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key >= '0' && event.key <= '9') {
      handleDigitClick(event.key);
    } else if (event.key === 'Backspace' && passcode.value.length > 0) {
      passcode.value.pop();
    }
  };

  const checkPasscode = () => {
    if (passcode.value.join('') === correctPasscode) {
      emitCorrectPasscode()
    } else {
      triggerShake();
      passcode.value = []
    }
  };

  const triggerShake = () => {
    isShaking.value = true;
    setTimeout(() => {
      isShaking.value = false;
    }, 500);
  };

  const emitCorrectPasscode = () => {
    // Émettre l'événement vers le parent
    const event = new CustomEvent('correct-passcode', { 
      detail: passcode.value.join('') 
    })
    window.dispatchEvent(event)
  }

  onMounted(() => {
    window.addEventListener('keydown', handleKeyDown as EventListener);
  });

  onUnmounted(() => {
    window.removeEventListener('keydown', handleKeyDown as EventListener);
  });
</script>

<template>
  <div class="bg-black/50 backdrop-blur-md z-40 -mt-7 w-full flex justify-center flex-col items-center h-full">
    <div class="mt-2 mr-5 flex w-full h-full justify-end space-x-2">
      <iconNetwork />
      <IconWifi />
      <IconBattery />
    </div>
    <div class="flex justify-center flex-col items-center mt-20">
      <h3 class="text-xl text-white">Touch ID or Enter PassCode</h3>
      <ul class="flex gap-4 mt-4">
        <li
          v-for="n in 6"
          :key="n"
          class="digit-input"
          :class="{'bg-white': passcode.length >= n, 'shake': isShaking}"
        ></li>
      </ul>
    </div>
    <div class="grid grid-cols-1 justify-center mt-10 gap-4">
      <ul class="flex gap-8 items-center">
        <li class="digit-lock" @click="handleDigitClick('1')">1</li>
        <li class="digit-lock" @click="handleDigitClick('2')">2</li>
        <li class="digit-lock" @click="handleDigitClick('3')">3</li>
      </ul>
      <ul class="flex gap-8 items-center">
        <li class="digit-lock" @click="handleDigitClick('4')">4</li>
        <li class="digit-lock" @click="handleDigitClick('5')">5</li>
        <li class="digit-lock" @click="handleDigitClick('6')">6</li>
      </ul>
      <ul class="flex gap-8 items-center">
        <li class="digit-lock" @click="handleDigitClick('7')">7</li>
        <li class="digit-lock" @click="handleDigitClick('8')">8</li>
        <li class="digit-lock" @click="handleDigitClick('9')">9</li>
      </ul>
      <ul class="flex gap-8 items-center justify-center">
        <li class="digit-lock" @click="handleDigitClick('0')">0</li>
      </ul>
    </div>
    <div class="flex justify-between w-full mt-6 text-white pb-16 px-5 text-xl">
      <span>Emergency</span>
      <span @click="passcode = []">Cancel</span>
    </div>
  </div>
</template>

<style scoped>

.digit-input.shake {
  animation: shake 0.4s;
}

@keyframes shake {
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
}
</style>