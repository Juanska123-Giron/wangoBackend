const generarId = require("../../helpers/generarId.js");
const loteWango = require("../models/loteModel.js");

const registrar = async (req, res) => {
    try {
        const { nombreLote, capacidadLote } = req.body;
        if (!nombreLote || !capacidadLote) {
            return res.status(400).json({ error: "Todos los campos son requeridos" });
        }

        const existeLote = await loteWango.findOne({ nombreLote });
        if (existeLote) {
            const error = new Error("Lote ya registrado");
            return res.status(400).json({ error: error.message });
        }

        const lote = new loteWango(req.body);
        lote.token = generarId();
        const loteAlmacenado = await lote.save();
        res.json(loteAlmacenado);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Hubo un problema al intentar registrar el lote" });
    }
};

module.exports = {
    registrar,
};