<template>
  <header>
  </header>
  <main class="pt-3">
    <router-view />
  </main>
   <footer class=" text-light container pb-3">
    <div class="container"><Quote/></div>
    <div class="row bg-acrylic rounded-pill justify-content-between footer-bar align-items-center">
      <div class="col-4"><Weather/></div>
      <div class="col-4"><Clock/></div>
      <div class="col-4 text-end"><Login/></div>
    </div>
  </footer>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'
import Login from './components/Login.vue'
import Clock from './components/Clock.vue'
import Weather from './components/Weather.vue'
import Quote from './components/Quote.vue'
import { accountService } from './services/AccountService.js'

export default {
  setup() {
    onMounted(()=>{
      accountService.loadSettings()
    })
    return {
      appState: computed(() => AppState)
    }
  },
  components: { Navbar, Login, Clock, Weather, Quote }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root{
  --main-height: calc(100vh - 32px - 64px);
}
.footer-bar{
  height: 7vh;
}


</style>
