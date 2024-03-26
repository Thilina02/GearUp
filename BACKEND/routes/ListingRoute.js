const express = require('express');
const router = express.Router();
const { SubmitRenting, getRent, fetchById, deleteById } = require('../controller/ListingController');


router.post('/submit-renting', SubmitRenting)
router.get('/fetch-renting',getRent)
router.get('/fetchbyid/:id',fetchById)
router.delete('/deletebyid/:id',deleteById)
module.exports = router