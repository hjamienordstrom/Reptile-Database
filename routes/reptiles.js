var express = require('express');
var router = express.Router();
const reptilesCtrl = require('../controllers/reptiles');

router.get('/new', reptilesCtrl.new)
router.post('/', reptilesCtrl.create);
router.get('/',reptilesCtrl.index);
module.exports = router;
