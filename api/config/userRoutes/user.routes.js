const usersController = require('../../controllers/user.controller');
const router = require('express').Router();

router.get('/users', usersController.list);
router.post('/users', usersController.create);

module.export = router;