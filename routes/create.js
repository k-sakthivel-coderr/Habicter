// Requiring express
const express = require('express');
// Calling router function
const router = express.Router();
// Requiring controllers index
const Controller = require('../conrollers/index');
// router for post the input received from user
router.post('/input', Controller.input);
// router for edit the completion days initializes the modal
router.get('/edit/:id', Controller.edit);
// router for update the completion days 
router.post('/edit/:id', Controller.edit);
// router for delete any particular habit
router.get("/destroy/:id", Controller.destroy);
// router to increase completion day``
router.get("/daysCount/:id", Controller.daysCount);
// exporting rounter, make available
module.exports = router;
