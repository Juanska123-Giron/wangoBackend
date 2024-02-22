const express = require('express');
const router = express.Router();
const { 
    registrar,
    autenticar,
    confirmar,
    olvidePassword,
    comprobarToken,
} = require("../controllers/usuarioController");
//import checkAuth
router.post("/", registrar);
router.post("/login", autenticar);
router.get("/confirmar/:token", confirmar);
router.post('/olvide-password', olvidePassword);
router.get('/olvide-password/:token', comprobarToken);
module.exports = router;
