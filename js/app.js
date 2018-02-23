// Global Variables & Default Locations
var map;
var clientID;
var clientSecret;

var defaultLocations = [ 
    {
        title: '128 Aba Owerri Road, beside Kemjika Filling Station, Abia State',
        location: {
            lat: 5.128333,
            lng: 7.360562
        }
    },
    {
        title: 'Laffro house, beside Hasan Furniture, Moshood Abiola way, Abeokuta',
        location: {
            lat: 7.167938,
            lng: 3.372688
        }
    },
    {
        title: '748, Alenxandria Crescent, Wuse 11, Behind Barnex Plaza, F.C.T. Abuja',
        location: {
            lat: 9.0837,
            lng: 7.465877
        }
    },
    {
        title: 'Barrister place,Tomatoes junction Deidei FCT',
        location: {
            lat: 9.0805665,
            lng: 7.4664779
        }
    },
    {
        title: '102 Oyemekun rd, opposite Oyemekun Grammar School, Akure',
        location: {
            lat: 7.263499,
            lng: 5.17775
        }
    },
    {
        title: '379, Nnebisi Road. Asaba',
        location: {
            lat: 6.205473,
            lng: 6.721556
        }
    },
    {
        title: 'Km 20 Enugu / Onitsha Express Road, opp. Crunches Eatery, Unizik Junction, Awka',
        location: {
            lat: 6.2219079,
            lng: 7.0868439
        }
    },
    {
        title: '134, Murtala Mohammed Way, Benin City, Edo State',
        location: {
            lat: 6.3280757,
            lng: 5.6403479
        }
    },
    {
        title: '14, Murtala Mohammed Way, Calabar.',
        location: {
            lat: 4.989819,
            lng: 8.333496
        }
    },
    {
        title: 'Plot 214, First Avenue State Housing Estate, Calabar',
        location: {
            lat: 4.9850992,
            lng: 8.3373497
        }
    },
    {
        title: 'MBM Ajitadidun Estate, Along Adebayo Road. Ado Ekiti',
        location: {
            lat: 7.6554983,
            lng: 5.2296964
        }
    },
    {
        title: '33, Abakaliki Road, G.R.A, Enugu',
        location: {
            lat: 6.461811,
            lng: 7.504001
        }
    },
    {
        title: '1, Azeez Aina Street, Off Ring Road, Ibadan, Oyo State',
        location: {
            lat: 7.3565553,
            lng: 3.8702913
        }
    },
    {
        title: 'Abu Plaza,Elebu Market road, off Akala express, Elebu Oluyole extension, Ibadan',
        location: {
            lat: 7.352486,
            lng: 3.824015
        }
    },
    {
        title: 'Inside Debistol oil, Olopomeji busstop, Opp wetlands hotel, Akobo, Ibadan',
        location: {
            lat: 7.4044204,
            lng: 3.9441713
        }
    },
    {
        title: 'Km 30, Lagos Epe Expressway Casia Estate, Abijo GRA',
        location: {
            lat: 6.4686529,
            lng: 3.4923618
        }
    },
    {
        title: '4 Ifelodun Street, Off Asa Dam Road, Offa Garage, Ilorin',
        location: {
            lat: 8.4514072,
            lng: 4.5806123
        }
    },
    {
        title: 'No.16, Tos Benson Road (Former Beach Road), Ebute Ikorodu, Lagos',
        location: {
            lat: 6.605269,
            lng: 3.3478667
        }
    },
    {
        title: '1A, Constitution Hill Road, Opposite Pirelli tyres, Joys, Plateau State',
        location: {
            lat: 9.9051133,
            lng: 8.891676
        }
    },
    {
        title: '1440, Kachia Road, Kaduna, Kaduna State.',
        location: {
            lat: 10.4861451,
            lng: 7.4160316
        }
    },
    {
        title: '4, Ajasa Street, Off Civic Centre Road, Kano State.',
        location: {
            lat: 11.9832844,
            lng: 8.5429084
        }
    },
    {
        title: '19, Murtala Mohammed Way, Opposite kano Residential Hotel, Kano',
        location: {
            lat: 11.9832844,
            lng: 8.5429084
        }
    },
    {
        title: '91, Allen Avenue, Ikeja Lagos',
        location: {
            lat: 6.605269,
            lng: 3.3478667
        }
    },
    {
        title: '102, Oba Akran Avenue, Ikeja Industrial Estate',
        location: {
            lat: 6.6010673,
            lng: 3.3364635
        }
    },
    {
        title: 'Berger place, along Lagos Ibadan expressway behind Lagos state Accident & Emergency centre',
        location: {
            lat: 6.605269,
            lng: 3.3478667
        }
    },
    {
        title: 'Adenekan Mega Plaza, No 1 Adenekan street opposite Access Bank, Okota road, Isolo',
        location: {
            lat: 6.605269,
            lng: 3.3478667
        }
    },
    {
        title: 'Km 16, Lekki Epe Expressway Agungi/Osapa Bus Stop',
        location: {
            lat: 6.4686529,
            lng: 3.4923618
        }
    },
    {
        title: '105, Baga Road, Maiduguri, Borno State',
        location: {
            lat: 11.902102,
            lng: 13.08546
        }
    },
    {
        title: 'Tonimas Plaza, by Railway Crossing, Old Otukpo Road, Benue State',
        location: {
            lat: 7.089792,
            lng: 7.657574
        }
    },
    {
        title: 'Beside tilley Gydao College, Makurdi -Lafia Road, North Bank, Makurdi, Benue State',
        location: {
            lat: 7.769292,
            lng: 8.561354
        }
    },
    {
        title: 'SM3, Ahamadu Bahago Plaza, Tunga, Minna',
        location: {
            lat: 9.603431,
            lng: 6.563310
        }
    },
    {
        title: 'Pentagon Plaza, Bukan Sidi, beside Investment House, Jos Road, Lafia',
        location: {
            lat: 11.0860104,
            lng: 7.716289
        }
    },
    {
        title: 'Akwa Road, Onitsha, Anambra State',
        location: {
            lat: 6.151028,
            lng: 6.802582
        }
    },
    {
        title: 'No 35 blossom Plaza, Onitsha, Owerri Road, Nnewi',
        location: {
            lat: 6.2219079,
            lng: 7.0868439
        }
    },
    {
        title: '306, Ikirun road, Beside Iyana camp opp.NNPC, Ota Efun, Ikirun Road, Oshogbo',
        location: {
            lat: 7.8242904,
            lng: 4.5883262
        }
    },
    {
        title: '51/65 Mbaise Road, by Wetheral/Fire Service Roundabout. Owerri',
        location: {
            lat: 5.4839214,
            lng: 7.0145165
        }
    },
    {
        title: 'No 42 Old Aba Road by Artillery Junction Portharcourt',
        location: {
            lat: 4.8446588,
            lng: 7.0382423
        }
    },
    {
        title: '70, Ordinance Road, Trans Amadi Industrial Estate, Portharcourt',
        location: {
            lat: 4.843555,
            lng: 7.0383416
        }
    },
    {
        title: '13,Ahmadu Bello way, Sokoto',
        location: {
            lat: 13.0543789,
            lng: 5.1625844
        }
    },
    {
        title: '111, Warri-Effurun Road, Warri, Delta State',
        location: {
            lat: 5.586068,
            lng: 5.7796854
        }
    },
    {
        title: 'Km 5, Refinery Road,Warri,Delta State',
        location: {
            lat: 5.5691557,
            lng: 5.7283273
        }
    },
    {
        title: 'Km 2,Okpe road, Osubi behind victory joe filling station, Delta State',
        location: {
            lat: 5.586068,
            lng: 5.7796854
        }
    },
    {
        title: 'No 51,Ikot Ekpene Road, Uyo',
        location: {
            lat: 5.0534452,
            lng: 7.8785121
        }
    },
    {
        title: 'Keana house,3 Lagos crescent Garki 2 FCT Abuja',
        location: {
            lat: 9.0805665,
            lng: 7.4664779
        }
    },
    {
        title: 'Shop No 8, Kwakwansh Plaza, opposite Mohafiya Filling Station Mandalla Road, Suleja, Niger State',
        location: {
            lat: 9.217861,
            lng: 7.189803
        }
    },
    {
        title: 'Lekki Garent plaza Km 17/18,Lekki - Epe expressway, Igbo - Efon b/stop, Lekki',
        location: {
            lat: 6.4686529,
            lng: 3.4923618
        }
    },
 ]

// Default location for several points
var defaultLocations = [
    {
        title: 'Canna Cruz',
        location: {
            lat: 36.9863342,
            lng: -122.0324849
        }
    },
    {
        title: 'Santa Cruz Naturals',
        location: {
            lat: 36.9757459,
            lng: -121.8882603
        }
    },
    {
        title: 'KindPeoples Collective',
        location: {
            lat: 36.9856965,
            lng: -121.9827407
        }
    },
    {
        title: 'Granny Purps',
        location: {
            lat: 36.9851404,
            lng: -121.9659725
        }
    },
    {
        title: 'Herbal Cruz',
        location: {
            lat: 36.9671524,
            lng: -121.9649442
        }
    },
    {
        title: 'Central Coast Wellness Center',
        location: {
            lat: 37.0721581,
            lng: -122.0840406
        }
    }
];


// Working with the foursquare API
 var Location = function(data) {
    var self = this;
    this.name = data.title;
    this.position = data.location;
    this.URL = '';
    this.street = '';
    this.city = '';
    this.phone = '';

    this.visible = ko.observable(true);

    // Credentials for FOURSQUARE Api
    clientID = 'AEDY4G2EDEFQZUOPU1RZNVMOUX0X25LCTKM0SJQWQPQG24L3';
    clientSecret = '5Y2UT2PWZRKVXBM0GJ5DBGRAXFK02M45XZVLAMYQSZMQVZWT';

    // Foursquare API endpoint build
    var fourSquareURL =  'https://api.foursquare.com/v2/venues/search?ll=' + this.position.lat + ',' + this.position.lng + '&client_id=' + clientID + '&client_secret=' + clientSecret + '&v=20170801' + '&query=' + this.name;

    // Gets the data from foursquare and store it into its' own variables.
    $.getJSON(fourSquareURL).done(function (data) {
        var results = data.response.venues[0];
        self.URL = results.url;
        if (typeof self.URL === 'undefined') {
            self.URL = "";
        }

        self.street = results.location.formattedAddress[0];
        self.city = results.location.formattedAddress[1];
        self.phone = results.contact.phone;
        if (typeof self.phone === 'undefined') {
            self.phone = '';
        }

    }).fail(function () {
        $('.venue-list').html('There was an error with the Foursquare API call. Please refresh the page and try again');
    });

    // This is what the infowindow will contain.
    this.contentString =
        '<div class="info-window-content">' +
        '<div class="title"><b>' + data.title + "</b></div>" +
        '<div class="content"><a href="' + self.URL + '">' + self.URL + "</a></div>" +
        '<div class="content">' + self.street + "</div>" +
        '<div class="content">' + self.city + "</div>" +
        '<div class="content">' + self.phone + "</div>" +
        "</div>";

    // Puts the content string inside Infowindow.
    this.infoWindow = new google.maps.InfoWindow({content: self.contentString});

    // Placing the markers
    this.marker = new google.maps.Marker({
        position: new google.maps.LatLng(data.location.lat, data.location.lng),
        title: data.title,
        map: map
    });

    // Setting selected marker visibility.
    this.showMarker = ko.computed(function() {
        if(this.visible() === true) {
            this.marker.setMap(map);
        } else {
            this.marker.setMap(null);
        }
        return true;
    }, this);

    // When marker is clicked on open up infowindow designated to the marker with it's information.
    this.marker.addListener('click', function(){
        self.contentString =
            '<div class="info-window-content">' +
            '<div class="title"><b>' + data.title + "</b></div>" +
            '<div class="content"><a href="' + self.URL +'">' + self.URL + "</a></div>" +
            '<div class="content">' + self.street + "</div>" +
            '<div class="content">' + self.city + "</div>" +
            '<div class="content"><a href="tel:' + self.phone +'">' + self.phone +"</a></div>" +
            "</div>";

        self.infoWindow.setContent(self.contentString);
        self.infoWindow.open(map, this);

        // Setting bounce animation for markers
        self.marker.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function() {
            self.marker.setAnimation(null);
        }, 2100);
    });

    // Makes the marker bounce animation whenever clicked.
    this.bounce = function(place) {
        google.maps.event.trigger(self.marker, 'click');
    };
};


// Working with Google Maps API / View model
function ViewModel(){
    var self = this;

    // Search term is blank by default
    this.searchTerm = ko.observable('');

    // Initializes a blank array for locations
    this.locationList = ko.observableArray([]);

    // Constructor creates a new map
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: {lat: 36.9863342, lng: -122.0324849},
        mapTypeControl: false
    });

    // Pushes default locations array into new location list array
    defaultLocations.forEach(function(locationItem){
        self.locationList.push( new Location(locationItem));
    });

    // Searches for what user typed in the input bar using the locationlist array.
    // Only displaying the exact item results that user type if available in the locationlist array.
    this.filteredList = ko.computed( function() {
        var filter = self.searchTerm().toLowerCase();
        if (!filter) {
            self.locationList().forEach(function(locationItem){
                locationItem.visible(true);
            });
            return self.locationList();
        } else {
            return ko.utils.arrayFilter(self.locationList(), function(locationItem) {
                var string = locationItem.name.toLowerCase();
                var result = (string.search(filter) >= 0);
                locationItem.visible(result);
                return result;
            });
        }
    }, self);
}

// Error handling if map doesn't load.
function errorHandling() {
    $('#map').html('We had trouble loading Google Maps. Please refresh your browser and try again.');
}

function runApp() {
    ko.applyBindings(new ViewModel());
    this.mapElem = document.getElementById('map');
    this.mapElem.style.height = window.innerHeight - 50;
}

