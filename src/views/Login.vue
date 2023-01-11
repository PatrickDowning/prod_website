<template>
  <div>
    <h1>Sign In</h1>
    <form>
      <label for="username">Username:</label>
      <input v-model="username" type="text" id="username" name="username"><br>
      <label for="password">Password:</label>
      <input v-model="password" type="password" id="password" name="password"><br>
      <input @click.prevent="signIn" type="submit" value="Sign In">
    </form>
  </div>
</template>

<script>
import { Auth } from 'aws-amplify'

export default {
  name: 'SignIn',
  data () {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    async signIn() {
      try {
        const user = await Auth.signIn(this.username, this.password)
        console.log(user)
        // Handle successful sign in
      } catch (error) {
        console.log(error)
        // Handle error
      }
    }
  }
}
</script>
