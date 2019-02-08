const express = require('express');
const {Direccion, Paquete}= require('./models');

const router = express.Router();
 
// ver todos las direcciones
router.get('/api/plantas',(req,res) => {
    Planta.find({},(err,data)=>{
        if(err) res.json({error:err});
        else res.json(data);
    });
});

router.get('/api/tiendas',(req,res) => {
    Tienda.find({},(err,data)=>{
        if(err) res.json({error:err});
        else res.json(data);
    });
});

//BUSCAR UNO
router.get('/api/plantas/:id', (req,res)=>{
     Planta.findOne({_id: req.params.id},(err,data)=>{
        if(err) res.json({error:err});
        else res.json(data);
    });
});

router.get('/api/tiendas/:id', (req,res)=>{
    Tienda.findOne({_id: req.params.id},(err,data)=>{
        if(err) res.json({error:err});
        else res.json(data);
    });
});

//BORRAR
router.delete('/api/plantas/:id', (req,res)=>{
    Planta.findOneAndRemove({_id: req.params.id},(err,data)=>{
        if(err) res.json({error:err});
        else res.json(data);
    });
});

router.delete('/api/Tiendas/:id', (req,res)=>{
    Tienda.findOneAndRemove({_id: req.params.id},(err,data)=>{
        if(err) res.json({error:err});
        else res.json(data);
    });
});

//ACTUALIZAR
router.put('/api/plantas/:id', (req,res)=>{
    Planta.findOneAndUpdate(
        {_id_planta: req.params.id},
        {$set: {nombre: req.body.nombre,
                color: req.body.color, 
                precio: req.body.precio}},
        (err,data)=>{
        if(err) res.json({error:err});
        else res.json(data);
    });
});

router.put('/api/tiendas/:id', (req,res)=>{
    Direccion.findOneAndUpdate(
        {_id_tienda: req.params.id},
        {$set: {nombre_tienda: req.body.nombreTienda,
                peso: req.body.peso,
                ciudad: req.body.ciudad}},
        (err,data)=>{
        if(err) res.json({error:err});
        else res.json(data);
    });
});

//INSERTAR
router.post('/api/plantas', (req,res)=>{
    const planta = new Planta({
        nombre: req.body.nombre,
        color: req.body.color, 
        precio: req.body.precio});
        direccion.save((err,data)=>{
            if(err) res.json({error:err});
            else res.json(data);
    });
});

router.post('/api/tiendas', (req,res)=>{
    const tienda = new Tienda({
        nombre_tienda: req.body.nombreTienda,
        peso: req.body.peso,
        ciudad: req.body.ciudad});
        paquete.save((err,data)=>{
            if(err) res.json({error:err});
            else res.json(data);
    });
});

module.exports = router;