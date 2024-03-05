const cultivoWango = require("../models/cultivoModel.js");

const registrar = async (req, res) => {
    try {
        const { nombreCultivo, areaCultivo, latitudCultivo, longitudCultivo, estadoRecoleccionDatos, idLote } = req.body;
        if (!nombreCultivo || !areaCultivo || !latitudCultivo || !longitudCultivo || !estadoRecoleccionDatos || !idLote) {
            return res.status(400).json({ error: "Todos los campos son requeridos" });
        }

        const existeCultivo = await cultivoWango.findOne({ nombreCultivo });
        if (existeCultivo) {
            const error = new Error("Cultivo ya registrado");
            return res.status(400).json({ error: error.message });
        }

        const cultivo = new cultivoWango({
            nombreCultivo,
            areaCultivo,
            latitudCultivo,
            longitudCultivo,
            estadoRecoleccionDatos,
            lote: idLote
        });

        const cultivoAlmacenado = await cultivo.save();
        res.json(cultivoAlmacenado);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Hubo un problema al intentar registrar el cultivo" });
    }
};


module.exports = {
    registrar,
};