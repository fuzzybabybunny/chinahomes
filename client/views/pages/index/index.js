
/*****************************************************************************/
/* Index: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Index.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.Index.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* Index: Lifecycle Hooks */
/*****************************************************************************/
Template.Index.created = function () {
};

Template.Index.rendered = function () {

  var handleGeocodeResult;

  listings = Listings.find().fetch();
  // console.log("listings:");
  // console.log(listings);

  geocodeAddress = function(streetAddress) {

    new Promise(function(resolve, reject) {

      // async call to Google's Geocoder - takes street address
      // and returns GPS coordinates

      handleGeocodeResult = function(result) {
        // for illustration only... this function should actually
        // *BE* the Promise resolve handler.
        console.log("This is the gpsPosition");
        console.log(result); // this console logs the result just fine
        myResult = result;
      };

      var geocoder = new google.maps.Geocoder();
      geocoder.geocode({'address': streetAddress}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          if (results[0]) {
            resolve({B: results[0].geometry.location['B'],
                     k: results[0].geometry.location['k']});
          } else {
            reject(Error("It broke"));
          }
        } else {
          reject(Error("It broke"));
        }
      });
    })
    .then(
      // this is the Promise resolve handler
      function(result) {
        handleGeocodeResult(result);
      },
      // this is the Promise reject handler
      function(err) {
        console.log(err); // Error: "It broke"
      });
  };

  var initialize = function() {
    var mapOptions = {
      zoom: 12,
      center: new google.maps.LatLng(34.2593804, 108.9672088)
    };
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  };

  initialize();

  var createInfoWindow = function(marker, i) {
    // console.log(i);
    // console.log("listings[i]");
    // console.log(listings[i]);

    var infowindow = new google.maps.InfoWindow({
      content: listings[i]["title"]
    });

    google.maps.event.addListener(marker, 'mouseover', function() {
      infowindow.open(marker.get('map'), marker);
      // console.log(marker);
      // console.log(infowindow);
    });
  };

  // for (var i = 0; i < listings.length; i++){
  //   var address;
  //   var fullAddress = listings[i].fullAddress;
  //   console.log("fullAddress:");
  //   console.log(fullAddress);
  //   var location = geocodeAddress(fullAddress);
  //   console.log("location right before marker:");
  //   console.log(location);
  //   var marker = new google.maps.Marker({
  //       map: map,
  //       title: address,
  //       position: location
  //   });

  //   // console.log("marker");
  //   // console.log(marker);
  //   createInfoWindow(marker, i);

  };

};

Template.Index.destroyed = function () {
};


    // function initialize() {

    //   var arrayOfLocations = //an array of lots of coordinates and pin titles and descriptions;
    //   var mapOptions = {
    //     zoom: 4,
    //     center: new google.maps.LatLng(100, 100)
    //   };
    
    //   var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    //   // loops through each location in arrayOfLocations 
    //   for (var i = 0; i < arrayOfLocations.length; i++){
    //     // gets the geocoded location of arrayOfLocations[i]
    //     var location = google.maps.LatLng(arrayOfLocations[i].lat, arrayOfLocations[i].lng)

    //     // should create a UNIQUE infowindow variable name for that pin.
    //     var infowindow = new google.maps.InfoWindow({
    //         content: arrayOfLocations[i].info
    //     });
      
    //     // should create a UNIQUE marker variable name for that pin.
    //     var marker = new google.maps.Marker({
    //       position: location,
    //       map: map,
    //       title: arrayOfLocations[i].title
    //     });

    //     // should add a UNIQUE listener for that particular marker.
    //     google.maps.event.addListener(marker, 'click', function() {
    //       infowindow.open(map,marker);
    //     });
    //   };

    // };