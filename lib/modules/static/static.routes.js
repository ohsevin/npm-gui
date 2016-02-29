var express = require('express');
var router = express.Router();

router.use(express.static('./lib/public', {'index': ['index.html', 'index.htm']}));
router.use('/node_modules', express.static('node_modules'));
module.exports = router;