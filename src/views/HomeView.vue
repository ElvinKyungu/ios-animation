<script setup lang="ts">
  import SreenLock from '@/components/SreenLock.vue';
</script>

<template>
  <main class="w-full h-screen bg-gray-900 flex justify-center items-center">
    <div class="px-10 min-h-screen flex justify-center items-center">
      <div 
        class="
          relative h-[600px] w-[320px] bg-black rounded-[60px] shadow-xl 
          overflow-hidden border-[14px] border-black cursor-pointer
        "
      >
        <SreenLock/>
      </div>
    </div>
  </main>
</template>
<style>

</style>
