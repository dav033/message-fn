import { userSession } from 'src/types'
import socket from 'src/socket'
export const userInit = (args: userSession) => {
  const { rooms, privateChats } = args.user

  if (rooms) {
    rooms.forEach((room) => socket.emit('joinRoom', room))
  }

  if (privateChats) {
    privateChats.forEach((chat) => socket.emit('joinRoom', chat))
  }
}
