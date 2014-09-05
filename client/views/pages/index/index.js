
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

  var listings = Listings.find().fetch();

  var initialize = function() {

    var mapOptions = {
      zoom: 12,
      center: new google.maps.LatLng(34.2593804, 108.9672088)
    };

    var infoWindow = new google.maps.InfoWindow();

    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    for(var i = 0; i < listings.length; i++){

      var lat = listings[i].geocode.lat;
      var lng = listings[i].geocode.lng;
      var listingLatlng = new google.maps.LatLng(lat, lng);
      var marker = new google.maps.Marker({
          position: listingLatlng,
          animation: google.maps.Animation.DROP,
          map: map,
          title: listings[i].title,
          content: listings[i].description
      });
      google.maps.event.addListener(marker, 'click', function(){
        // "this" is the particular marker that was clicked
        // console.log("this");
        // console.log(this);        
        infoWindow.setContent(this.content);
        infoWindow.open(map, this);
      });
      
    };

  };

  initialize();

  // var createInfoWindow = function(marker, i) {
  //   // console.log(i);
  //   // console.log("listings[i]");
  //   // console.log(listings[i]);

  //   var infowindow = new google.maps.InfoWindow({
  //     content: listings[i]["title"]
  //   });

  //   google.maps.event.addListener(marker, 'mouseover', function() {
  //     infowindow.open(marker.get('map'), marker);
  //     // console.log(marker);
  //     // console.log(infowindow);
  //   });
  // };




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

  // };

};

Template.Index.destroyed = function () {
};

// function initialize() {
//   var myLatlng = new google.maps.LatLng(-25.363882,131.044922);
//   var mapOptions = {
//     zoom: 4,
//     center: myLatlng
//   }
//   var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

//   var lat = listings[i].geocode.lat;
//   var lng = listings[i].geocode.lng;
//   var listingLatlng = new google.maps.LatLng(lat, lng);
//   var marker = new google.maps.Marker({
//       position: listingLatlng,
//       map: map,
//       title: listings[i].title
//   });
// }