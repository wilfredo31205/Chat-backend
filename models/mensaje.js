


const { Schema , model } = require('mongoose')   



const MensajeSchema = Schema({




    de: {


        type: Schema.Types.ObjectId, // esto signigica que va a hacer una referencia  a la coleccion  de : Usuario 
       
        ref: 'Usuario',

        required : true

    },


    para : { // para quien va este mensaje 

        type: Schema.Types.ObjectId, // esto signigica que va a hacer una referencia  a la coleccion  de : Usuario 
       
        ref: 'Usuario',
        required : true
    },


    mensaje : { // para quien va este mensaje 
    
        type: String,
        required: true
       
       
       
    },

   

   

},{


    timestamps: true // esto va a adicionar la fecha de creacion y la fecha de  ultima actualizacion 


});

MensajeSchema.method('toJSON', function(){


    const { __v ,  ...object } = this.object();



    return object;


});



module.exports = model('Mensajes', MensajeSchema);