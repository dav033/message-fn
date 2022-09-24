import io from 'socket.io-client'
// const port = 'https://messageproject-back-production.up.railway.app/'
const port = 'http://localhost:80/'
const socket = io(port, {
  autoConnect: true,
  reconnection: true,
  reconnectionAttempts: Infinity,

  extraHeaders: {
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*'
  }
})

export default socket
