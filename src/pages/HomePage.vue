<template>
  <div class="sticky-top container-fluid">
    <div class="row justify-content-between">
      <div class="col-3 text-light text-shadow" v-if="bgImage">
        {{ bgImage.author?.name }}
      </div>
      <div class="col-3" v-if="account.id">
        <ToDos/>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, watch } from 'vue';
import { imagesService } from '../services/ImagesService.js';
import {weatherService} from '../services/WeatherService.js'
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js';
import { logger } from '../utils/Logger.js';
import ToDos from '../components/ToDos.vue';

export default {
    setup() {
        onMounted(() => {
            getImage();
            getWeather();
        });
        const bgImage = computed(() => AppState.image);
        watch(bgImage, (bg) => {
            logger.log('bg', bg);
            document.body.style.backgroundImage = `url(${bg.fullUrl}), url(${bg.regularUrl}), url(${bg.smallUrl})`;
            let blocker = document.querySelector('.body-blocker');
            blocker.classList.add('fade-away');
        });
        async function getImage() {
            try {
                await imagesService.getImage();
            }
            catch (error) {
                Pop.error(error);
            }
        }
        async function getWeather() {
            try {
                await weatherService.getWeather();
            }
            catch (error) {
                Pop.error(error);
            }
        }
        return {
            bgImage,
            account: computed(() => AppState.account)
        };
    },
    components: { ToDos }
}
</script>

<style scoped lang="scss">

</style>
