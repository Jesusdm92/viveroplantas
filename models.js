const mongoose = require('mongoose');

const Planta = mongoose.model('Planta',{
    nombre: String,
    color: String,
    precio: Number,
});

const Tienda = mongoose.model('Tienda',{
    nombre_tienda: String,
    direccion: String,
    ciudad: String
});

module.exports = {
    Planta,
    Tienda
};