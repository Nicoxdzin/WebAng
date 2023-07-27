const mongoose = require('mongoose')

const servicoSchema = new mongoose.Schema({

    nomeProprietario: {
        type: String,
        required: true
    },
    sobrenomeProprietario: {
        type: String,
        required: true
    },
    nomeVeiculo : {
        type: String,
        required : true
    },
    ano: {
        type: Number,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    placa: {
        type: String,
        required: true
    },
    cor: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Servicos', servicoSchema);