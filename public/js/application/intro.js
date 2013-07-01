
// create Ember application with some extra methods
App = Ember.Application.createWithMixins({
    title: '',
    message: '',

    titleChanged: function(){

        var title = this.get('title');
        var suffix = App.static.titleSuffix + ' ' + App.static.version;

        if(title.length){
            $(document).attr('title', title + ' | ' + suffix);
        }else{
            $(document).attr('title', suffix);
        }

    }.observes('title'),

    messageChanged: function(){

        var message = this.get('message');
        if(!message.length){
            this.set('message', App.static.welcomes[0|(Math.random() * App.static.welcomes.length)]);
        }

    }.observes('message')
});

// tell app to delay initialization
App.deferReadiness();

App.static = {
    titleSuffix: 'Tor Onionoo Search',
    version: '0.1',
    db: {
        name: 'tos',
        prefix: 'tos_',
        details: 'details',
        detailsStoreTimeout: 1000 * 60 * 60 * 24
    },
    messages: {
        detailsNotFound: 'No details found.'
    },
    welcomes: [
        'welkom',
        'مُرَحَّب بِه، مُحْتَفى بِه',
        'добре дошъл',
        'bem-vindo',
        'vítaný',
        'willkommen',
        'velkommen',
        'ευπρόσδεκτος',
        'bienvenido',
        'teretulnud',
        'خوش آمد',
        'tervetullut',
        'bienvenu',
        'רָצוּי',
        'dobrodošao',
        'szívesen látott',
        'disambut baik',
        'velkominn',
        'benvenuto',
        'laukiamas, mielas',
        'gaidīts; patīkams; vēlams',
        'dialu-alukan',
        'welkom',
        'velkommen',
        'mile widziany',
        'bem-vindo',
        'binevenit',
        'желанный',
        'vítaný',
        'dobrodošel',
        'dobrodošao',
        'välkommen',
        'hoşa giden, memnuniyet verici',
        'бажаний, приємний',
        'خوش آمدید',
        'chào mừng',
    ],
    icons: {
        'Fast': '&#9889;',
        'Running': '&#128361;',
        'BadExit': '&#128683;',
        'Authority': '&#9733;',
        'Guard': '&#59198;',
        'HSDir': '&#128213;',
        'Named': '&#8505;',
        'Stable': '&#128191;',
        'V2Dir': '&#128193;',
        'Valid': '&#10003;',
        'Unnamed': '&#10067;',
        'Exit': '&#59201;'
    },
    searchParams: {
        // Coming soon, for advanced search
        'type': ['relay', 'bridge'],
        'running': ['true', 'false']
    },
    countries:  {
        "ad" : "Andorra",
        "ae" : "United Arab Emirates",
        "af" : "Afghanistan",
        "ag" : "Antigua and Barbuda",
        "ai" : "Anguilla",
        "al" : "Albania",
        "am" : "Armenia",
        "an" : "Netherlands Antilles",
        "ao" : "Angola",
        "aq" : "Antarctica",
        "ar" : "Argentina",
        "as" : "American Samoa",
        "at" : "Austria",
        "au" : "Australia",
        "aw" : "Aruba",
        "ax" : "Aland Islands",
        "az" : "Azerbaijan",
        "ba" : "Bosnia and Herzegovina",
        "bb" : "Barbados",
        "bd" : "Bangladesh",
        "be" : "Belgium",
        "bf" : "Burkina Faso",
        "bg" : "Bulgaria",
        "bh" : "Bahrain",
        "bi" : "Burundi",
        "bj" : "Benin",
        "bl" : "Saint Bartelemey",
        "bm" : "Bermuda",
        "bn" : "Brunei",
        "bo" : "Bolivia",
        "br" : "Brazil",
        "bs" : "Bahamas",
        "bt" : "Bhutan",
        "bv" : "Bouvet Island",
        "bw" : "Botswana",
        "by" : "Belarus",
        "bz" : "Belize",
        "ca" : "Canada",
        "cc" : "Cocos (Keeling) Islands",
        "cd" : "Democratic Republic of the Congo",
        "cf" : "Central African Republic",
        "cg" : "Congo",
        "ch" : "Switzerland",
        "ci" : "C&#244;te d'Ivoire",
        "ck" : "Cook Islands",
        "cl" : "Chile",
        "cm" : "Cameroon",
        "cn" : "China",
        "co" : "Colombia",
        "cr" : "Costa Rica",
        "cu" : "Cuba",
        "cv" : "Cape Verde",
        "cx" : "Christmas Island",
        "cy" : "Cyprus",
        "cz" : "Czech Republic",
        "de" : "Germany",
        "dj" : "Djibouti",
        "dk" : "Denmark",
        "dm" : "Dominica",
        "do" : "Dominican Republic",
        "dz" : "Algeria",
        "ec" : "Ecuador",
        "ee" : "Estonia",
        "eg" : "Egypt",
        "eh" : "Western Sahara",
        "er" : "Eritrea",
        "es" : "Spain",
        "et" : "Ethiopia",
        "fi" : "Finland",
        "fj" : "Fiji",
        "fk" : "Falkland Islands (Malvinas)",
        "fm" : "Federated States of Micronesia",
        "fo" : "Faroe Islands",
        "fr" : "France",
        "fx" : "Metropolitan France",
        "ga" : "Gabon",
        "gb" : "United Kingdom",
        "gd" : "Grenada",
        "ge" : "Georgia",
        "gf" : "French Guiana",
        "gg" : "Guernsey",
        "gh" : "Ghana",
        "gi" : "Gibraltar",
        "gl" : "Greenland",
        "gm" : "Gambia",
        "gn" : "Guinea",
        "gp" : "Guadeloupe",
        "gq" : "Equatorial Guinea",
        "gr" : "Greece",
        "gs" : "South Georgia and the South Sandwich Islands",
        "gt" : "Guatemala",
        "gu" : "Guam",
        "gw" : "Guinea-Bissau",
        "gy" : "Guyana",
        "hk" : "Hong Kong",
        "hm" : "Heard Island and McDonald Islands",
        "hn" : "Honduras",
        "hr" : "Croatia",
        "ht" : "Haiti",
        "hu" : "Hungary",
        "id" : "Indonesia",
        "ie" : "Ireland",
        "il" : "Israel",
        "im" : "Isle of Man",
        "in" : "India",
        "io" : "British Indian Ocean Territory",
        "iq" : "Iraq",
        "ir" : "Iran",
        "is" : "Iceland",
        "it" : "Italy",
        "je" : "Jersey",
        "jm" : "Jamaica",
        "jo" : "Jordan",
        "jp" : "Japan",
        "ke" : "Kenya",
        "kg" : "Kyrgyzstan",
        "kh" : "Cambodia",
        "ki" : "Kiribati",
        "km" : "Comoros",
        "kn" : "Saint Kitts and Nevis",
        "kp" : "North Korea",
        "kr" : "Republic of Korea",
        "kw" : "Kuwait",
        "ky" : "Cayman Islands",
        "kz" : "Kazakhstan",
        "la" : "Laos",
        "lb" : "Lebanon",
        "lc" : "Saint Lucia",
        "li" : "Liechtenstein",
        "lk" : "Sri Lanka",
        "lr" : "Liberia",
        "ls" : "Lesotho",
        "lt" : "Lithuania",
        "lu" : "Luxembourg",
        "lv" : "Latvia",
        "ly" : "Libya",
        "ma" : "Morocco",
        "mc" : "Monaco",
        "md" : "Republic of Moldova",
        "me" : "Montenegro",
        "mf" : "Saint Martin",
        "mg" : "Madagascar",
        "mh" : "Marshall Islands",
        "mk" : "Macedonia",
        "ml" : "Mali",
        "mm" : "Burma",
        "mn" : "Mongolia",
        "mo" : "Macau",
        "mp" : "Northern Mariana Islands",
        "mq" : "Martinique",
        "mr" : "Mauritania",
        "ms" : "Montserrat",
        "mt" : "Malta",
        "mu" : "Mauritius",
        "mv" : "Maldives",
        "mw" : "Malawi",
        "mx" : "Mexico",
        "my" : "Malaysia",
        "mz" : "Mozambique",
        "na" : "Namibia",
        "nc" : "New Caledonia",
        "ne" : "Niger",
        "nf" : "Norfolk Island",
        "ng" : "Nigeria",
        "ni" : "Nicaragua",
        "nl" : "Netherlands",
        "no" : "Norway",
        "np" : "Nepal",
        "nr" : "Nauru",
        "nu" : "Niue",
        "nz" : "New Zealand",
        "om" : "Oman",
        "pa" : "Panama",
        "pe" : "Peru",
        "pf" : "French Polynesia",
        "pg" : "Papua New Guinea",
        "ph" : "Philippines",
        "pk" : "Pakistan",
        "pl" : "Poland",
        "pm" : "Saint Pierre and Miquelon",
        "pn" : "Pitcairn Islands",
        "pr" : "Puerto Rico",
        "ps" : "Palestinian Territory",
        "pt" : "Portugal",
        "pw" : "Palau",
        "py" : "Paraguay",
        "qa" : "Qatar",
        "re" : "Reunion",
        "ro" : "Romania",
        "rs" : "Serbia",
        "ru" : "Russia",
        "rw" : "Rwanda",
        "sa" : "Saudi Arabia",
        "sb" : "Solomon Islands",
        "sc" : "Seychelles",
        "sd" : "Sudan",
        "se" : "Sweden",
        "sg" : "Singapore",
        "sh" : "Saint Helena",
        "si" : "Slovenia",
        "sj" : "Svalbard and Jan Mayen",
        "sk" : "Slovakia",
        "sl" : "Sierra Leone",
        "sm" : "San Marino",
        "sn" : "Senegal",
        "so" : "Somalia",
        "sr" : "Suriname",
        "st" : "S&#227;o Tom&#233; and Pr&#237;ncipe",
        "sv" : "El Salvador",
        "sy" : "Syrian Arab Republic",
        "sz" : "Swaziland",
        "tc" : "Turks and Caicos Islands",
        "td" : "Chad",
        "tf" : "French Southern Territories",
        "tg" : "Togo",
        "th" : "Thailand",
        "tj" : "Tajikistan",
        "tk" : "Tokelau",
        "tl" : "East Timor",
        "tm" : "Turkmenistan",
        "tn" : "Tunisia",
        "to" : "Tonga",
        "tr" : "Turkey",
        "tt" : "Trinidad and Tobago",
        "tv" : "Tuvalu",
        "tw" : "Taiwan",
        "tz" : "United Republic of Tanzania",
        "ua" : "Ukraine",
        "ug" : "Uganda",
        "um" : "United States Minor Outlying Islands",
        "us" : "United States",
        "uy" : "Uruguay",
        "uz" : "Uzbekistan",
        "va" : "Vatican City",
        "vc" : "Saint Vincent and the Grenadines",
        "ve" : "Venezuela",
        "vg" : "British Virgin Islands",
        "vi" : "United States Virgin Islands",
        "vn" : "Vietnam",
        "vu" : "Vanuatu",
        "wf" : "Wallis and Futuna",
        "ws" : "Samoa",
        "ye" : "Yemen",
        "yt" : "Mayotte",
        "za" : "South Africa",
        "zm" : "Zambia",
        "zw" : "Zimbabwe"
    },
    countriesArray: []
};

App.set('message', App.static.welcomes[0|(Math.random() * App.static.welcomes.length)]);

// fill countries array
for(var country in App.static.countries){
    if(App.static.countries.hasOwnProperty(country)){
        App.static.countriesArray.push({
            key: country,
            value: App.static.countries[country]
        });
    }
}


// create indexDB stores
var testIndexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.oIndexedDB || window.msIndexedDB;
App.Store = {
    isUseable: testIndexedDB !== 'undefined'
};

$.indexedDB(App.static.db.name, {
    'version': 1,
    'schema': {
        '1': function(versionTransaction){
            var detail = versionTransaction.createObjectStore(App.static.db.details, {
                'keyPath': 'fingerprint'
            });

        }
    }
}).done(function(){
        console.log('indexedDB opened');
        App.Store.Detail = $.indexedDB(App.static.db.name).objectStore(App.static.db.details);

        // initalize app if database is ready
        App.advanceReadiness();
});



$(document).ready(function(){

    // initialize foundation for tooltips
    $(document).foundation();
});