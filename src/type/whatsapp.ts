export type Message = {
  content: string
  sender: 'emetteur' | 'recepteur'
  hour: string
}

export type Conversation = {
  id: number
  name: string
  image: string
  lastMessage: string
  messages: Message[]
}