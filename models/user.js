var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//SchemaType
//1. String 2. Number 3. Date 4. Buffer 5. Boolean 6. Mixed 7. Objected 8. Array



var userSchema = new Schema({
    name: String,
    age: Number,
    sex: String,
    car: String,
    published_date: {type: Date, default: Date.now}
});


module.exports = mongoose.model('user', userSchema);