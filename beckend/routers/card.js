const Router = require('express');
const controller = require('../controllers/card');

const router = new Router()

router.post('/add', controller.add);

module.exports = router