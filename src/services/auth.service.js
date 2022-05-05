// import http from '@/plugins/axios'
import {authHeaders} from '@/utils/auth'
import {reject} from "eslint-plugin-promise/rules/lib/promise-statics";

const axios = require('axios')
class AuthService {
  login ({account, password}) {
    return axios.post('http://localhost:8000/api/v1/login', {
      user_id: account,
      password
    })
      .then(res => {
        return res.data.data
      })
      .catch(function (error) {
        // handle error
        return reject(error)
      })
  }

  logout () {
    return axios.get('http://localhost:8000/api/v1/logout', {
      headers: authHeaders()
    })
      .then(res => {
        return res.data.data
      })
      .catch(err => {
        return reject(err)
        // return Promise.reject(err)
      })
  }
}

const authService = new AuthService()

export default authService
