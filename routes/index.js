const express = require('express');
const router = express.Router();
const homeController = require ('../controller/home_controller');


console.log("Router is loaded");

router.get('/',homeController.home);
// router.get('/delete-task',homeController.home);

module.exports = router;