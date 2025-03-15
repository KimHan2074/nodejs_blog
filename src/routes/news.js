const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

// Nó đọc từ trên xuống
router.use('/:slug', newsController.show);
router.use('/', newsController.index);



module.exports = router;