<template>
  <div class="loginPage">
    <img src="../assets/phone.png" alt="" class="phoneImage" />
    <div class="loginForm">
      <img src="../assets/logo.svg" alt="" />
      <form action="">
        <input type="email" placeholder="信箱" />
        <input v-if="!isLogin" type="text" placeholder="帳號" />
        <input type="password" placeholder="密碼" />
        <!-- <button type="submit" class="loginButton">
          {{ isLogin ? "登入" : "註冊" }}
        </button> -->
        <router-link to="/">
          <p class="loginButton">
            {{ isLogin ? "登入" : "註冊" }}
          </p></router-link
        >
        <p class="info" @click="isLogin = !isLogin">
          {{ isLogin ? "還沒有帳號? 點擊註冊" : "已有帳號? 點擊登入吧" }}
        </p>
        <div v-if="isLogin" class="agreement">
          <input type="checkbox" />
          <p>勾選表示同意隱私協議</p>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const isLogin = ref(true);
</script>

<style scoped>
.loginPage {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 5vw;
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  background: #f8f9fb;

  padding: 0 10vw;
}

.phoneImage {
  max-width: 400px;
  position: relative;
  top: 36px;
  justify-self: end;
}

.loginForm {
  justify-self: start;
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.06);
  border-radius: 32px;
  background: white;
  padding: 74px 60px;

  display: grid;
  place-items: center;
  row-gap: 52px;
  width: 380px;
}
.loginForm > form {
  display: grid;
  row-gap: 24px;
  width: 100%;
  height: 100%;
}

input {
  background: #fafafa;
  border-radius: 4px;
  border: none;
}

input::placeholder {
  color: #9e9e9e;
}

.loginButton {
  background: linear-gradient(89.93deg, #00c2ff 0.06%, #0047ff 105.68%);
  padding: 12px 0;
  color: white;
  border: none;
  text-align: center;
}
a {
  text-decoration: none;
  color: white;
}

.info {
  color: #1da0ff;
  text-align: center;
  cursor: pointer;
}

.agreement {
  color: #a1a1a1;
  display: flex;
  gap: 6px;
  position: relative;
  left: 22px;
}
</style>
<style scoped>
@media (max-width: 1024px) {
  .phoneImage {
    max-width: 320px;
    position: relative;
    justify-self: center;
  }
}
@media (max-width: 768px) {
  .phoneImage {
    max-width: 250px;
    position: relative;
    justify-self: center;
  }
  .loginForm {
    transform: scale(.8);
    position: relative;
    right: 20px;
  }
}
@media (max-width: 390px) {
  .phoneImage {
display: none;
  }
  .loginForm {
    transform: scale(.8);
    position: relative;
    right: 30px;
  }
}
</style>