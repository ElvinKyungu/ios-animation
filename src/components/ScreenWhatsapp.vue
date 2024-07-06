<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import IconCamera from './icons/IconCamera.vue';
import IconEdit from './icons/IconEdit.vue';
import IconSearch from './icons/IconSearch.vue';
import Users from './Users.vue';
import jessicaAvatar from '@/assets/jess.jpeg';
import elonAvatar from '@/assets/elon.jpg';
import gabrielAvatar from '@/assets/gabriel.jpeg';
import debyamAvatar from '@/assets/debyam.jpeg';
import antFuAvatar from '@/assets/antfu.jpg';
import IconBattery from '@/components/icons/IconBattery.vue';
import IconWifi from '@/components/icons/IconWifi.vue';
import IconNetwork from './icons/iconNetwork.vue'

const showMainContent = ref(false);

onMounted(() => {
  gsap.to('.welcome-message', {
    duration: 2,
    opacity: 1,
    onComplete: () => {
      showMainContent.value = true;
      gsap.fromTo('main', { opacity: 0 }, { duration: 1, opacity: 1 });
    }
  });
});
</script>

<template>
  <div class="relative">
    <div
      v-if="!showMainContent"
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

    <main v-if="showMainContent" class="overflow-y-auto  -mt-16 z-20">
      <section class="flex flex-col justify-center antialiased bg-gray-50 text-gray-600 p-4">
        <div class="pt-4">
          <div class="relative bg-white rounded-lg">
            <div class="flex justify-between">
              <span class="text-blue-500 text-sm">Edit</span>
              <div class="flex text-blue-500 gap-2">
                <IconCamera />
                <IconEdit />
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
                <li class="bg-slate-100 py-1 px-2 rounded-full">All</li>
                <li class="bg-slate-100 py-1 px-2 rounded-full">New</li>
                <li class="bg-slate-100 py-1 px-2 rounded-full">Groups</li>
              </ul>
            </div>
            <div class="pt-3 pb-12">
              <div class="divide-y divide-gray-200">
                <Users 
                  :image="gabrielAvatar"
                  name="Gabriel"
                  message="mais Elvin, focus sur le code"
                  hour="12:13 PM"
                />
                <Users 
                  :image="elonAvatar"
                  name="Elon Musk"
                  message="Welcome at tesla Elvin 🥳"
                  hour="12:13 PM"
                />
                <Users 
                  :image="antFuAvatar"
                  name="Anthony Fu"
                  message="I prefer ref to reactive for several reasons"
                  hour="12:13 PM"
                />
                <Users 
                  :image="jessicaAvatar"
                  name="Jess"
                  message="I like the way you've evolved, bravo Elvin."
                  hour="12:13 PM"
                />
                <Users 
                  :image="debyamAvatar"
                  name="Deb"
                  message="Ok, je t'envoi le soir"
                  hour="12:13 PM"
                />
                <Users 
                  :image="debyamAvatar"
                  name="Deb"
                  message="Ok, je t'envoi le soir"
                  hour="12:13 PM"
                />
                <Users 
                  :image="debyamAvatar"
                  name="Deb"
                  message="Ok, je t'envoi le soir"
                  hour="12:13 PM"
                />
              </div>
            </div>
            <button class="absolute bottom-10 right-5 inline-flex items-center text-xs font-medium text-white bg-indigo-500 hover:bg-indigo-600 rounded-full text-center px-3 py-2 shadow-lg focus:outline-none focus-visible:ring-2">
              <svg class="w-3 h-3 fill-current text-indigo-300 flex-shrink-0 mr-2" viewBox="0 0 12 12">
                <path d="M11.866.146a.5.5 0 0 0-.437-.139c-.26.044-6.393 1.1-8.2 2.913a4.145 4.145 0 0 0-.617 5.062L.305 10.293a1 1 0 1 0 1.414 1.414L7.426 6l-2 3.923c.242.048.487.074.733.077a4.122 4.122 0 0 0 2.933-1.215c1.81-1.809 2.87-7.94 2.913-8.2a.5.5 0 0 0-.139-.439Z" />
              </svg>
              <span class="">New Chat</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
.welcome-message {
  transition: opacity 2s ease;
}
.screen-welcome {
  height: 80em;
}
</style>
