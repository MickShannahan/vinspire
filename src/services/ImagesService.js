import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { unApi } from "./AxiosService.js"



class ImagesService{

  async getImage(){

    const res = await unApi.get('api/images/random')
    logger.log('🖼️', res.data)
    AppState.image = new Image(res.data)
  }


}

export const imagesService = new ImagesService()
