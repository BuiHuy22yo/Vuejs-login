// import http from '@/plugins/axios'
// import {authHeaders} from '@/utils/auth'

const axios = require('axios')
class AuthService {
  login ({account, password}) {
    console.log('account')
    axios.post('http://localhost:8000/api/v1/login', {
      user_id: account,
      password
    })
      .then(function (response) {
        // handle success
        console.log(response)
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
  }
}

const authService = new AuthService()

export default authService
