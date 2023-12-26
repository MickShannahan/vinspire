import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { unApi } from "./AxiosService.js"
import { Image} from "../models/Image.js"



class ImagesService{

  async getImage(){
    const query = AppState.settings.imageQuery ? `?query=${AppState.settings.imageQuery}` : ''
    const res = await unApi.get('api/images/random' + query)
    logger.log('🖼️', res.data)
    AppState.image = new Image(res.data)
  }


}

export const imagesService = new ImagesService()
