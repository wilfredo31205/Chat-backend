


const { Schema , model } = require('mongoose')      



const UsuarioSchema = Schema({




    nombre: {


        type: String,
        required: true

    },


    email: {

        type: String,
        required: true,
        uniquie: true // que sea unico 



    },
    Password: {
        type: String,
        required: true

    },

    email: {
        type: String,
        required: true,
        uniquie: true // que
    },

    online: {
        type: Boolean,
        default: false
   
   
    }

});

UsuarioSchema.method('toJSON', function(){


    const { __v , _id, Password, ...object } = this.toObject();

    object.uid = _id;

    return object;


});



module.exports = model('Usuario', UsuarioSchema);