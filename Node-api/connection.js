const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://nimarques1207:niconico15@nosqldb.mtmnt4e.mongodb.net";

const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();
    
    
    const db = client.db("dbVeiculos");
    const coll = db.collection("veiculos");

    arrayVeiculos = [
        {marca : 'Ford', nomeVeiculo: 'New Fiesta', ano: 2012, categoria: 'Sedan' },
        {marca : 'Ferrari', nomeVeiculo: 'SF90', ano: 2023, categoria: 'Coupe' },
        {marca : 'Nissan', nomeVeiculo: '350z', ano: 2006, categoria: 'Coupe' },
        {marca : 'Honda', nomeVeiculo: 'Civic', ano: 2019, categoria: 'Sedan' },
        {marca : 'Hyundai', nomeVeiculo: 'HB20', ano: 2012, categoria: 'Hatch' },
        {marca : 'Ford', nomeVeiculo: 'Ranger V6', ano: 2023, categoria: 'caminhonete'},
        {marca : 'Chevrolet', nomeVeiculo: 'Camaro', ano: 2013, categoria: 'Coupe' },
        {marca : 'Lamborghini', nomeVeiculo: 'Huracan', ano: 2020, categoria: 'Coupe' },
        {marca : 'Fiat', nomeVeiculo: 'Cronos', ano: 2020, categoria: 'sedan' },
        {marca : 'Fiat', nomeVeiculo: 'Punto', ano: 2012, categoria: 'Hatch' },
        {marca : 'Renault', nomeVeiculo: 'Clio V6', ano: 2012, categoria: 'Hatch' },
        {marca : 'Hyundai', nomeVeiculo: 'Azera', ano: 2021, categoria: 'Sedan' },
        {marca : 'Lamborghini', nomeVeiculo: 'Gallardo Superleggera', ano: 2011, categoria: 'Coupe' },
        {marca : 'Honda', nomeVeiculo: 'New City', ano: 2020, categoria: 'Hatch' },
        {marca : 'Ford', nomeVeiculo: 'Fiesta', ano: 2004, categoria: 'Hatch' },
        {marca : 'BMW', nomeVeiculo: 'M3 G80', ano: 2023, categoria: 'Sedan' },
    ]

    const result = await coll.insertMany(arrayVeiculos);
    // display the results of your operation
    console.log(result.insertedIds);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);