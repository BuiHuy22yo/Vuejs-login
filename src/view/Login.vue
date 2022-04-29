<template>
  <div class="page-login">
    <el-row align="middle" class="min-h-screen" justify="center" type="flex">
      <el-col class="p-6 rounded shadow" :lg="8" :md="12" :xs="24">
        <div class="mb-6 text-center T30M_38">{{ $t('title.login') }}</div>

        <el-form ref="userForm" :model="userForm" :rules="rules" >
          <el-form-item :label="$t('label.account')" prop="account" required>
            <el-input v-model="userForm.account" autocomplete="off" @keyup.enter.native="handleLogin"></el-input>
          </el-form-item>

          <el-form-item :label="$t('label.password')" prop="password" required>
            <el-input
              v-model="userForm.password"
              autocomplete="off"
              type="password"
              @keyup.enter.native="handleLogin"
            ></el-input>
          </el-form-item>
          <el-alert v-if="textError" :closable="false" :description="textError" duration="10" type="error"></el-alert>

          <el-form-item class="mt-10 text-center">
            <el-button :loading="loading" type="primary" @click="handleLogin">
              {{ $t('title.login') }}
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { LOGIN } from '@/constants/actions'
export default {
  name: 'Login',
  data () {
    const rules = {
      account: [
        {
          required: true,
          message: this.$t('message.required')
        },
        {
          max: 7,
          message: this.$t('message.length_user_id')
        },
        {
          min: 6,
          message: this.$t('message.length_user_id')
        }
      ],
      password: [
        {
          required: true,
          message: this.$t('message.required')
        }
      ]
    }
    return {
      loading: false,
      textError: '',
      userForm: {
        account: '',
        password: ''
      },
      rules
    }
  },
  methods: {
    handleLogin () {
      this.$refs.userForm.validate(valid => {
        if (!valid) return

        this.loading = true
        // console.log({ ...this.userForm })
        // this.login('111111', '111111')
        this.$store
          .dispatch(`auth/${LOGIN}`, {...this.userForm}).then(() => {
            console.log('aaaa')
          })
          // .then(() => {
          //   console.log('11222')
          //   // this.$refs.userForm.resetFields()
          //   // setTimeout(() => {
          //   //   this.$router.push('/')
          //   // })
          // })
          // .catch((error) => {
          //   // this.textError = error?.response?.data?.message || '失敗した'
          //   console.log(error)
          // })
          // .finally(() => {
          //   this.loading = false
          // })
      })
    }
  }
}
</script>
