const express = require('express');
const {Planta, Tienda}= require('./models');

const router = express.Router();
 
// ver todos las plantas
router.get('/Planta',(req,res) => {
    Planta.find({},(err,data)=>{
        if(err) res.json({error:err});
        else res.json(data);
    });
});

router.get('/Tienda',(req,res) => {
    Tienda.find({},(err,data)=>{
        if(err) res.json({error:err});
        else res.json(data);
    });
});

//BUSCAR UNO
router.get('/Planta/:id', (req,res)=>{
     Planta.findOne({_id: req.params.id},(err,data)=>{
        if(err) res.json({error:err});
        else res.json(data);
    });
});

router.get('/Planta/:id', (req,res)=>{
    Tienda.findOne({_id: req.params.id},(err,data)=>{
        if(err) res.json({error:err});
        else res.json(data);
    });
});

//BORRAR
router.delete('/Planta/:id', (req,res)=>{
    Planta.findOneAndRemove({_id: req.params.id},(err,data)=>{
        if(err) res.json({error:err});
        else res.json(data);
    });
});

router.delete('/Tienda/:id', (req,res)=>{
    Tienda.findOneAndRemove({_id: req.params.id},(err,data)=>{
        if(err) res.json({error:err});
        else res.json(data);
    });
});

//ACTUALIZAR
router.put('/Planta/:id', (req,res)=>{
    Planta.findOneAndUpdate(
        {_id: req.params.id},
        {$set: {nombre: req.body.nombre,
                color: req.body.color, 
                precio: req.body.precio}},
        (err,data)=>{
        if(err) res.json({error:err});
        else res.json(data);
    });
});

router.put('/Tienda/:id', (req,res)=>{
    Tienda.findOneAndUpdate(
        {_id: req.params.id},
        {$set: {nombre_tienda: req.body.nombre_tienda,
                direccion: req.body.direccion,
                ciudad: req.body.ciudad}},
        (err,data)=>{
        if(err) res.json({error:err});
        else res.json(data);
    });
});

//INSERTAR
router.post('/Planta', (req,res)=>{
    const planta = new Planta({
        nombre: req.body.nombre,
        color: req.body.color, 
        precio: req.body.precio});
        planta.save((err,data)=>{
            if(err) res.json({error:err});
            else res.json(data);
    });
});

router.post('/Tienda', (req,res)=>{
    const tienda = new Tienda({
        nombre_tienda: req.body.nombre_tienda,
        direccion: req.body.direccion,
        ciudad: req.body.ciudad});
        tienda.save((err,data)=>{
            if(err) res.json({error:err});
            else res.json(data);
    });
});

module.exports = router;