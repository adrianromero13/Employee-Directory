const router = require('express').Router();

const randomUserController = require('../../controllers/randomUserController');

router.route('/')
    .get(randomUserController.getUsers);

module.exports = router;
