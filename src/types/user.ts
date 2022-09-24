export interface Users {
  _id: string
  userName: string
  email: string
  password: string
  rooms: string[]
  privateChats: string[]
  profileImage?: string
}
