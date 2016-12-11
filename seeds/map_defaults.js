var mongoose = require('mongoose');
var Continent = require("../app/models/continent").Continent;
var Country = require("../app/models/country").Country;

var url = 'mongodb://localhost:27017/drift';
mongoose.connect(url);
var db = mongoose.connection;
db.once('open', function() {

   mongoose.connection.db.dropCollection('countries');
   mongoose.connection.db.dropCollection('continents');

   new Country({
      code:"AE",
      name:"United Arab Emirates",
   }).save();
   new Country({
      code:"AF",
      name:"Afghanistan",
   }).save();
   new Country({
      code:"AL",
      name:"Albania",
   }).save();
   new Country({
      code:"AM",
      name:"Armenia",
   }).save();
   new Country({
      code:"AO",
      name:"Angola",
   }).save();
   new Country({
      code:"AR",
      name:"Argentina",
   }).save();
   new Country({
      code:"AT",
      name:"Austria",
   }).save();
   new Country({
      code:"AU",
      name:"Australia",
   }).save();
   new Country({
      code:"AZ",
      name:"Azerbaijan",
   }).save();
   new Country({
      code:"BA",
      name:"Bosnia and Herzegovina",
   }).save();
   new Country({
      code:"BD",
      name:"Bangladesh",
   }).save();
   new Country({
      code:"BE",
      name:"Belgium",
   }).save();
   new Country({
      code:"BF",
      name:"Burkina Faso",
   }).save();
   new Country({
      code:"BG",
      name:"Bulgaria",
   }).save();
   new Country({
      code:"BI",
      name:"Burundi",
   }).save();
   new Country({
      code:"BJ",
      name:"Benin",
   }).save();
   new Country({
      code:"BN",
      name:"Brunei Darussalam",
   }).save();
   new Country({
      code:"BO",
      name:"Bolivia",
   }).save();
   new Country({
      code:"BR",
      name:"Brazil",
   }).save();
   new Country({
      code:"BS",
      name:"Bahamas",
   }).save();
   new Country({
      code:"BT",
      name:"Bhutan",
   }).save();
   new Country({
      code:"BW",
      name:"Botswana",
   }).save();
   new Country({
      code:"BY",
      name:"Belarus",
   }).save();
   new Country({
      code:"BZ",
      name:"Belize",
   }).save();
   new Country({
      code:"CA",
      name:"Canada",
   }).save();
   new Country({
      code:"CD",
      name:"Democratic Republic of Congo",
   }).save();
   new Country({
      code:"CF",
      name:"Central African Republic",
   }).save();
   new Country({
      code:"CG",
      name:"Republic of Congo",
   }).save();
   new Country({
      code:"CH",
      name:"Switzerland",
   }).save();
   new Country({
      code:"CI",
      name:"Côte d'Ivoire",
   }).save();
   new Country({
      code:"CL",
      name:"Chile",
   }).save();
   new Country({
      code:"CM",
      name:"Cameroon",
   }).save();
   new Country({
      code:"CN",
      name:"China",
   }).save();
   new Country({
      code:"CO",
      name:"Colombia",
   }).save();
   new Country({
      code:"CR",
      name:"Costa Rica",
   }).save();
   new Country({
      code:"CU",
      name:"Cuba",
   }).save();
   new Country({
      code:"CY",
      name:"Cyprus",
   }).save();
   new Country({
      code:"CZ",
      name:"Czech Republic",
   }).save();
   new Country({
      code:"DE",
      name:"Germany",
   }).save();
   new Country({
      code:"DJ",
      name:"Djibouti",
   }).save();
   new Country({
      code:"DK",
      name:"Denmark",
   }).save();
   new Country({
      code:"DO",
      name:"Dominican Republic",
   }).save();
   new Country({
      code:"DZ",
      name:"Algeria",
   }).save();
   new Country({
      code:"EC",
      name:"Ecuador",
   }).save();
   new Country({
      code:"EE",
      name:"Estonia",
   }).save();
   new Country({
      code:"EG",
      name:"Egypt",
   }).save();
   new Country({
      code:"EH",
      name:"Western Sahara",
   }).save();
   new Country({
      code:"ER",
      name:"Eritrea",
   }).save();
   new Country({
      code:"ES",
      name:"Spain",
   }).save();
   new Country({
      code:"ET",
      name:"Ethiopia",
   }).save();
   new Country({
      code:"FK",
      name:"Falkland Islands",
   }).save();
   new Country({
      code:"FI",
      name:"Finland",
   }).save();
   new Country({
      code:"FJ",
      name:"Fiji",
   }).save();
   new Country({
      code:"FR",
      name:"France",
   }).save();
   new Country({
      code:"GA",
      name:"Gabon",
   }).save();
   new Country({
      code:"GB",
      name:"United Kingdom",
   }).save();
   new Country({
      code:"GE",
      name:"Georgia",
   }).save();
   new Country({
      code:"GF",
      name:"French Guiana",
   }).save();
   new Country({
      code:"GH",
      name:"Ghana",
   }).save();
   new Country({
      code:"GL",
      name:"Greenland",
   }).save();
   new Country({
      code:"GM",
      name:"Gambia",
   }).save();
   new Country({
      code:"GN",
      name:"Guinea",
   }).save();
   new Country({
      code:"GQ",
      name:"Equatorial Guinea",
   }).save();
   new Country({
      code:"GR",
      name:"Greece",
   }).save();
   new Country({
      code:"GT",
      name:"Guatemala",
   }).save();
   new Country({
      code:"GW",
      name:"Guinea-Bissau",
   }).save();
   new Country({
      code:"GY",
      name:"Guyana",
   }).save();
   new Country({
      code:"HN",
      name:"Honduras",
   }).save();
   new Country({
      code:"HR",
      name:"Croatia",
   }).save();
   new Country({
      code:"HT",
      name:"Haiti",
   }).save();
   new Country({
      code:"HU",
      name:"Hungary",
   }).save();
   new Country({
      code:"ID",
      name:"Indonesia",
   }).save();
   new Country({
      code:"IE",
      name:"Ireland",
   }).save();
   new Country({
      code:"IL",
      name:"Israel",
   }).save();
   new Country({
      code:"IN",
      name:"India",
   }).save();
   new Country({
      code:"IQ",
      name:"Iraq",
   }).save();
   new Country({
      code:"IR",
      name:"Iran",
   }).save();
   new Country({
      code:"IS",
      name:"Iceland",
   }).save();
   new Country({
      code:"IT",
      name:"Italy",
   }).save();
   new Country({
      code:"JM",
      name:"Jamaica",
   }).save();
   new Country({
      code:"JO",
      name:"Jordan",
   }).save();
   new Country({
      code:"JP",
      name:"Japan",
   }).save();
   new Country({
      code:"KE",
      name:"Kenya",
   }).save();
   new Country({
      code:"KG",
      name:"Kyrgyzstan",
   }).save();
   new Country({
      code:"KH",
      name:"Cambodia",
   }).save();
   new Country({
      code:"KP",
      name:"North Korea",
   }).save();
   new Country({
      code:"KR",
      name:"South Korea",
   }).save();
   new Country({
      code:"XK",
      name:"Kosovo",
   }).save();
   new Country({
      code:"KW",
      name:"Kuwait",
   }).save();
   new Country({
      code:"KZ",
      name:"Kazakhstan",
   }).save();
   new Country({
      code:"LA",
      name:"Lao People's Democratic Republic",
   }).save();
   new Country({
      code:"LB",
      name:"Lebanon",
   }).save();
   new Country({
      code:"LK",
      name:"Sri Lanka",
   }).save();
   new Country({
      code:"LR",
      name:"Liberia",
   }).save();
   new Country({
      code:"LS",
      name:"Lesotho",
   }).save();
   new Country({
      code:"LT",
      name:"Lithuania",
   }).save();
   new Country({
      code:"LU",
      name:"Luxembourg",
   }).save();
   new Country({
      code:"LV",
      name:"Latvia",
   }).save();
   new Country({
      code:"LY",
      name:"Libya",
   }).save();
   new Country({
      code:"MA",
      name:"Morocco",
   }).save();
   new Country({
      code:"MD",
      name:"Moldova",
   }).save();
   new Country({
      code:"ME",
      name:"Montenegro",
   }).save();
   new Country({
      code:"MG",
      name:"Madagascar",
   }).save();
   new Country({
      code:"MK",
      name:"Macedonia",
   }).save();
   new Country({
      code:"ML",
      name:"Mali",
   }).save();
   new Country({
      code:"MM",
      name:"Myanmar",
   }).save();
   new Country({
      code:"MN",
      name:"Mongolia",
   }).save();
   new Country({
      code:"MR",
      name:"Mauritania",
   }).save();
   new Country({
      code:"MW",
      name:"Malawi",
   }).save();
   new Country({
      code:"MX",
      name:"Mexico",
   }).save();
   new Country({
      code:"MY",
      name:"Malaysia",
   }).save();
   new Country({
      code:"MZ",
      name:"Mozambique",
   }).save();
   new Country({
      code:"NA",
      name:"Namibia",
   }).save();
   new Country({
      code:"NC",
      name:"New Caledonia",
   }).save();
   new Country({
      code:"NE",
      name:"Niger",
   }).save();
   new Country({
      code:"NG",
      name:"Nigeria",
   }).save();
   new Country({
      code:"NI",
      name:"Nicaragua",
   }).save();
   new Country({
      code:"NL",
      name:"Netherlands",
   }).save();
   new Country({
      code:"NO",
      name:"Norway",
   }).save();
   new Country({
      code:"NP",
      name:"Nepal",
   }).save();
   new Country({
      code:"NZ",
      name:"New Zealand",
   }).save();
   new Country({
      code:"OM",
      name:"Oman",
   }).save();
   new Country({
      code:"PA",
      name:"Panama",
   }).save();
   new Country({
      code:"PE",
      name:"Peru",
   }).save();
   new Country({
      code:"PG",
      name:"Papua New Guinea",
   }).save();
   new Country({
      code:"PH",
      name:"Philippines",
   }).save();
   new Country({
      code:"PL",
      name:"Poland",
   }).save();
   new Country({
      code:"PK",
      name:"Pakistan",
   }).save();
   new Country({
      code:"PR",
      name:"Puerto Rico",
   }).save();
   new Country({
      code:"PS",
      name:"Palestinian Territories",
   }).save();
   new Country({
      code:"PT",
      name:"Portugal",
   }).save();
   new Country({
      code:"PY",
      name:"Paraguay",
   }).save();
   new Country({
      code:"QA",
      name:"Qatar",
   }).save();
   new Country({
      code:"RO",
      name:"Romania",
   }).save();
   new Country({
      code:"RS",
      name:"Serbia",
   }).save();
   new Country({
      code:"RU",
      name:"Russia",
   }).save();
   new Country({
      code:"RW",
      name:"Rwanda",
   }).save();
   new Country({
      code:"SA",
      name:"Saudi Arabia",
   }).save();
   new Country({
      code:"SB",
      name:"Solomon Islands",
   }).save();
   new Country({
      code:"SD",
      name:"Sudan",
   }).save();
   new Country({
      code:"SE",
      name:"Sweden",
   }).save();
   new Country({
      code:"SI",
      name:"Slovenia",
   }).save();
   new Country({
      code:"SJ",
      name:"Svalbard and Jan Mayen",
   }).save();
   new Country({
      code:"SK",
      name:"Slovakia",
   }).save();
   new Country({
      code:"SL",
      name:"Sierra Leone",
   }).save();
   new Country({
      code:"SN",
      name:"Senegal",
   }).save();
   new Country({
      code:"SO",
      name:"Somalia",
   }).save();
   new Country({
      code:"SR",
      name:"Suriname",
   }).save();
   new Country({
      code:"SS",
      name:"South Sudan",
   }).save();
   new Country({
      code:"SV",
      name:"El Salvador",
   }).save();
   new Country({
      code:"SY",
      name:"Syria",
   }).save();
   new Country({
      code:"SZ",
      name:"Swaziland",
   }).save();
   new Country({
      code:"TD",
      name:"Chad",
   }).save();
   new Country({
      code:"TF",
      name:"French Southern and Antarctic Lands",
   }).save();
   new Country({
      code:"TG",
      name:"Togo",
   }).save();
   new Country({
      code:"TH",
      name:"Thailand",
   }).save();
   new Country({
      code:"TJ",
      name:"Tajikistan",
   }).save();
   new Country({
      code:"TL",
      name:"Timor-Leste",
   }).save();
   new Country({
      code:"TM",
      name:"Turkmenistan",
   }).save();
   new Country({
      code:"TN",
      name:"Tunisia",
   }).save();
   new Country({
      code:"TR",
      name:"Turkey",
   }).save();
   new Country({
      code:"TT",
      name:"Trincodead and Tobago",
   }).save();
   new Country({
      code:"TW",
      name:"Taiwan",
   }).save();
   new Country({
      code:"TZ",
      name:"Tanzania",
   }).save();
   new Country({
      code:"UA",
      name:"Ukraine",
   }).save();
   new Country({
      code:"UG",
      name:"Uganda",
   }).save();
   new Country({
      code:"US",
      name:"United States",
   }).save();
   new Country({
      code:"UY",
      name:"Uruguay",
   }).save();
   new Country({
      code:"UZ",
      name:"Uzbekistan",
   }).save();
   new Country({
      code:"VE",
      name:"Venezuela",
   }).save();
   new Country({
      code:"VN",
      name:"Vietnam",
   }).save();
   new Country({
      code:"VU",
      name:"Vanuatu",
   }).save();
   new Country({
      code:"YE",
      name:"Yemen",
   }).save();
   new Country({
      code:"ZA",
      name:"South Africa",
   }).save();
   new Country({
      code:"ZM",
      name:"Zambia",
   }).save();
   new Country({
      code:"ZW",
      name:"Zimbabwe",
   }).save();




   var europe = new Continent(
      { 
         name: 'Europe', 
         countries: [{
               code: "AL"},
               {code: "AM"},
               {code: "AT"},
               {code: "AZ"},
               {code: "BA"},
               {code: "BE"},
               {code: "BG"},
               {code: "BY"},
               {code: "CH"},
               {code: "CY"},
               {code: "CZ"},
               {code: "DE"},
               {code: "DK"},
               {code: "EE"},
               {code: "ES"},
               {code: "FI"},
               {code: "FR"},
               {code: "GB"},
               {code: "GE"},
               {code: "GR"},
               {code: "HR"},
               {code: "HU"},
               {code: "IE"},
               {code: "IT"},
               {code: "LT"},
               {code: "LU"},
               {code: "LV"},
               {code: "MD"},
               {code: "ME"},
               {code: "MK"},
               {code: "NL"},
               {code: "NO"},
               {code: "PL"},
               {code: "PT"},
               {code: "RO"},
               {code: "RS"},
               {code: "SE"},
               {code: "SI"},
               {code: "SJ"},
               {code: "SK"},
               {code: "TR"},
               {code: "UA"},
               {code: "RU"},
               {code: "XK",
            }] 
      }
   ).save();

});