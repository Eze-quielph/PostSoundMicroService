const routes = require('express').Router();
const multer = require('multer')
const {postMusic} = require('../controller/music.controller')

const upload = multer({ dest: 'uploads/' });

routes.post('/postmusic', upload.single('file'), postMusic);

module.exports = routes