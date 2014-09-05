if ( Meteor.users.find().count() === 0 ) {
    var userId = Accounts.createUser({
        username: 'admin',
        email: 'victor@victorlinphoto.com',
        password: '123456',
        profile: {
            first_name: 'Victor',
            last_name: 'Lin',
            company: 'VLP',
        }
    });
};

if (Listings.find().count() === 0) {

  Listings.insert({
    address1: "万千百货3层",
    address2: "Jiefang Rd",
    city: "Xi'an",
    province: "Shaanxi",
    bedrooms: 4,
    bathrooms: 1,
    interiorSize: 32,
    exteriorSize: 12,
    price: 2222200,
    title: "sdcsdc",
    description: "d dfd",
    fullAddress: "万千百货3层, Jiefang Rd, Xi'an, Shaanxi, China",
    geocode: {
        lng: 108.94017499999995,
        lat: 34.341568
    },
    agentId: userId,
    submitted: 1409813560210,
    _id: "XeNM9eKLvkSrdPsHW"
  });

  Listings.insert({
    address1: "5 Anban St",
    address2: "Xincheng",
    city: "Xi'an",
    province: "Shaanxi",
    bedrooms: 5,
    bathrooms: 4,
    interiorSize: 200,
    exteriorSize: 300,
    price: 20000000,
    title: "Rose Restaurant",
    description: "Sed aliquam ultrices mauris. Quisque rutrum. Nunc interdum lacus sit amet orci. Vestibulum suscipit nulla quis orci. Sed lectus.\n\nCurabitur nisi. Ut varius tincidunt libero. Aenean viverra rhoncus pede. Phasellus ullamcorper ipsum rutrum nunc. Donec posuere vulputate arcu.\n\nSed hendrerit. Praesent egestas neque eu enim. Nunc nonummy metus. Maecenas egestas arcu quis ligula mattis placerat. Donec mollis hendrerit risus.",
    fullAddress: "5 Anban St, Xincheng, Xi'an, Shaanxi, China",
    geocode: {
        lng: 108.95036249999998,
        lat: 34.2613594
    },
    agentId: userId,
    submitted: 1409894376164,
    _id: "do5PaFyWrjbb7BA5a"
  });

  Listings.insert({
    address1: "1 West St",
    address2: "Lianhu",
    city: "Xi'an",
    province: "Shaanxi",
    bedrooms: 3,
    bathrooms: 2,
    interiorSize: 300,
    exteriorSize: 400,
    price: 500000000,
    title: "Starbucks",
    description: "Cras dapibus. Phasellus consectetuer vestibulum elit. Nam commodo suscipit quam. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Cras dapibus.\n\nNunc nonummy metus. Pellentesque auctor neque nec urna. Sed a libero. Maecenas egestas arcu quis ligula mattis placerat. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus.\n\nNam eget dui. Maecenas nec odio et ante tincidunt tempus. Curabitur at lacus ac velit ornare lobortis. Curabitur blandit mollis lacus. Nullam tincidunt adipiscing enim.",
    fullAddress: "1 West St, Lianhu, Xi'an, Shaanxi, China",
    geocode: {
        lng: 108.9275513,
        lat: 34.2714107
    },
    agentId: userId,
    submitted: 1409894491550,
    _id: "d2XdJcKooPLgKzgvY"
  });

  Listings.insert({
    address1: "110 South St",
    address2: "Beilin",
    city: "Xi'an",
    province: "Shaanxi",
    bedrooms: 4,
    bathrooms: 2,
    interiorSize: 100,
    exteriorSize: 200,
    price: 8000000000,
    title: "Bell Tower Hotel",
    description: "Nunc nonummy metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purus. Etiam sit amet orci eget eros faucibus tincidunt. Cras non dolor. Etiam feugiat lorem non metus.\n\nAliquam eu nunc. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Proin pretium, leo ac pellentesque mollis, felis nunc ultrices eros, sed gravida augue augue mollis justo. Praesent congue erat at massa. Proin faucibus arcu quis ante.\n\nSed cursus turpis vitae tortor. Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum. Vestibulum suscipit nulla quis orci. Aenean vulputate eleifend tellus.",
    fullAddress: "110 South St, Beilin, Xi'an, Shaanxi, China",
    geocode: {
        lng: 108.97538800000007,
        lat: 34.254372
    },
    agentId: userId,
    submitted: 1409894554488,
    _id: "ciMythDLySs5TrHpX"
  });

};

