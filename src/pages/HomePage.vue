<template>
    <div class="row">
        <div class="hero-img" :style="`background-image: url(${nasaInfo?.hdurl})`">
      <div class="col-md-12 p-0 d-flex justify-content-center">
        
        <div class="text">
          <h4 class="text-end">{{nasaInfo?.title}}</h4>
          <p class="text-end">{{nasaInfo?.date}}</p>
          <p>{{nasaInfo?.explanation}}</p>
        </div>
        </div>
      </div>
    </div>
</template>



<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState.js'
import { nasaInfosService } from '../services/NasaInfosService.js'
export default {
  setup(){

    onMounted(async() =>(

      await nasaInfosService.getNasaInfos()
    ))

    return{
      nasaInfo: computed(() => AppState.nasaInfo)
    }
  }

}
</script>



<style scoped lang="scss">
.hero-img{
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  // width: 100vw;
 
}

.text{
    background: rgb(0 0 0 / 38%);
    backdrop-filter: blur(4px);
    border: solid #8d8b8b1f;
    // position: relative;
    // bottom: 50em;
    color: white;
    border-radius: 8px;
    padding: 2em;
    transform: translateY(15em);
    width: 50em;
}

</style>
