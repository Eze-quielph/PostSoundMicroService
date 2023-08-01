const axios = require('axios');
const {cloudinary, CLOUDINARY_URL} = require('../configure/cloudinary');

class Track {
    constructor(){
        this.track = axios.create({
            baseURL: CLOUDINARY_URL,
            withCredentials: true
        })
    }
    getUrl(file){
        return this.track
        .post("/upload/url", file, { "Content-Type": "multipart/form-data" })
        .then((data)=> data)
        .catch((error)=> console.log(error))
    }
}

const trackService = new Track();

module.exports = trackService;