const mongoose = require('mongoose');
const loteWangoSchema = mongoose.Schema({
    nombreLote:{
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    capacidadLote:{
        type: String,
        required: true,
        trim: true,
    },
},{
    timestamps: true
});

const loteWango = mongoose.model("Lote", loteWangoSchema);
module.exports = loteWango;