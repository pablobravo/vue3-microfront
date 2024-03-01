import { ProfileService } from '@/services/http/ProfileService'

interface appState {
  name: string
}

export const useProfileStore = defineStore({
  id: 'profile',
  state: (): appState => ({
    name: ''
  }),
  getters: {},
  actions: {
    async requestUserName(payload: number) {
      const response = await ProfileService.requestUserData(
        payload
      )
      if (response.status !== 200) return response
      if (response.data)
        this.name = response.data.data.first_name
      return response
    }
  }
})
