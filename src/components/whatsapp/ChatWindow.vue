<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import type { Conversation, Message } from '@/type/whatsapp'

const selectedConversation = ref<Conversation>({
  id: 0,
  name: '',
  messages: [],
  image: '',
  lastMessage: ''
})

const newMessage = ref('')

const sendMessage = () => {
  if (newMessage.value.trim() !== '') {
    const message: Message = {
      content: newMessage.value,
      hour: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      sender: 'emetteur'
    }
    selectedConversation.value.messages.push(message)
    newMessage.value = ''
  }
}

const props = defineProps({
  conversation: {
    type: Object as () => Conversation,
    required: true,
  }
})

onMounted(() => {
  selectedConversation.value = { ...props.conversation }
})
</script>

<template>
  <div class="h-full flex flex-col">
    <header class="p-4 bg-indigo-500 text-blue">
      <h1 class="text-xl">{{ selectedConversation.name }}</h1>
    </header>
    <div class="flex-1 overflow-y-auto p-4">
      <div v-for="(message, index) in selectedConversation.messages" :key="index" class="mb-2">
        <p><strong>{{ message.sender }}:</strong> {{ message.content }} <span class="text-xs text-gray-500">{{ message.hour }}</span></p>
      </div>
    </div>
    <div class="p-4 bg-gray-200">
      <input 
        v-model="newMessage" 
        @keyup.enter="sendMessage" 
        class="w-full px-4 py-2 rounded-lg focus:outline-none" 
        placeholder="Type your message..." 
      />
    </div>
  </div>
</template>

<style scoped>
/* Ajoutez des styles personnalisés si nécessaire */
</style>
