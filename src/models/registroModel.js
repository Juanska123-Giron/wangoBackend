const mongoose = require('mongoose');
const registroWangoSchema = mongoose.Schema({
    fechaRegistro: {
        type: String,
        required: true,
        trim: true,
    },
    eto_mm_dia: {
        type: String,
        required: true,
        trim: true
    },
    kc: {
        type: String,
        required: true,
        trim: true
    },
    etc_mm_dia: {
        type: String,
        required: true,
        trim: true,
    },
    rendimientoKgDia: {
        type: String,
        required: true,
        trim: true
    },
    CantAR_QuimicosKgDia: {
        type: String,
        required: true,
        trim: true,
    },
    lote: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lote'
    },
    cultivo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cultivo'
    }
},{
    timestamps: true
});

const registroWango = mongoose.model("Registro", registroWangoSchema);
module.exports = registroWango;