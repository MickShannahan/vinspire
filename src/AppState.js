import { reactive } from 'vue'
import {Image} from './models/Image.js'
import {Quote} from './models/Quote.js'
import {Weather} from './models/Weather.js'
import {ToDo} from './models/Todo.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},
  /**@type {Image} */
  image: null,
  /**@type {Quote} */
  quote: null,
  /**@type {Weather} */
  weather: null,
  /** @type {ToDo[]} */
  toDos: [],

  settings: {
    imageQuery: 'nature'
  }
})
