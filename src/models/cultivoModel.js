const mongoose = require('mongoose');
const cultivoWangoSchema = mongoose.Schema({
    nombreCultivo:{
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    areaCultivo: {
        type: String,
        required: true,
        trim: true,
    },
    latitudCultivo: {
        type: String,
        required: true,
        trim: true
    },
    longitudCultivo: {
        type: String,
        required: true,
        trim: true
    },
    estadoRecoleccionDatos: {
        type: String,
        required: true,
        trim: true,
    },
},{
    timestamps: true
});

const cultivoWango = mongoose.model("Cultivo", cultivoWangoSchema);
module.exports = cultivoWango;