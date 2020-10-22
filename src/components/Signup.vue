<template>
  <div>
    <form>
      <h2>Signup</h2>
      <div class="input-container">
        <input
          type="text"
          id="username"
          placeholder="Username"
          autocomplete="off"
        />
        <label for="username">Username</label>
      </div>
      <div class="input-container">
        <input
          type="email"
          id="new-email"
          placeholder="Email"
          autocomplete="off"
        />
        <label for="new-email">Email</label>
      </div>
      <div class="input-container">
        <input
          type="password"
          id="new-password"
          placeholder="Password"
          autocomplete="off"
        />
        <label for="new-password">Password</label>
      </div>
      <button @click="$router.push({ name: 'Home' })">Signup</button>
      <div class="change-component">
        Already have an account? <u @click="$emit('login')">Login</u>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Signup extends Vue {}
</script>
