<template>
  <div>
    <form @submit="$router.push({ name: 'Home' })">
      <h2>Login</h2>
      <div class="input-container">
        <input
          type="email"
          id="useremail"
          placeholder="Email"
          autocomplete="off"
        />
        <label for="useremail">Email</label>
      </div>
      <div class="input-container">
        <input
          type="password"
          id="password"
          placeholder="Password"
          autocomplete="off"
        />
        <label for="password">Password</label>
      </div>
      <button>Login</button>
      <div class="change-component">
        Don't have an account? <u @click="$emit('signup')">Signup</u>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Login extends Vue {}
</script>
