<template>
  <div class="page-home">Home
    <div class="header__navigation flex-1 flex justify-end items-center">
      <el-button type="text" @click="handleLogout">Logout</el-button>
    </div>
  </div>
</template>

<script>
// import { LOGOUT } from '@/constants/actions'
export default {
  name: 'Home',
  methods: {
    handleLogout () {
      localStorage.removeItem('user_login')
      setTimeout(() => {
        this.$router.push('/login') // redirect
      })
      // this.$store
      //   .dispatch(`auth/${LOGOUT}`)
      //   .then(message => {
      //     // this.$message({
      //     //   message,
      //     //   showClose: true
      //     // })
      //     console.log(message)
      //     setTimeout(() => {
      //       this.$router.push('/login') // redirect
      //     })
      //   })
      //   .catch(error => {
      //     console.log(error)
      //     // this.$message({
      //     //   message: error?.response?.data?.message || 'error',
      //     //   type: 'error',
      //     //   showClose: true
      //     // })
      //   })
    }
  }
}
</script>
