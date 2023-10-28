const cloudinary = require('cloudinary').v2
require('dotenv').config();

const { CLOUD_NAME, API_KEY, API_SECRET  } = process.env

//configure cloudnary || Agregar a un env los datos       
cloudinary.config({ 
  cloud_name: CLOUD_NAME, 
  api_key: API_KEY, 
  api_secret: API_SECRET 
});

const CLOUDINARY_URL=`cloudinary://${API_KEY}:${API_SECRET }@${CLOUD_NAME}`


module.exports = {
    cloudinary,
    CLOUDINARY_URL
}
