import { reactive } from 'vue'
import { nasaInfo } from './models/nasaInfo.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},


  /**@type {import('./models/nasaInfo.js').nasaInfo} */
  nasaInfo: null,

})
