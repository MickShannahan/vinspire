
import {api} from "./AxiosService.js"
import {Weather} from '../models/Weather.js'
import {logger} from '../utils/Logger.js'
import {AppState} from '../AppState.js'


class WeatherService{

  async getWeather(){
    const res = await api.get('api/weather')
    logger.log('🌬', res.data)
    AppState.weather = new Weather(res.data)
  }

}

export const weatherService = new WeatherService()
