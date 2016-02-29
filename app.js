'use strict';

var Hapi = require('hapi');

// Setting up server
var server = new Hapi.Server();
server.connection({ 
    host: 'localhost', 
    port: 8000 
});


// ------------------------------
// VARIABLES
// ------------------------------

var residenceDiningBaseUrl = "http://www.bu.edu/dining/where-to-eat/residence-dining/";
var retailDiningBaseUrl = "http://www.bu.edu/dining/where-to-eat/retail-dining/";

var residenceDiningLocations = [
    "warren-towers"
];

var retailDiningLocations = [
    "basho-express",
    "basho-sushi",
    "boston-university-cheeseology",
    "breadwinners-at-smg",
    "bu-pub"
];

var locationInfoTemplate = {
    "location_id": "basho-express",
    "version_number": 0,
    "location_name": "Basho Express",
    "image_url": "http://www.bu.edu/dining/files/2016/01/bashostaff.jpg",
    "menu_url": "http://www.bu.edu/nisprod/dining/data/menus/bashoexpress.pdf",
    "type_of_location": "retail",
    "contact_info": {
        "person_name": "",
        "person_position": "",
        "phone_number": "617-358-2881"
    },
    "address": "700 Commonwealth Ave Boston, MA. 02215",
    "payment_options": {
        "convinience_points": true,
        "dining_points": true,
        "meals": true,
        "credit_cards": true
    },
    "description": "BASHO – a Japanese noun for “a place where things happen” – offers its customers modern interpretations of Japanese cuisine with a focus on the freshest sushi.",
    "hours": {
        "special_hours": {
            "3/4": {
                "open": true,
                "open_time": "11am",
                "close_time": "9pm"
            },
            "3/5": {
                "open": false
            },
            "3/6": {
                "open": false
            }
        },
        "regular_hours": {
            "mon": {
                "open": true,
                "open_time": "11am",
                "close_time": "9pm"
            },
            "tue": {
                "open": true,
                "open_time": "11am",
                "close_time": "9pm"
            },
            "wed": {
                "open": true,
                "open_time": "11am",
                "close_time": "9pm"
            },
            "thu": {
                "open": true,
                "open_time": "11am",
                "close_time": "9pm"
            },
            "fri": {
                "open": true,
                "open_time": "11am",
                "close_time": "9pm"
            },
            "sat": {
                "open": true,
                "open_time": "11am",
                "close_time": "9pm"
            },
            "sun": {
                "open": true,
                "open_time": "11am",
                "close_time": "9pm"
            }
        }
    }
}

var locationsData = [locationInfoTemplate];

// Routes
server.route({
    method: 'GET',
    path: '/',
    handler: function(req, reply) {
        return reply(locationsData);
    }
});


server.start((err) => {

    if (err) {
        throw err;
    }

    console.log('Server is running at ', server.info.uri);
});