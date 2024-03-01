import { http } from './index'
// const BASE_BACK_URL = '/api/v1'
const testUrl = 'https://pokeapi.co/api/v2'
class UserService {
  /**
   * Get user data.
   * API GET Method
   */
  static requestUserData = () => {
    return http
      .get(`${testUrl}/pokemon?limit=10`)
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        return error
      })
  }
}

export { UserService }
