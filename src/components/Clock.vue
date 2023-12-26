<template>
  <div class="text-center">
    <div class="display-5 text-lowercase time-glow">{{ clockTime }}</div>
  </div>
</template>


<script>
import { computed, ref, onMounted } from 'vue';
export default {
  setup(){
    let timerInt = null
    const time = ref(new Date)
    // NOTE onMouted can be used to run functions when this component loads
    onMounted(()=>{
      timerInt = setInterval(clockTick, 1000)
    })
    function clockTick(){
      time.value = new Date()
    }
    return {
       clockTime : computed(()=> time.value.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}))
   }
  }
};
</script>


<style lang="scss" scoped>
.time-glow{
  text-shadow: 0px 0px 15px rgba(255, 255, 255, 0.2);
}
</style>
