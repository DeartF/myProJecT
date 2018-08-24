const mongoose = require('mongoose')

const FootwearSchema = mongoose.Schema({
	gender: String,
	model: String,
})

module.exports = mongoose.model('Footwear' , FootwearSchema)