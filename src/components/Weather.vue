<template>
  <!-- NOTE the v-if keeps the component from erroring on load, since the AppState starts 'null' -->
  <div v-if="weatherData" class="d-flex align-items-center px-3 selectable rounded-pill no-select display-6" rol="button" @click="showF = !showF">
    <img :src="weatherData.icon" :alt="`icon of ${weatherData.weather}`">
    <div v-if="showF">
      {{ weatherData.fahrenheit.toFixed(1) }} f
    </div>
    <div v-else>
      {{ weatherData.celsius.toFixed(1) }} c
    </div>
    <div class="ms-3">
      {{ weatherData.weather }}
    </div>
  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';
import {Weather} from '../models/Weather.js'
export default {
  setup(){
    const showF = ref(true)
  return {
    showF,
    weatherData : computed(()=> AppState.weather)
   }
  }
};
</script>


<style lang="scss" scoped>
.display-6{
  font-size: 18px;
}
</style>
