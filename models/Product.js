const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please enter the name']
    },

    description: {
        type: String,
        required: [true, 'please enter the description']
    },

    price: {
        type: Number,
        required: [true, 'please enter the price'],
        maxLength: [8, "Price cannnot exceed 8 characters"]
    },

    rating: {
        type: Number,
        default: 0
    },

    image: {
        public_id: {
            type: String,
            required: true
        },

        url: {
            type: String,
            required: true
        }
    },

    category: [{
            type: mongoose.Schema.Types.Array,
            enum: ["indoor", "flowering", "xl", "pots", "fertilizers"],
            ref: 'category',
            required: true
        }]
    ,
    
    bestSeller: {
        type: Boolean
    },

    newArrival: {
        type: Boolean
    },

    stock: {
        type: Number,
        required: [true, 'please enter the product stock'],
        maxLength: [4, "Stock cannot exceed 4 character"],
        default: 1
    },

    numOfReviews: {
        type: Number,
        default: 5
    },

    reviews: [
        {
            name: {
                type: String,
                required: true
            },

            rating: {
                type: Number,
                required: true
            },

            comment: {
                type: String,
                required: true
            }
        }
    ],

    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("product", productSchema);