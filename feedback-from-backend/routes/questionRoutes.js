const { saveQuestion, list } = require('../controller/questionController');
const { uploadFiles } = require('../helper/multipart');

const router = require('express').Router();


router.post('/save', uploadFiles('public/uploads').single('file') ,saveQuestion);
router.get('/list', list)

module.exports = router
