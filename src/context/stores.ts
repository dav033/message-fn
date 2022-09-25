import create from 'zustand'

import { loginP, registerP, revalidateUserData } from '../petitions'

import socket from 'src/socket'

import { persist } from 'zustand/middleware'
import { userSession } from 'src/types'

interface userState {
  user: userSession | null
  revalidate: (id: string) => void
  login: (
    userCredentialsUsername: string,
    usersCredentialsPassword: string
  ) => void
  register: (args: {
    userName: string
    email: string
    password: string
    confirmPassword: string
  }) => void

  logout: () => void

  isLogged: () => boolean
}

export const useUser = create(
  persist<userState>(
    (set, get) => ({
      user: null,
      revalidate: async (id: string) => {
        const response = await revalidateUserData(id)

        set({ user: response })
      },
      login: async (
        userCredentialsUsername: string,
        usersCredentialsPassword: string
      ) => {
        const user = {
          userName: userCredentialsUsername,
          password: usersCredentialsPassword
        }
        const response = await loginP(user)

        if (response) {
          set({ user: response })
          alert('todo piola')
        } else {
          alert('owont')
          console.log('OWOOOO')
        }
      },
      register: async (args: {
        userName: string
        email: string
        password: string
        confirmPassword: string
      }) => {
        const response = await registerP(args)
        if (response) {
          set({ user: response })
        }
      },

      logout: () => {
        set({ user: null })
        socket.disconnect()
        socket.emit('desconectado')
      },
      isLogged: () => !!get().user
    }),
    {
      name: 'user-storage',
      getStorage: () => sessionStorage
    }
  )
)

export const useGlobal = create((set) => ({
  isLoading: false,

  setLoading: (value: boolean) => set({ isLoading: value })
}))
