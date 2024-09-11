<!-- ChatList.vue -->
<script setup lang="ts">
import type { Conversation } from '@/type/whatsapp'

const props = defineProps<({
  conversations: Conversation[]
})>()

const emit = defineEmits(['conversationSelected'])

const selectConversation = (conversation: object) => {
  emit('conversationSelected', conversation)
}
</script>

<template>
  <div>
    <button
      v-for="conversation in props.conversations"
      :key="conversation.id"
      @click="selectConversation(conversation)"
      class="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50"
    >
      <div class="flex items-center w-full">
        <img 
          class="rounded-full items-start flex-shrink-0 mr-3" 
          :src="conversation.image" 
          width="40" 
          height="40" 
          :alt="conversation.name" 
        />
        <div>
          <div class="flex justify-between w-full">
            <h4 class="text-sm font-semibold text-gray-900">{{ conversation.name }}</h4>
            <div class="absolute right-0">
              <span class="text-xs">{{ conversation.messages[conversation.messages.length - 1].hour }}</span>
            </div>
          </div>
          <div class="text-[14px] mt-[2px]">
            <span class="text-sm">{{ conversation.lastMessage }} </span>
          </div>
        </div>
      </div>
    </button>
  </div>
</template>
