<template>
  <div
      class="
        welcome-message screen-welcome -mt-16 
        flex justify-center items-center w-full
       bg-white relative
      "
    >
      <img 
        src="@/assets/whatsapp.png" 
        class="w-20 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" alt=""
      >
      <p class="absolute bottom-20 flex flex-col justify-center items-center">
        <span class="text-sm text-gray-500">from</span>
        <span class="text-base text-green-500 flex items-center gap-2">
          <img src="@/assets/meta.png" alt="">
          <span>Meta</span>
        </span>
      </p>
    </div>
</template>