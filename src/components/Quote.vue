<template>
  <section class="mb-2 fw-medium text-center" v-if="quote">

    <i class="d-block">
      "{{ quote.content }}"
    </i>
    <div >
      -{{ quote.author }}
    </div>
  </section>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { quotesService } from '../services/QuotesService.js';
export default {
  setup(){
    onMounted(()=>{
      getQuote()
    })
    async function getQuote(){
      try {
        await quotesService.getQuote()
      } catch (error) {
        Pop.error(error)
      }
    }
  return {
    quote : computed(()=> AppState.quote)
   }
  }
};
</script>


<style lang="scss" scoped>
div, i{
  text-shadow: 0px 0px 3px black;
}
div{
  opacity: 0;
  transition: all .3s ease;
}
i{
  max-width: 80ch;
  margin-inline: auto;
  transform: translateY(20px);
  transition: all .3s ease;
}

section:hover div{
  opacity: 1;
}
section:hover i{
  transform: translateY(0px);
}

</style>
