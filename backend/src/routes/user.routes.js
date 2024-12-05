const express = require('express');

const router = express.Router();


router.get("/create-user",upload.single('file'),CreateUSer);

module.exports = router;