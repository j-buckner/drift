var mongoose = require("mongoose");

var ContinentSchema = new mongoose.Schema({
  name: {
    type: String,
    index: true
  },
  countries:[
    {
      code: {
        type: String
      }
    }
  ]
});

var Continent = mongoose.model('Continent', ContinentSchema);

module.exports = {
  Continent: Continent
}