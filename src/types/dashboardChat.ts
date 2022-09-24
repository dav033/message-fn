import { Message, Room } from '.'

export interface dashboardChat {
  room: Room
  lastMessage: Message | null
  lenghtMessage: number
  noReadedMessages: Message[] | null
}
