



export class Weather{
  constructor(data){
    this.kelvin = data.main.temp
    this.fahrenheit = (this.kelvin - 273.15) * (9/5) +32
    this.celsius = (this.kelvin - 273.15)
    this.humidity = data.main.humidity
    this.weather = data.weather[0].description
    this.icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
  }
}
