import { http } from './index'
// const BASE_BACK_URL = '/api/v1'
const testUrl = 'https://reqres.in/api'
class ProfileService {
  /**
   * Get profile data.
   * API GET Method
   */
  static requestUserData = (idUser: number) => {
    return http
      .get(`${testUrl}/users/${idUser}`)
      .then((response) => {
        return response
      })
      .catch((error) => {
        return error.response
      })
  }
}

export { ProfileService }
