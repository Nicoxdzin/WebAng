const mongoose = require('mongoose')

const veiculoSchema = new mongoose.Schema({

    marca: {
        type: String,
        required: true
    },
    nomeVeiculo: {
        type: String,
        required: true
    },
    ano: {
        type: Number,
        required: true
    },
    categoria: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Veiculo', veiculoSchema);