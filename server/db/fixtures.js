if (Listings.find().count() === 0) {

  Listings.insert({
    beds: 2,
    baths: 1,
    sqm: 20,
    fullAddress: "3 Xixin St, Xi'an, Shaanxi, China",
    address1: "3 Xixin St",
    address2: "",
    city: "Xi'an",
    province: "Shaanxi",
    postcode: "",
    country: "China",
    price: 50000,
    title: "Amazing House",
    desc: "Nice and bright!",
    agentId: "LHrhapueRmyJkajZ2",
    lat: "",
    lng: ""
  });

  Listings.insert({
    beds: 3,
    baths: 2,
    sqm: 75,
    fullAddress: "206号-222 Dong Mu Tou Shi, Beilin Qu, Xi'an, Shaanxi, China",
    address1: "206号-222 Dong Mu Tou Shi",
    address2: "Beilin Qu",
    city: "Xi'an",
    province: "Shaanxi",
    postcode: "",
    country: "China",
    price: 75000,
    title: "Amazing House",
    desc: "Nice and bright!",
    agentId: "LHrhapueRmyJkajZ2",
    lat: "",
    lng: ""
  });

  Listings.insert({
    beds: 4,
    baths: 3,
    sqm: 100,
    fullAddress: "Floor 7, Block A, Bei Da Jie, Hongfu Jiahui Square, Xi'an, Shaanxi, China",
    address1: "Floor 7, Block A, Bei Da Jie",
    address2: "Hongfu Jiahui Square",
    city: "Xi'an",
    province: "Shaanxi",
    postcode: "",
    country: "China",
    price: 20000000,
    title: "Zhonglou Hotel",
    desc: "Lorem ipsum",
    agentId: "LHrhapueRmyJkajZ2",
    lat: "",
    lng: ""
  });

};

if ( Meteor.users.find().count() === 0 ) {
    Accounts.createUser({
        _id: "LHrhapueRmyJkajZ2",
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

