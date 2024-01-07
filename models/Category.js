const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
    title: {
            type: String,
            required: true
        }
    ,

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

    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'product', 
            required: true
        }
    ]
})

module.exports = mongoose.model("category", categorySchema)