<template>
  <div class="page">
    <div class="page-component" :class="{ 'flip-component': signup }">
      <Login class="component front" @signup="signup = true" />
      <Signup class="component back" @login="signup = false" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Login from "@/components/Login.vue";
import Signup from "@/components/Signup.vue";

@Options({
  components: {
    Login,
    Signup
  }
})
export default class LoginSignup extends Vue {
  signup = false;
}
</script>

<style>
.page {
  width: inherit;
  height: inherit;
  display: grid;
  place-items: center;
  perspective: 1000px;
}
.page-component {
  width: 600px;
  height: 300px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.3s;
}
.flip-component {
  transform: rotateX(-180deg);
}
.component {
  width: inherit;
  height: inherit;
  border-radius: 8px;
  position: absolute;
  background-image: url("../assets/login_background_image.jpg");
  background-size: cover;
  background-position: center;
  box-shadow: 0 0 24px 2px #ffffff70;
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  color: whitesmoke;
}
.front {
  pointer-events: all;
}
.back {
  transform: rotateX(180deg);
  pointer-events: none;
}
.flip-component > .front {
  pointer-events: none;
}
.flip-component > .back {
  pointer-events: all;
}
.change-component {
  color: #ffffff;
  padding: 0 10px;
}
.change-component > u {
  color: #2c3e50;
  cursor: pointer;
}
.input-container {
  color: #ffffffc0;
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 20px 0;
  height: 40px;
  justify-content: flex-end;
  font-size: 20px;
}
label {
  position: absolute;
  transition: all 0.4s ease-in-out;
  color: #ffffff80;
  padding: 3px 5px;
}
input {
  color: #ffffff;
  outline: none;
  border: none;
  background: none;
  border-bottom: 2px solid #fff;
  height: 24px;
  font-size: 18px;
}
input:not(:placeholder-shown) ~ label,
input:focus ~ label {
  transform: translateY(-24px);
  padding: 0;
  color: #ffffff;
}
input::placeholder {
  color: transparent;
}
button {
  float: right;
  border: none;
  outline: none;
  padding: 5px 15px;
  border-radius: 4px;
  background-color: #ffffffc0;
  font-size: 20px;
}
</style>
