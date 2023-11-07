const routes = require('express').Router();
const multer = require('multer')
const {postImage} = require('../controller/music.controller')

const upload = multer({ dest: 'uploads/' });

routes.get('/', (req, res) => {
    res.send('Hello World!')
})
console.info(upload)
routes.post('/image', upload.single('jpg'), postImage);

module.exports = routes