import { defineStore } from 'pinia'
import UserInterface from 'src/interfaces/UserInterface'
import TokensInterface from 'src/interfaces/TokensInterface'
import ApiTokensInterface from 'src/interfaces/Api/TokensInterface'
import { router } from 'src/router'
import { clearAuthorizationHeader, setAuthorizationHeader } from 'boot/axios'

interface UserStoreInterface {
  user?: UserInterface
  tokens: TokensInterface
}

const storageUserTokens = localStorage.getItem('userTokens')

export const useUserStore = defineStore('user', {
  state: (): UserStoreInterface => ({
    user: undefined,
    tokens: storageUserTokens
      ? JSON.parse(storageUserTokens)
      : {
          accessToken: undefined,
        },
  }),
  getters: {},
  actions: {
    saveTokens(tokens: ApiTokensInterface) {
      this.tokens.accessToken = tokens.access_token
      localStorage.setItem('userTokens', JSON.stringify(this.tokens))

      setAuthorizationHeader(this.tokens.accessToken)
    },
    logout() {
      this.user = undefined
      this.tokens.accessToken = undefined
      localStorage.removeItem('userTokens')

      clearAuthorizationHeader()

      router.push({
        name: 'login',
      })
    },
  },
})
