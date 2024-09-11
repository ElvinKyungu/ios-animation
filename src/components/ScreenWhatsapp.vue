<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import type { Conversation } from '@/type/whatsapp'
import ChatList from './whatsapp/ChatList.vue'
import ChatWindow from './whatsapp/ChatWindow.vue'
import jessicaAvatar from '@/assets/jess.jpeg'
import elonAvatar from '@/assets/elon.jpg'
import gabrielAvatar from '@/assets/gabriel.jpeg'
import debyamAvatar from '@/assets/debyam.jpeg'
import antFuAvatar from '@/assets/antfu.jpg'
import WhatsappLoader from './whatsapp/WhatsappLoader.vue'
import WhatsappHeader from './whatsapp/WhatsappHeader.vue'
import {conversationsData} from '@/data/conversation'
const showMainContent = ref(false)
const selectedConversation = ref<Conversation | null>(null)

const conversations = ref<Conversation[]>();

onMounted(() => {
  gsap.to('.welcome-message', {
    duration: 2,
    opacity: 1,
    onComplete: () => {
      showMainContent.value = true
      gsap.fromTo('main', { opacity: 0 }, { duration: 1, opacity: 1 })
    }
  })
})

const navigateToConversation = (id: number) => {
  selectedConversation.value = conversations?.value.find(convo => convo.id === id) || null
}
</script>

<template>
  <div class="relative">
    <WhatsappLoader v-if="!showMainContent"/>
    <main v-if="showMainContent" class="overflow-y-auto -mt-16 z-20">
      <section v-if="!selectedConversation" class=" flex flex-col justify-center antialiased bg-gray-50 text-gray-600 p-4">
        <div class="pt-4 chatlist">
          <div class="relative bg-white rounded-lg">
            <WhatsappHeader />
            <div class="pt-3 pb-20">
              <div class="divide-y divide-gray-200">
                <ChatList :conversations="conversations" @conversationSelected="navigateToConversation" />
              </div>
            </div>
            <button class="absolute bottom-10 right-5 inline-flex items-center text-xs font-medium text-white bg-indigo-500 hover:bg-indigo-600 rounded-full text-center px-3 py-2 shadow-lg focus:outline-none focus-visible:ring-2">
              <svg class="w-3 h-3 fill-current text-indigo-300 flex-shrink-0 mr-2" viewBox="0 0 12 12">
                <path d="M11.866.146a.5.5 0 0 0-.437-.139c-.26.044-6.393 1.1-8.2 2.913a4.145 4.145 0 0 0-.617 5.062L.305 10.293a1 1 0 1 0 1.414 1.414L7.426 6l-2 3.923c.242.048.487.074.733.077a4.122 4.122 0 0 0 2.933-1.215c1.81-1.809 2.87-7.94 2.913-8.2a.5.5 0 0 0-.139-.439Z" />
              </svg>
              <span class="">New Chatd</span>
            </button>
          </div>
        </div>
      </section>
      <section class="chatWindow" v-else>
        <ChatWindow :conversation="selectedConversation" />
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
