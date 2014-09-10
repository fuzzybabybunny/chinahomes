// removes invalid values like NaN, "", undefined, etc
var sterilizeSearchParams = function(searchParams){
  var sterilizedSearchParams = {};
  for (var prop in searchParams) {
    if (searchParams.hasOwnProperty(prop) && !!searchParams[prop]) {
      sterilizedSearchParams[prop] = searchParams[prop];
    }
  };
  return sterilizedSearchParams;
};

var searchListings = function(sterilizedSearchParams){
  return Listings.find(sterilizedSearchParams).fetch();
};

var initializeMapSearchParams = function(searchResults){

  var listings = searchResults;

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
          // Storing the content of the infoWindow into the marker itself
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
};



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
  'click .reactive-table tr': function (event) {
    // set the blog post we'll display details and news for
    var listingId = this._id;
    console.log("clicked!");
    console.log(listingId);
    var myListing = Listings.findOne(listingId);
    console.log(myListing);
    Session.set('myListing', myListing);
    $('#show-listing-modal').modal('show');
  },

  'submit form#search-listings-form': function (e) {
    // set the blog post we'll display details and news for
    e.preventDefault();
    console.log("clicked!");
    var searchParams = {
      city: $(e.target).find('[name=city]').val(),
      bedrooms: parseInt( $(e.target).find('[name=bedrooms]').val() ),
      bathrooms: parseInt( $(e.target).find('[name=bathrooms]').val() ),
      interiorSize: parseInt( $(e.target).find('[name=interiorSize]').val() ),
      exteriorSize: parseInt( $(e.target).find('[name=exteriorSize]').val() ),
      price: parseInt( $(e.target).find('[name=price]').val() * 100 )
    };

    console.log(searchParams);

    var searchResults = searchListings( sterilizeSearchParams(searchParams) );

    console.log(searchResults);

    initializeMapSearchParams(searchResults);

  },

});

Template.Index.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
  'Listings': function(){
    if (!!Meteor.user()) {
      return Listings.find({agentId: Meteor.user()._id}); 
    };
  },

  'settings': function () {
    return {
      rowsPerPage: 10,
      showFilter: true,
      fields: [
        { key: 'fullAddress', label: 'Address' },
        { key: 'price', label: 'Price' },
        { key: 'bedrooms', label: 'Beds' },
        { key: 'bathrooms', label: 'Baths' }
      ],
      useFontAwesome: true
    };
  }

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
          // Storing the content of the infoWindow into the marker itself
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

};

Template.Index.destroyed = function () {
};

