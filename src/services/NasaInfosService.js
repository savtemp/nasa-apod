import { AppState } from "../AppState.js";
import { nasaInfo } from "../models/nasaInfo.js";
import { logger } from "../utils/Logger.js";
import { nasaApi } from "./AxiosService.js";


class NasaInfosService {
    async getNasaInfos(){
        const res = await nasaApi.get(`/planetary/apod`)
        logger.log(res.data)
        AppState.nasaInfo = res.data
        AppState.page = res.data.page
    }
}




export const nasaInfosService = new NasaInfosService()