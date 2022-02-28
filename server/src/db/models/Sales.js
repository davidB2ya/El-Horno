const { Schema, model } = require('mongoose');

// schema creation for sales
const saleSchema = new Schema(
    {
        client: {
            type: String,
            trim: true
        },
        phone: {
            type: Number,
            unique: true
        },
        namePizza: {
            type: String
        },
        price: {
            type: Number
        },
        ingredents: {
            types: [String]
        },
        address: {
            type: String
        },
        saleDateIso: Date
    },
    {
        timestamps: true
    }
)
// fixes in saleSchema
saleSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})

// Establecemos un campo virtual
saleSchema.virtual('saleDate')
  .set(function(fecha) {
    // El formato esperado es 'yyyy-mm-dd' que es el devuelto por el campo input
    // el valor recibido se almacenará en el campo fecha_nacimiento_iso de nuestro documento
    this.saleDateIso = new Date(fecha);
  })
  .get(function(){
    // el valor devuelto será un string en formato 'yyyy-mm-dd'
    return this.saleDateIso.toISOString().substring(0,10);
  });

// compilation of sales model
const Sales = model('Sales', saleSchema)

module.exports = Sales