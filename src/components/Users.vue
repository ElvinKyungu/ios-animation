<script setup lang="ts">

const props = defineProps({
  image: String,
  hour: String,
  name: String,
  message: String
})
</script>
<template>
  <button class="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
    <div class="flex items-center w-full">
      <img 
        class="rounded-full items-start flex-shrink-0 mr-3" 
        :src="image" 
        width="40" 
        height="40" 
        :alt="name" 
      />
      <div>
        <div class="flex justify-between w-full">
          <h4 class="text-sm font-semibold text-gray-900">{{ name }}</h4>
          <div class="absolute right-0 ">
            <span class="text-xs">{{ hour }}</span>
          </div>
        </div>
        <div class="text-[14px] mt-[2px]">
          <span class="text-sm">{{ message }} </span>
        </div>
      </div>
    </div>
  </button>
</template>