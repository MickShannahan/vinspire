<template>
  <section class="account-card flex-grow-1 d-flex bg-acrylic rounded p-4 text-light">
    <div class="container">
      <router-link :to="{name: 'Home'}">go home<i class="mdi mdi-home"></i></router-link>
      <form @submit.prevent="editAccount" class="row justify-content-center">
        <div class="col-12 text-center">
          <div>
            <img :src="account.picture" class="rounded-circle" alt="">
          </div>
        </div>
        <div class="col-12 text-center fs-3 fw-medium">{{ account.name }}</div>
        <div class="col-6">
          <input type="text" class="form-control" v-model="editData.picture">
        </div>
        <div class="col-6">
          <input type="text" class="form-control" v-model="editData.name">
        </div>
        <div class="col-12 mt-2">
          <label >Image themes</label>
          <input type="text" class="form-control" v-model="settings.imageQuery">
        </div>
        <div class="col-12 mt-1">
          <button class="btn btn-success w-10">update account</button>
        </div>
      </form>
    </div>

  </section>
</template>

<script>
import { computed,ref, watchEffect } from 'vue';
import { AppState } from '../AppState';
import Pop from '../utils/Pop.js';
import { accountService } from '../services/AccountService.js';
export default {
  setup() {
    const editData = ref({})
    const settings = ref(AppState.settings)
    watchEffect(()=>{
      editData.value = {...AppState.account}
      settings.value = {...AppState.settings}
    })
    return {
      editData,
      settings,
      account: computed(() => AppState.account),
      async editAccount(){
        try {
          accountService.saveSettings(settings.value)
         await accountService.updateAccount(editData.value)
         Pop.toast('account updated', 'success')
        } catch (error) {
          Pop.error(error)
        }
      }
    }
  }
}
</script>

<style scoped>
.account-card{
 width: 70%;
 margin-inline: auto;
}
img {
  width: 200px;
  aspect-ratio: 1/1;
  object-fit: cover;
}

</style>
