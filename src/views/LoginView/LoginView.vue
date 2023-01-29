<template>
  <div>
    <form @submit.prevent="handleLogin">
      <input type="text" v-model="email" placeholder="Email">
      <div v-if="!validateEmail(email)">Please enter a valid email</div>
      <input type="password" v-model="password" placeholder="Password">
      <div v-if="!validatePassword(password)">Password cannot be blank</div>
      <button type="submit" :disabled="!validateEmail(email) || !validatePassword(password)">Login</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    handleLogin() {
      axios.post('https://api.escuelajs.co/api/v1/auth/login', {
        email: this.email,
        password: this.password
      })
        .then(response => {
      localStorage.setItem('access_token', response.data.access_token)
      localStorage.setItem('refresh_token', response.data.refresh_token)
      this.$router.push({name: 'Product'})
        })
        .catch(error => {
          alert(error);
        });
    },
    validateEmail(email) {
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    },
    validatePassword(password) {
      return password !== '';
    }
  }
}
</script>
