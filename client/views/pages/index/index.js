
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

  listings = Listings.find().fetch();
  // console.log("listings:");
  // console.log(listings);

var geocoder;
// function initialize() {
//   geocoder = new google.maps.Geocoder();
//   var latlng = new google.maps.LatLng(40.730885,-73.997383);
//   codeLatLng(function(addr){
//     alert(addr);
//   });
// }

// function codeLatLng(callback) {
//   var latlng = new google.maps.LatLng(40.730885,-73.997383);
//   if (geocoder) {
//     geocoder.geocode({'latLng': latlng}, function(results, status) {
//       if (status == google.maps.GeocoderStatus.OK) {
//         if (results[1]) {
//           callback(results[1].formatted_address);
//         } else {
//           alert("No results found");
//         }
//       } else {
//         alert("Geocoder failed due to: " + status);
//       }
//     });
//   }
// }


  codeAddress = function(address, callback) {
    var gpsPosition = {};
    if (geocoder) {
      geocoder.geocode({'address': address}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          if (results[0]) {
            console.log("got results!");
            var lat = results[0].geometry.location['B'];
            var lng = results[0].geometry.location['k'];
            callback(lat, lng);
          } else {
            alert("No results found");
          }
        } else {
          alert("Geocoder failed due to: " + status);
        }
      });
    }
  };

  createGPSPosition = function(lat, lng){
    console.log("createGPSPosition called with lat and lng:");
    console.log(lat);
    console.log(lng);
    var gpsPosition = {};
    gpsPosition.B = lat;
    gpsPosition.k = lng;
    // console.log("gpsPosition:");
    // console.log(gpsPosition);
    return gpsPosition;
  };

  // codeAddress = function(address, ) {
  //   var gpsPosition = {};
  //   geocoder.geocode( { 'address': address}, function(results, status) {
  //     if (status == google.maps.GeocoderStatus.OK) {
  //       if (results[0]) {
  //         gpsPosition.B = results[0].geometry.location['B'];
  //         gpsPosition.k = results[0].geometry.location['k'];
  //         return gpsPosition;
  //       } else {
  //         alert("No results found");
  //       }
  //       // gpsPosition.B = results[0].geometry.location['B'];
  //       // gpsPosition.k = results[0].geometry.location['k'];
  //       // console.log(gpsPosition.B);
  //       // console.log(gpsPosition.k);
  //       // console.log(gpsPosition);
  //       // return gpsPosition;
  //     } else {
  //       alert('Geocode was not successful for the following reason: ' + status);
  //     }
  //   });
  // };

  var initialize = function() {
    geocoder = new google.maps.Geocoder();
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

  for (var i = 0; i < listings.length; i++){
    var address;
    var fullAddress = listings[i].fullAddress;
    console.log("fullAddress:");
    console.log(fullAddress);
    var location = codeAddress( fullAddress, createGPSPosition );
    console.log("location right before marker:");
    console.log(location);
    var marker = new google.maps.Marker({
        map: map,
        title: address,
        position: location
    });

    // console.log("marker");
    // console.log(marker);
    createInfoWindow(marker, i);

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