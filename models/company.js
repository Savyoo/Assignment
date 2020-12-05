const mongoose = require('mongoose');
const companySchema = mongoose.Schema({
name: {
    type:String
},
city: {
    type:String
}
});

module.exports = mongoose.model("companies",companySchema);