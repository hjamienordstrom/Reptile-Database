var express = require('express');
var router = express.Router();
const reptilesCtrl = require('../controllers/reptiles');

router.get('/new', reptilesCtrl.new)
router.post('/', reptilesCtrl.create);
router.get('/',reptilesCtrl.index);
router.delete('/:id', reptilesCtrl.delete);
router.get('/:id/edit', reptilesCtrl.edit)
router.put('/:id', reptilesCtrl.update);


module.exports = router;
