var express = require('express');
var router = express.Router();
var ctrlmain = require('../controllers/main.js');
var ctrlupload = require('../controllers/upload.js');
var ctrlplaylist = require('../controllers/playlist.js');
var ctrlplay = require('../controllers/play.js');
var ctrluploadFile = require('../controllers/file.js');

/* Main page. */
router.get('/', ctrlmain.show);

/* Play page. */
router.post('/play/:objectid', ctrlplay.play);
router.get('/play/:objectid', ctrlplay.playgame);

/* PlayList page. */
router.get('/playlist', ctrlplaylist.playlist);

/* Upload page. */
router.get('/upload', ctrlupload.upload);
router.post('/upload', ctrlupload.addFile)

router.get('/file/:pw', ctrluploadFile.uploadpage)
router.post('/file/:pw', ctrluploadFile.uploadGame)
 
module.exports = router;
