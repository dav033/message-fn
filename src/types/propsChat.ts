import { Message } from './message'

export interface PropsChat {
  chat: {
    room: {
      _id: string
      user1: string
      user2: string
      messages: string[]
    }
    lastMessage: Message
    lengthMessages: number
    noReadedMessages: Message[]
  }
  RenderLastMessages: () => void
  renderDate: () => void
  privateChatInfo: {
    chatId: string
    userName: string
  }[]
}
