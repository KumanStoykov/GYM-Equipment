const mongoose = require('mongoose');


const bikeSchema = mongoose.Schema({

    brand: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    promoPrice: {
        type: Number,
        require: true
    },
    madeIn: {
        type: String,
        require: true
    },
    Length: {
        type: String,
        require: true
    },
    equipmentWeight: {
        type: Number,
        require: true
    },
    adjustableLevelingFeet: {
        type: Number,
        require: true
    },
    resistanceSystem: {
        type: String,
        require: true
    },
    transportWheels: {
        type: Number,
        require: true
    },
    connectivity: {
        type: Number,
        require: true
    },
    minUserLength: {
        type: Number,
        require: true
    },
    maxUserLength: {
        type: Number,
        require: true
    },
    maxUserWeight: {
        type: Number,
        require: true
    },
    display: {
        type: String,
        require: true
    },
    availableLanguages: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    }
});

bikeSchema.set('timestamps', true);

const Bike = mongoose.model('Bike', bikeSchema);

module.exports = Bike;