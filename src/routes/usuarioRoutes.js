const express = require('express');
const router = express.Router();
const { 
    registrar
} = require("../controllers/usuarioController");
//import checkAuth
router.post("/", registrar);
module.exports = router;
