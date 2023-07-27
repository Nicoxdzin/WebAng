const express = require('express');
const router = express.Router()
const Servico = require('../models/servicosModel')

//Getting all
router.get('/', async (req,res) => {
    try{
        const servicos = await Servico.find();
        res.json(servicos)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

//Getting One
router.get('/:id', getServicos, (req,res) => {
    res.send(req.servico)
})

//Creating one
router.post('/', async (req,res) => {
    const servico  = new Servico({
        nomeProprietario: req.body.nomeProprietario,
        sobrenomeProprietario: req.body.sobrenomeProprietario,
        nomeVeiculo: req.body.nomeVeiculo,
        ano: req.body.ano,
        tipo: req.body.tipo,
        placa: req.body.placa,
        cor: req.body.cor,
        descricao: req.body.descricao
    })
    try{
        const novoServico = await servico.save()
        res.status(201).json(novoServico)
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

async function getServicos(req, res, next){
    try{
        servico = await Servico.findById(req.params.id)
        if(servico == null) {
            return res.status(404).json({message: 'id não encontrado'})
        }
    } catch (err) {
        return res.status(500).json({message: err.message})
    }

    res.servico = servico
    next()
}

module.exports = router