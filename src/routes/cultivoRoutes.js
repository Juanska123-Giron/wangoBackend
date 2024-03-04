const express = require('express');
const router = express.Router();
const { 
    registrar,
} = require("../controllers/cultivoController");
router.post("/", registrar);
module.exports = router;
