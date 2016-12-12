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
      code:"AD",
      name:"Andorra",
   }).save();
   new Country({
      code:"AE",
      name:"United Arab Emirates",
   }).save();
   new Country({
      code:"AF",
      name:"Afghanistan",
   }).save();
   new Country({
      code:"AG",
      name:"Antigua and Barbuda",
   }).save();
   new Country({
      code:"AI",
      name:"Anguilla",
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
      code:"AS",
      name:"American Samoa",
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
      code:"AW",
      name:"Aruba",
   }).save();
   new Country({
      code:"AX",
      name:"Aland Islands",
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
      code:"BB",
      name:"Barbados",
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
      code:"BH",
      name:"Bahrain",
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
      code:"BL",
      name:"Saint Barthelemy",
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
      code:"BM",
      name:"Bermuda",
   }).save();
   new Country({
      code:"BQ",
      name:"Bonaire, Sint Eustatius and Saba",
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
      code:"BV",
      name:"Bouvet Island",
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
      code:"CC",
      name:"Cocos (Keeling) Islands",
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
      code:"CK",
      name:"Cook Islands",
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
      code:"CV",
      name:"Cape Verde",
   }).save();
   new Country({
      code:"CW",
      name:"Curaçao",
   }).save();
   new Country({
      code:"CX",
      name:"Christmas Island",
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
      code:"DM",
      name:"Dominica",
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
      code:"EG",
      name:"Egypt",
   }).save();
   new Country({
      code:"EE",
      name:"Estonia",
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
      code:"FI",
      name:"Finland",
   }).save();
   new Country({
      code:"FJ",
      name:"Fiji",
   }).save();
   new Country({
      code:"FK",
      name:"Falkland Islands",
   }).save();
   new Country({
      code:"FM",
      name:"Federated States of Micronesia",
   }).save();
   new Country({
      code:"FO",
      name:"Faroe Islands",
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
      code:"GD",
      name:"Grenada",
   }).save();
   new Country({
      code:"GF",
      name:"French Guiana",
   }).save();
   new Country({
      code:"GG",
      name:"Guernsey",
   }).save();
   new Country({
      code:"GH",
      name:"Ghana",
   }).save();
   new Country({
      code:"GI",
      name:"Gibraltar",
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
      code:"GO",
      name:"Glorioso Islands",
   }).save();
   new Country({
      code:"GP",
      name:"Guadeloupe",
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
      code:"GS",
      name:"South Georgia and South Sandwich Islands",
   }).save();
   new Country({
      code:"GT",
      name:"Guatemala",
   }).save();
   new Country({
      code:"GU",
      name:"Guam",
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
      code:"HK",
      name:"Hong Kong",
   }).save();
   new Country({
      code:"HM",
      name:"Heard Island and McDonald Islands",
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
      code:"IM",
      name:"Isle of Man",
   }).save();
   new Country({
      code:"IN",
      name:"India",
   }).save();
   new Country({
      code:"IO",
      name:"British Indian Ocean Territory",
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
      code:"JE",
      name:"Jersey",
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
      code:"JU",
      name:"Juan De Nova Island",
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
      code:"KI",
      name:"Kiribati",
   }).save();
   new Country({
      code:"KM",
      name:"Comoros",
   }).save();
   new Country({
      code:"KN",
      name:"Saint Kitts and Nevis",
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
      code:"KY",
      name:"Cayman Islands",
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
      code:"LC",
      name:"Saint Lucia",
   }).save();
   new Country({
      code:"LI",
      name:"Liechtenstein",
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
      code:"MC",
      name:"Monaco",
   }).save();
   new Country({
      code:"MD",
      name:"Moldova",
   }).save();
   new Country({
      code:"MG",
      name:"Madagascar",
   }).save();
   new Country({
      code:"ME",
      name:"Montenegro",
   }).save();
   new Country({
      code:"MF",
      name:"Saint Martin",
   }).save();
   new Country({
      code:"MH",
      name:"Marshall Islands",
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
      code:"MO",
      name:"Macau",
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
      code:"MP",
      name:"Northern Mariana Islands",
   }).save();
   new Country({
      code:"MQ",
      name:"Martinique",
   }).save();
   new Country({
      code:"MR",
      name:"Mauritania",
   }).save();
   new Country({
      code:"MS",
      name:"Montserrat",
   }).save();
   new Country({
      code:"MT",
      name:"Malta",
   }).save();
   new Country({
      code:"MU",
      name:"Mauritius",
   }).save();
   new Country({
      code:"MV",
      name:"Maldives",
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
      code:"NF",
      name:"Norfolk Island",
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
      code:"NR",
      name:"Nauru",
   }).save();
   new Country({
      code:"NU",
      name:"Niue",
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
      code:"PF",
      name:"French Polynesia",
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
      code:"PK",
      name:"Pakistan",
   }).save();
   new Country({
      code:"PL",
      name:"Poland",
   }).save();
   new Country({
      code:"PM",
      name:"Saint Pierre and Miquelon",
   }).save();
   new Country({
      code:"PN",
      name:"Pitcairn Islands",
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
      code:"PW",
      name:"Palau",
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
      code:"RE",
      name:"Reunion",
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
      code:"SC",
      name:"Seychelles",
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
      code:"SG",
      name:"Singapore",
   }).save();
   new Country({
      code:"SH",
      name:"Saint Helena",
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
      code:"SM",
      name:"San Marino",
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
      code:"ST",
      name:"Sao Tome and Principe",
   }).save();
   new Country({
      code:"SV",
      name:"El Salvador",
   }).save();
   new Country({
      code:"SX",
      name:"Sint Maarten",
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
      code:"TC",
      name:"Turks and Caicos Islands",
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
      code:"TK",
      name:"Tokelau",
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
      code:"TO",
      name:"Tonga",
   }).save();
   new Country({
      code:"TR",
      name:"Turkey",
   }).save();
   new Country({
      code:"TT",
      name:"Trinidad and Tobago",
   }).save();
   new Country({
      code:"TV",
      name:"Tuvalu",
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
      code:"UM-DQ",
      name:"Jarvis Island",
   }).save();
   new Country({
      code:"UM-FQ",
      name:"Baker Island",
   }).save();
   new Country({
      code:"UM-HQ",
      name:"Howland Island",
   }).save();
   new Country({
      code:"UM-JQ",
      name:"Johnston Atoll",
   }).save();
   new Country({
      code:"UM-MQ",
      name:"Midway Islands",
   }).save();
   new Country({
      code:"UM-WQ",
      name:"Wake Island",
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
      code:"VA",
      name:"Vatican City",
   }).save();
   new Country({
      code:"VC",
      name:"Saint Vincent and the Grenadines",
   }).save();
   new Country({
      code:"VE",
      name:"Venezuela",
   }).save();
   new Country({
      code:"VG",
      name:"British Virgin Islands",
   }).save();
   new Country({
      code:"VI",
      name:"US Virgin Islands",
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
      code:"WF",
      name:"Wallis and Futuna",
   }).save();
   new Country({
      code:"WS",
      name:"Samoa",
   }).save();
   new Country({
      code:"YE",
      name:"Yemen",
   }).save();
   new Country({
      code:"YT",
      name:"Mayotte",
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


  var europe = new Continent({
    name: 'Europe', 
    countries: [
      {code: "AL"},
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
      {code: "JE"},
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
      {code: "VA"},
      {code: "MT"},
      {code: "MC"},
      {code: "XK"},
      {code: "LI"},
      {code: "IM"},
      {code: "GI"},
      {code: "FO"},
      {code: "AD"},
      {code: "AX"},
      {code: "GG"},
      {code: "SM"}] 
  }).save();

  var north_america = new Continent({
    name: "North America",
    countries: [
      {code: "BS"},
      {code: "BZ"},
      {code: "CA"},
      {code: "CR"},
      {code: "CU"},
      {code: "DO"},
      {code: "GL"},
      {code: "GT"},
      {code: "HN"},
      {code: "HT"},
      {code: "JM"},
      {code: "MX"},
      {code: "NI"},
      {code: "PA"},
      {code: "PR"},
      {code: "SV"},
      {code: "US"},
      {code: "AG"},
      {code: "AW"},
      {code: "BB"},
      {code: "BL"},
      {code: "GD"},
      {code: "KN"},
      {code: "LC"},
      {code: "MQ"},
      {code: "TC"},
      {code: "VG"},
      {code: "AI"},
      {code: "BM"},
      {code: "DM"},
      {code: "PM"},
      {code: "GP"},
      {code: "KY"},
      {code: "MF"},
      {code: "MS"},
      {code: "SX"},
      {code: "TT"},
      {code: "VC"},
      {code: "VI"},
      {code: "BQ"},
      {code: "CW"}
    ]
  }).save();

  var south_america = new Continent({
    name: "South America",
    countries: [
      {code: "AR"},
      {code: "BO"},
      {code: "BR"},
      {code: "CL"},
      {code: "CO"},
      {code: "EC"},
      {code: "FK"},
      {code: "GF"},
      {code: "GY"},
      {code: "PE"},
      {code: "PY"},
      {code: "SR"},
      {code: "UY"},
      {code: "VE"},
      {code: "GS"}
    ]
  }).save();

  var africa = new Continent({
    name: "Africa",
    countries: [
      {code: "AO"},
      {code: "BF"},
      {code: "BI"},
      {code: "BJ"},
      {code: "BW"},
      {code: "CD"},
      {code: "CF"},
      {code: "CG"},
      {code: "CI"},
      {code: "CM"},
      {code: "DJ"},
      {code: "DZ"},
      {code: "EG"},
      {code: "ER"},
      {code: "ET"},
      {code: "GA"},
      {code: "GH"},
      {code: "GM"},
      {code: "GN"},
      {code: "GQ"},
      {code: "GW"},
      {code: "KE"},
      {code: "LR"},
      {code: "LS"},
      {code: "LY"},
      {code: "MA"},
      {code: "MU"},
      {code: "MG"},
      {code: "ML"},
      {code: "MR"},
      {code: "MW"},
      {code: "MZ"},
      {code: "NA"},
      {code: "NE"},
      {code: "NG"},
      {code: "RE"},
      {code: "RW"},
      {code: "SD"},
      {code: "SL"},
      {code: "SN"},
      {code: "SO"},
      {code: "SS"},
      {code: "SZ"},
      {code: "TD"},
      {code: "TG"},
      {code: "TN"},
      {code: "TZ"},
      {code: "UG"},
      {code: "ZA"},
      {code: "ZM"},
      {code: "ZW"},
      {code: "EH"},
      {code: "KM"},
      {code: "GO"},
      {code: "JU"},
      {code: "SH"},
      {code: "ST"},
      {code: "YT"},
      {code: "BV"},
      {code: "CV"},
      {code: "SC"}
    ]
  }).save();

  var asia = new Continent({
    name: "Asia",
    countries: [
      {code: "AE"},
      {code: "AF"},
      {code: "BD"},
      {code: "BN"},
      {code: "IO"},
      {code: "BT"},
      {code: "CN"},
      {code: "ID"},
      {code: "IL"},
      {code: "IN"},
      {code: "IQ"},
      {code: "IR"},
      {code: "JO"},
      {code: "JP"},
      {code: "KG"},
      {code: "KH"},
      {code: "KP"},
      {code: "KR"},
      {code: "KW"},
      {code: "KZ"},
      {code: "LA"},
      {code: "LB"},
      {code: "LK"},
      {code: "MO"},
      {code: "MM"},
      {code: "MN"},
      {code: "MY"},
      {code: "NP"},
      {code: "OM"},
      {code: "PH"},
      {code: "PK"},
      {code: "PS"},
      {code: "QA"},
      {code: "SA"},
      {code: "SY"},
      {code: "TH"},
      {code: "TJ"},
      {code: "TL"},
      {code: "TM"},
      {code: "TW"},
      {code: "UZ"},
      {code: "VN"},
      {code: "YE"},
      {code: "HK"},
      {code: "MV"},
      {code: "BH"},
      {code: "SG"}
    ]
  }).save();

  var oceania = new Continent({
    name: "Oceania",
    countries: [
      {code: "AS"},
      {code: "AU"},
      {code: "UM-FQ"},
      {code: "CC"},
      {code: "CX"},
      {code: "FJ"},
      {code: "FM"},
      {code: "GU"},
      {code: "HM"},
      {code: "UM-HQ"},
      {code: "UM-DQ"},
      {code: "UM-JQ"},
      {code: "KI"},
      {code: "MH"},
      {code: "UM-MQ"},
      {code: "MP"},
      {code: "NC"},
      {code: "NF"},
      {code: "NR"},
      {code: "NU"},
      {code: "NZ"},
      {code: "PG"},
      {code: "PW"},
      {code: "SB"},
      {code: "TF"},
      {code: "TK"},
      {code: "TL"},
      {code: "TO"},
      {code: "TV"},
      {code: "VU"},
      {code: "UM-WQ"},
      {code: "WF"},
      {code: "WS"},
      {code: "CK"},
      {code: "PF"},
      {code: "PN"}
    ]
  }).save();

});


