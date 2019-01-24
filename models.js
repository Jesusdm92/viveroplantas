const mongoose = require('mongoose');

const Direccion = mongoose.model('Planta',{
    nombre: String,
    color: String,
    precio: Number,
});

const Paquete = mongoose.model('Tienda',{
    nombre_tienda: String,
    direccion: String,
    ciudad: String
});

module.exports = {
    Planta,
    Tienda
};