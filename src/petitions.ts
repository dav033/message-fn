import axios from 'axios'
// import socket from './socket'
import { basePath } from '@helpers/basePath'
import {
  dashboardChat,
  Message,
  PrivateChat,
  Room,
  Users,
  userSession
} from './types/index'
// getsF
export const getUserById = async (id: string): Promise<Users> => {
  try {
    const response = await axios.get(`${basePath}users/${id}`)
    return response.data.user
  } catch (error) {
    console.log(error.response.data)
  }
}

export const getRoomById = async (id: string): Promise<Room> => {
  try {
    const response = await axios.get(`${basePath}room/${id}`)
    return response.data
  } catch (error) {
    console.log(error.response.data)
  }
}

export const getChatsByIdGroup = async (
  idGroup: string[],
  userId: string
): Promise<dashboardChat> => {
  try {
    const response = await axios.post(`${basePath}room/groupId/`, {
      idGroup,
      userId
    })
    return response.data
  } catch (error) {
    console.log(error.response.data)
  }
}

export const getPrivatesChatsByidGroup = async (
  idGroup: string[],
  userId: string
): Promise<dashboardChat> => {
  try {
    const response = await axios.post(`${basePath}private-chat/groupId`, {
      idGroup,
      userId
    })
    return response.data
  } catch (error) {
    console.log(error.response.data)
  }
}

export const getRooms = async (): Promise<Room[]> => {
  try {
    const response = await axios.get(`${basePath}room/`)
    return response.data
  } catch (error) {
    console.log(error.response.data)
  }
}

export const verifyToken = async (
  token: string
): Promise<{ message: string }> => {
  try {
    const response = await axios.post(
      `${basePath}users/token`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    return response.data
  } catch (error) {
    console.log(error.response.data)
  }
}

export const getMessagesByRoomId = async (
  idRoom: string
): Promise<Message[]> => {
  try {
    const response = await axios.get(`${basePath}messages/${idRoom}`)
    return response.data
  } catch (error) {
    console.log(error.response.data)
  }
}

export const getRoomsLessTheUserRooms = async (
  idUser: string
): Promise<Room[]> => {
  try {
    const response = await axios.post(`${basePath}room/user`, {
      idUser
    })
    return response.data
  } catch (error) {
    console.log(error.response.data)
  }
}

export const createRoom = async (room: {
  name: string
  image?: string
  creator: string
  users: string[]
  type: string
}): Promise<string> => {
  try {
    const response = await axios.post(`${basePath}room/`, { room })
    return response.data
  } catch (error) {
    console.log(error.response.data)
  }
}

export const getUser = async (): Promise<userSession> => {
  try {
    const token = localStorage.getItem('token')
    const response = await axios.post(
      `${basePath}users/token`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    return response.data.user
  } catch (error) {
    console.log(error.response.data)
  }
}

export const loginP = async (user: {
  userName: string
  password: string
}): Promise<userSession> => {
  try {
    const response = await axios.post(`${basePath}users/login`, user, {
      headers: { 'Access-Control-Allow-Origin': '*' }
    })
    console.log('owo', response)

    return response.data
  } catch (error) {
    console.log(error.response.data)
  }
}

export const registerP = async (args: {
  userName: string
  email: string
  password: string
  confirmPassword: string
}): Promise<userSession> => {
  try {
    const response = await axios.post(`${basePath}users/register`, args)

    return response.data
  } catch (error) {
    console.log(error.response.data)
  }
}

export const sendMessage = async (message: Message) => {
  try {
    const response = await axios.post(`${basePath}messages/`, message)
    return response.data
  } catch (error) {
    console.log(error.response.data)
  }
}

export const subscribeToRoom = async (props: {
  idRoom: string
  idUser: string
}) => {
  try {
    const { idRoom, idUser } = props
    const response = await axios.post(`${basePath}users/${idUser}/subscribe`, {
      roomId: idRoom
    })
    return response.data
  } catch (error) {
    console.log(error.response.data)
  }
}

export const getUsersLessOne = async (idUser: string): Promise<Users[]> => {
  try {
    const response = await axios.get(`${basePath}users/allUsers/${idUser}`)
    return response.data
  } catch (error) {
    console.log(error.response.data)
  }
}

export const getMessagesByChatId = async (
  chatId: string
): Promise<Message[]> => {
  try {
    const response = await axios.get(`${basePath}messages/chat/${chatId}`)

    return response.data
  } catch (error) {
    console.log(error.response.data)
  }
}

export const getPrivateChat = async (idChat: string): Promise<PrivateChat> => {
  try {
    const response = await axios.get(`${basePath}private-chat/` + idChat)
    return response.data
  } catch (error) {
    console.log(error.response.data)
  }
}

export const uploadProfileImage = async (
  idUser: string,
  imageData
): Promise<{ message: string }> => {
  try {
    const formData = new FormData()
    formData.append('file', imageData)
    const response = await axios.post(
      `${basePath}users/${idUser}/image`,
      formData
    )

    return response.data
  } catch (error) {
    console.log(error.response.data)
  }
}

export const revalidateUserData = async (
  idUser: string
): Promise<userSession> => {
  try {
    const response = await axios.get(`${basePath}users/revalidate/${idUser}`)

    return response.data
  } catch (error) {
    console.log(error.response.data)
  }
}

export const createPrivateChat = async (data: PrivateChat): Promise<string> => {
  try {
    const response = await axios.post(`${basePath}private-chat`, data)

    return response.data
  } catch (error) {
    console.log(error.response.data)
  }
}

export const getOtherUserByChatId = async (
  chatId: string,
  id: string
): Promise<string> => {
  try {
    const response = await axios.post(
      `${basePath}private-chat/otherUser/${id}`,
      {
        chatId
      }
    )

    return response.data
  } catch (error) {
    console.log(error.response.data)
  }
}

export const setMessagesReaded = async (
  roomId: string,
  userId: string
): Promise<{ success: boolean }> => {
  try {
    const response = await axios.post(`${basePath}room/updateUsersRead`, {
      roomId,
      userId
    })

    return response.data
  } catch (error) {
    console.log(error.response.daa)
  }
}

export const setMessagesReadedChat = async (
  roomId: string,
  userId: string
): Promise<{ success: boolean }> => {
  try {
    const response = await axios.post(`${basePath}room/updateUsersRead`, {
      roomId,
      userId
    })

    return response.data
  } catch (error) {
    console.log(error.response.daa)
  }
}
