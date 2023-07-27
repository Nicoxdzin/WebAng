const express = require('express');
const router = express.Router()
const Veiculo = require('../models/veiculosModel')


//Getting all
router.get('/', async (req,res) => {
    try{
        const veiculos = await Veiculo.find();
        res.json(veiculos)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

//Getting One
router.get('/:id', getVeiculos, (req,res) => {
    res.send(req.veiculo)
})

//Creating one
router.post('/', async (req,res) => {
    const veiculo  = new Veiculo({
        marca: req.body.marca,
        nomeVeiculo: req.body.nomeVeiculo,
        ano: req.body.ano,
        categoria: req.body.categoria
    })
    try{
        const novoVeiculo = await veiculo.save()
        res.status(201).json(novoVeiculo)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

//Updating one
router.patch('/:id', (req,res) => {

})

//Deleting One

router.delete('/:id', (req,res) => {

})

async function getVeiculos(req, res, next){
    try{
        veiculo = await Veiculo.findById(req.params.id)
        if(veiculo == null) {
            return res.status(404).json({message: 'id não encontrado'})
        }
    } catch (err) {
        return res.status(500).json({message: err.message})
    }

    res.veiculo = veiculo
    next()
}

module.exports = router