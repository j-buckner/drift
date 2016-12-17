var mongoose = require("mongoose");

var CountrySchema = new mongoose.Schema({
  name: {
    type: String,
    index: true
  },
  code: {
  	type: String,
  	index: true
  }
});

var Country = mongoose.model('Country', CountrySchema);

module.exports = {
  Country: Country
}