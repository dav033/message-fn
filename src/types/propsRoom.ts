import { Message } from './message'

export interface PropsRoom {
  chat: {
    room: {
      _id: string
      createdAt: Date
      creator: string
      messages: string[]
      name: string
      type: string
      users: string[]
    }
    lastMessage: Message
    lengthMessages: number
    noReadedMessages: Message[]
  }
  RenderLastMessages: () => void
  renderDate: () => void
  userId: string
  privateChatInfo: {
    chatId: string
    userName: string
  }[]
}
