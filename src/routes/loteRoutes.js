const express = require('express');
const router = express.Router();
const { 
    registrar,
} = require("../controllers/loteController");
router.post("/", registrar);
module.exports = router;
