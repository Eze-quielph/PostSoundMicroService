const {cloudinary} = require('../configure/cloudinary')
const fs = require('fs')

const postImage = async (req, res)=>{
     // Obtenemos el path temporal del archivo en el servidor local
  const uploadLocation = req.file.path;
  console.log(uploadLocation)
  await cloudinary.uploader.upload(uploadLocation, { resource_type: 'image', folder: 'EventX/', overwrite: true }, (error, result) => {
    // Eliminamos el archivo temporal del servidor local después de cargarlo en Cloudinary
    fs.unlink(uploadLocation, (deleteErr) => {
      if (deleteErr) {
        console.error('Error al eliminar el archivo temporal:', deleteErr.message);
      }

      if (error) {
        console.error('Error al cargar el archivo en Cloudinary:', error.message);
        res.status(500).json(error);
      } else {
        console.log('Temp file was deleted');
        res.status(201).json({ fileUrl: result.secure_url });
      }
    });
  });
}


module.exports = {
  postImage
}
