<template>
  <div>
    <h2 class="title">編輯個人資料</h2>
    <div class="changeAvatar">
      <the-avatar  src="/src/assets/portfolio/88178.jpg" :width="48" :height="48" ></the-avatar>
      <the-button>修改頭像</the-button>
      <!-- <input type="file" class="inputFile" /> -->
    </div>
    <form class="profileForm" @submit.prevent="handleSubmit">

      <label for="username">使用者名稱：</label>
      <input type="text" v-model="userNameInput"/>

      <label for="name">暱稱：</label>
      <input type="text"  v-model="nickNameInput"/>

      <label for="intro">簡介：</label>
      <textarea rows="12"  v-model="introduceInput"></textarea>
      <!-- <input type="text"  v-model="introduceInput"> -->

      <label for="mobilePhone" >手機號碼：</label>
      <input type="text"  v-model="phoneInput"/>

      <label>性别：</label>
      <div class="genderRadios">
        <input type="radio" name="gender" id="M" value="M" />
        男
        <input type="radio" name="gender" id="F" value="F" />
        女
      </div>

      <label for="email" >個人網頁：</label>
      <input type="text"  v-model="emailInput"/>

      <label for="website" >個人標籤：</label>
      <input type="text"  v-model="websiteInput"/>

      <div class="actions">
        <the-button type="reset" reverse @click="cancelButton">取消</the-button>
        <the-button type="submit">確認</the-button>
      </div>
    </form>
  </div>
</template>

<script setup>
// import TheIcon from "../components/TheIcon.vue";
import TheButton from "../components/TheButton.vue";
import TheAvatar from "../components/TheAvatar.vue";
import { useRouter } from 'vue-router';
import { computed, ref } from "vue";
import { useStore } from "vuex";
const store = useStore();
const router = useRouter();

//將input都先設定成空字串
const userNameInput = ref("");
const nickNameInput = ref("");
const emailInput = ref("");
const introduceInput = ref("");
const websiteInput = ref("");
const phoneInput = ref("");

//取得已經存在vuex的user資料
const userName = computed(() => store.state.user[0].userName);
const nickName = computed(() => store.state.user[0].nickName);
const email = computed(() => store.state.user[0].email);
const introduce = computed(() => store.state.user[0].introduce);
const website = computed(() => store.state.user[0].website);
const phone = computed(() => store.state.user[0].phone);

// 提交按鈕所執行的，if判斷當前輸入框如果為空，那就保持原本預設值，有新資料就更新
const handleSubmit = () => {
 if (userNameInput.value !== "") {
    store.commit("updateUserName", userNameInput.value);
  }
  userNameInput.value = ""; // 清空輸入值

 if (nickNameInput.value !== "") {
    store.commit("updateNickName", nickNameInput.value);
  }
  nickNameInput.value = ""; // 清空輸入值

 if (emailInput.value !== "") {
    store.commit("updateEmail", emailInput.value);
  }
  emailInput.value = ""; // 清空輸入值

 if (introduceInput.value !== "") {
    store.commit("updateIntroduce", introduceInput.value);
  }
  introduceInput.value = ""; // 清空輸入值

 if (websiteInput.value !== "") {
    store.commit("updateWebsite", websiteInput.value);
  }
  websiteInput.value = ""; // 清空輸入值

 if (phoneInput.value !== "") {
    store.commit("updatePhone", phoneInput.value);
  }
  phoneInput.value = ""; // 清空輸入值

 alert("修改成功");
 //顯示成功並跳轉回去
 router.push('/profile');
};

//取消鈕，甚麼都不做，直接跳回個人頁
const cancelButton=()=>{
   router.push('/profile');
}

</script>

<style scoped>
.title {
  margin-bottom: 42px;
  font-size: 24px;
  font-weight: 600;
}

.changeAvatar {
  display: flex;
  align-items: center;
  position: relative;
}

.changeAvatar .button {
  margin-left: 26px;
}

.inputFile {
  opacity: 0;
  position: absolute;
  cursor: pointer;
  top: 0;
  bottom: 0;
}

.profileForm {
  display: grid;
  grid-template-columns: max-content 1fr;
  row-gap: 32px;
  column-gap: 10px;
  margin-top: 38px;
}

.profileForm > label {
  grid-column: 1 / 2;
  justify-self: end;
  position: relative;
  top: 6px;
}

.profileForm .actions {
  grid-column: 1 / 3;
  justify-self: end;
  display: flex;
  gap: 16px;
}
</style>