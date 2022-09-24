export interface Room {
  name: string
  image?: string
  creator: string
  users: string[]
  messages: string[]
  createdAt: Date
  type: string
}
