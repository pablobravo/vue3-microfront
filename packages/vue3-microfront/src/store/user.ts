import { UserService } from '@/services/http/UserService'

interface appState {
  userList: Array<any>
}

export const useUserStore = defineStore({
  id: 'user',
  state: (): appState => ({
    userList: []
  }),
  getters: {},
  actions: {
    async requestUserList() {
      const response = await UserService.requestUserData()
      console.log('response', response)
      if (response.results) {
        this.userList = response.results
        return response.results
      }
      return []
    }
  }
})
