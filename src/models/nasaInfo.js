export class nasaInfo {
    constructor(data){
        this.hdurl = data.hdurl || `https://apod.nasa.gov/apod/image/2208/MeteorWind_Larnaout_2048.jpg`
        this.title = data.title
        this.date = data.date
        this.explanation = data.explanation
        this.mediaType = data.mediaType || data.media_type
    }
}