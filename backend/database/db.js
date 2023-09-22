const mongoose = require ('mongoose');
mongoose.set('strictQuery', true);

conexion = async()=>{
    try {
        await mongoose.connect("mongodb+srv://njsilvapereira:a9ijRb4jrfhLpgTe@cluster0.bog7uid.mongodb.net/?retryWrites=true&w=majority")
        console.log("conectado correctamente a la base de datos de mongo atlas")
    } catch (error) {
        console.log(error)
        throw new Error('no se ha podido conectar a la base de datos😢')
    }
}
module.exports={
    conexion
}
