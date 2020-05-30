const router = require('express').Router();

const randomUserController = require('./../../controllers/directoryController');

router.route('/')
    .get(randomUserController.getUsers);