const registroWango = require("../models/registroModel.js");

const registrar = async (req, res) => {
    try {
        const { fechaRegistro, eto_mm_dia, kc, etc_mm_dia, rendimientoKgDia, CantAR_QuimicosKgDia, lote, cultivo } = req.body;
        if (!fechaRegistro || !eto_mm_dia || !kc || !etc_mm_dia || !rendimientoKgDia || !CantAR_QuimicosKgDia || !lote || !cultivo) {
            return res.status(400).json({ error: "Todos los campos son requeridos" });
        }

        const registro = new registroWango({
            fechaRegistro,
            eto_mm_dia,
            kc,
            etc_mm_dia,
            rendimientoKgDia,
            CantAR_QuimicosKgDia,
            lote,
            cultivo
        });

        const registroAlmacenado = await registro.save();
        res.json(registroAlmacenado);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Hubo un problema al intentar registrar el registro" });
    }
};


module.exports = {
    registrar,
};