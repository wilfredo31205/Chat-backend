const mongoose = require('mongoose');


const dbconnection =  async()=>{


    
        try {

          await   mongoose.connect(process.env.DB_CNN_STRING, {


                useNewUrlParser: true, // requerido para evitar varios warning

                useUnifiedTopology: true,

                useCreateIndex: true





            })

            console.log('Conectado a la base de datos correctamente');

            
        } catch (error) {

            console.log(error);

            throw new  Error('Error en la base de datos');



            
        }


}


module.exports = dbconnection