<script setup lang="ts">
  import IconCamera from '@/components/icons/IconCamera.vue'
  import IconEdit from '@/components/icons/IconEdit.vue'
  import IconSearch from '@/components/icons/IconSearch.vue'
</script>
<template>
  <div>
    <div class="flex justify-between">
      <span class="text-blue-500 text-sm">Edit</span>
      <div class="flex text-blue-500 gap-2">
        <IconCamera class="cursor-pointer"/>
        <IconEdit class="cursor-pointer" />
      </div>
    </div>
    <div class="border-b pb-2">
      <h1 class="text-3xl font-bold mt-5">WA Business</h1>
      <div class="flex bg-slate-200 w-full py-1 px-4 rounded-md mt-3 gap-2">
        <IconSearch class="text-gray-400" />
        <input placeholder="Search" type="text" class="bg-transparent text-sm outline-none" />
      </div>
    </div>
    <div>
      <ul class="flex gap-3 mt-2 text-sm">
        <li class="bg-slate-100 py-1 px-2 cursor-pointer rounded-full">All</li>
        <li class="bg-slate-100 py-1 px-2 cursor-pointer rounded-full">New</li>
        <li class="bg-slate-100 py-1 px-2 cursor-pointer rounded-full">Groups</li>
      </ul>
    </div>
  </div>
</template>