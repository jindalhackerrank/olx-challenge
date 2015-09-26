var olxListing = {};

olxListing.vm = {};

olxListing.vm.init = function() {
    this.categoryList = m.prop([
        "bikes", "cars"
    ]);
    this.brandList = m.prop({
        "cars": ["Maruti", "Hyundai", "Renault"],
        "bikes": ["Bajaj", "Hero Honda", "Honda"]
    })
    this.priceFilter = m.prop({
        "min-price": 0,
        "max-price": 0,
        "apply": false
    });
    this.selectedBrand = m.prop([]);
    this.showEntityDetail = m.prop(false);
    this.entityDetail = m.prop({});
    this.selectedCategory = m.prop("cars")
    this.bikes_brand = m.prop([
            "Hero Honda", "Bajaj",
        ]),
        this.showFilter = m.prop("");
    this.data = m.prop({
        "bikes": [{
            "id": "1",
            "brand": "Bajaj",
            "price": "55000",
            "seller": "Ashish Jindal",
            "contact": "9582223889",
            "location": {
                "lattitude": "28.555479",
                "longitude": "77.196668",
                "text": ""
            },
            "image": "images/bike-1.jpg"
        }, {
            "id": "1",
            "brand": "Hero Honda",
            "price": "55000",
            "seller": "Vaibhav Arora",
            "contact": "9582223889",
            "location": {
                "lattitude": "28.521835",
                "longitude": "77.167662",
                "text": ""
            },
            "image": "images/bike-2.jpg"
        }, {
            "id": "1",
            "brand": "Hero Honda",
            "price": "55000",
            "seller": "Aatif bandey",
            "contact": "9582223889",
            "location": {
                "lattitude": "28.523042",
                "longitude": "76.796873",
                "text": ""
            },
            "image": "images/bike-3.jpg"
        }, {
            "id": "1",
            "brand": "Honda",
            "price": "55000",
            "seller": "Ashish Jindal",
            "contact": "9582223889",
            "location": {
                "lattitude": "28.861552",
                "longitude": "76.817472",
                "text": ""
            },
            "image": "images/bike-4.jpg"
        }, {
            "id": "1",
            "brand": "Hero Honda",
            "price": "55000",
            "seller": "Ashish Jindal",
            "contact": "9582223889",
            "location": {
                "lattitude": "28.721944",
                "longitude": "77.085264",
                "text": ""
            },
            "image": "images/bike-5.jpg"
        }, {
            "id": "1",
            "brand": "Honda",
            "price": "55000",
            "seller": "Ashish Jindal",
            "contact": "9582223889",
            "location": {
                "lattitude": "28.721944",
                "longitude": "77.085264",
                "text": ""
            },
            "image": "images/bike-6.jpg"
        }, {
            "id": "1",
            "brand": "Bajaj",
            "price": "55000",
            "seller": "Ashish Jindal",
            "contact": "9582223889",
            "location": {
                "lattitude": "28.721944",
                "longitude": "77.085264",
                "text": ""
            },
            "image": "images/bike-7.jpg"
        }, {
            "id": "1",
            "brand": "Bajaj",
            "price": "55000",
            "seller": "Ashish Jindal",
            "contact": "9582223889",
            "location": {
                "lattitude": "28.721944",
                "longitude": "77.085264",
                "text": ""
            },
            "image": "images/bike-8.jpg"
        }, {
            "id": "1",
            "brand": "Hero Honda",
            "price": "55000",
            "seller": "Ashish Jindal",
            "contact": "9582223889",
            "location": {
                "lattitude": "28.721944",
                "longitude": "77.085264",
                "text": ""
            },
            "image": "images/bike-9.jpg"
        }],
        "cars": [{
            "id": "1",
            "brand": "Maruti",
            "price": "55000",
            "seller": "Ashish Jindal",
            "contact": "9582223889",
            "location": {
                "lattitude": "28.555479",
                "longitude": "77.196668",
                "text": ""
            },
            "image": "images/car-1.jpg"
        }, {
            "id": "1",
            "brand": "Hyundai",
            "price": "55000",
            "seller": "Vaibhav Arora",
            "contact": "9582223889",
            "location": {
                "lattitude": "28.521835",
                "longitude": "77.167662",
                "text": ""
            },
            "image": "images/car-2.jpg"
        }, {
            "id": "1",
            "brand": "Renault",
            "price": "55000",
            "seller": "Aatif bandey",
            "contact": "9582223889",
            "location": {
                "lattitude": "28.523042",
                "longitude": "76.796873",
                "text": ""
            },
            "image": "images/car-3.jpg"
        }, {
            "id": "1",
            "brand": "Maruti",
            "price": "55000",
            "seller": "Ashish Jindal",
            "contact": "9582223889",
            "location": {
                "lattitude": "28.861552",
                "longitude": "76.817472",
                "text": ""
            },
            "image": "images/car-4.jpg"
        }, {
            "id": "1",
            "brand": "Hyundai",
            "price": "55000",
            "seller": "Ashish Jindal",
            "contact": "9582223889",
            "location": {
                "lattitude": "28.721944",
                "longitude": "77.085264",
                "text": ""
            },
            "image": "images/car-5.jpg"
        }, {
            "id": "1",
            "brand": "Renault",
            "price": "55000",
            "seller": "Ashish Jindal",
            "contact": "9582223889",
            "location": {
                "lattitude": "28.808619",
                "longitude": "77.123716",
                "text": ""
            },
            "image": "images/car-6.jpg"
        }, {
            "id": "1",
            "brand": "Maruti",
            "price": "55000",
            "seller": "Ashish Jindal",
            "contact": "9582223889",
            "location": {
                "lattitude": "28.701468",
                "longitude": "77.226713",
                "text": ""
            },
            "image": "images/car-7.jpg"
        }]
    });

    this.mapInitialized = m.prop(false);
}


olxListing.controller = function() {
    olxListing.vm.init();
    olxListing.loadScript();
}

olxListing.scroll = function(val) {
    $('.entity-detail').animate({
        scrollTop: $(".entity-detail " + val).position().top
    }, 'slow');
}

olxListing.showDetail = function(val1, val2) {
    olxListing.vm.showEntityDetail(val1);
    olxListing.vm.entityDetail(val2);
    console.log(val2);

}

function setMarkers(map, locations) {
    //olxListing.vm.init();
    var marker, i;

    /*locations.map(function(value,index){
        latlngset = new google.maps.LatLng(value.location.lattitude, value.location.longitude);
        var marker = new google.maps.Marker({  
              map: map, title: value.brand , position: latlngset  
            });
            map.setCenter(marker.getPosition());
    });*/

    for (i = 0; i < locations.length; i++) {

        var loan = locations[i].price;
        //alert(locations[i].location.lattitude);
        var lat = locations[i].location.lattitude;
        var long = locations[i].location.longitude;
        //var lat = "27.613985";
        //var long = "77.238630";
        var add = locations[i].seller;

        latlngset = new google.maps.LatLng(lat, long);

        var marker = new google.maps.Marker({
            map: map,
            title: loan,
            position: latlngset
        });
        map.setCenter(marker.getPosition())


        var content = "Price: " + loan + '</h3>' + "Seller: " + add + '<img class="img-responsive" style="height:100px;" style="width:100px;" src="' + locations[i].image + '"/>'

        var infowindow = new google.maps.InfoWindow()

        google.maps.event.addListener(marker, 'click', (function(marker, content, infowindow) {
            //olxListing.showDetail(true,location);
            return function() {
                infowindow.setContent(content);
                infowindow.open(map, marker);

            };
        })(marker, content, infowindow));

    }
}





function initialize() {
    var myLatLng = {
        lat: 28.613499,
        lng: 77.237699
    };
    if (!olxListing.vm.mapInitialized()) {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: myLatLng
        });

        /*var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'Hello World!'
        });*/
        if(olxListing.vm.selectedCategory()=="cars")
            setMarkers(map, olxListing.vm.data()["cars"]);
        else
             setMarkers(map, olxListing.vm.data()["bikes"]);
        olxListing.vm.mapInitialized(true);
    }
}

olxListing.loadScript = function() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3&sensor=false&' +
        'callback=initialize';
    document.body.appendChild(script);
}



olxListing.view = function() {
    return m(".container-fluid", [
        m(".row.header", [
            m(".left-part.col-md-8.col-lg-8.col-sm-12.col-xs-12", [
                m(".big-logo.hidden-sm.hidden-xs", m("img[src=images/logo.png]")),
                m(".small-logo.hidden-lg.hidden-md.hidden-sm", [
                    m("i.fa.fa-bars.fa-lg"),
                    m("img.hidden-sm[src=images/small_logo.png]"),
                ]),
                m(".tablet-logo.hidden-lg.hidden-md.hidden-xs", [
                    m("i.fa.fa-bars.fa-lg"),
                    m("img[src=images/logo.png].hidden-xs"),
                ]),
               /* m("div.search", m("input[type=text]"))*/
            ])
        ]),
        m(".row.filter", [
            m(".left-part.col-md-8", [
                m(".set-height"),
                m(".filter-item", [m("i.fa.fa-filter.fa-lg"), m("span.filter-text", "Filter")]),
                m(".filter-item", {
                    onclick: function() {
                        if (olxListing.vm.showFilter() == "category")
                            olxListing.vm.showFilter("")
                        else
                            olxListing.vm.showFilter("category")
                    }
                }, [m("span.filter-text", "Category"), m("i.fa.fa-angle-down.fa-lg")]),
                /*m(".filter-item", {
                    onclick: function() {
                        if (olxListing.vm.showFilter() == "price")
                            olxListing.vm.showFilter("")
                        else
                            olxListing.vm.showFilter("price")
                    }
                }, [m("span.filter-text", "Price"), m("i.fa.fa-angle-down.fa-lg")]),*/
                m(".filter-item", {
                    onclick: function() {
                        if (olxListing.vm.showFilter() == "brand")
                            olxListing.vm.showFilter("")
                        else
                            olxListing.vm.showFilter("brand")
                    }
                }, [m("span.filter-text", "Brand"), m("i.fa.fa-angle-down.fa-lg")]),
            ]),
            /*m(".right-part.col-md-4", [
                m(".shortlist", [
                    m(".set-height"),
                    m("i.fa.fa-heart-o.fa-lg"), m("span.shortlist-text", "Shortlist")
                ])
            ])*/
        ]),
        m(".category-filter", {
            class: olxListing.vm.showFilter() == "category" ? "" : "hidden"
        }, (function() {
            var l = [];
            olxListing.vm.categoryList().map(function(value, index) {
                l.push(m(".category", [m("input[type=radio][name=category][id=category" + index + "][value=" + value + "]", {
                    onclick: function() {
                        olxListing.vm.selectedCategory(value);
                    },
                    onchange: function() {
                        olxListing.vm.selectedBrand([]);
                        olxListing.vm.mapInitialized(false);
                        initialize();
                    },
                    checked: olxListing.vm.selectedCategory() == value
                }), m("label[for=category" + index + "]", value)]));
            });
            return l;
        })()),
        m(".price-filter", {
            class: olxListing.vm.showFilter() == "price" ? "" : "hidden"
        }, [
            m(".min-price", [m("span", "Min"), m("input[type=text]", {
                oninput: m.withAttr("value", function(val) {
                    olxListing.vm.priceFilter()["min-price"] = val;
                }),
                value: 0
            })]),
            m(".max-price", [m("span", "Max"), m("input[type=text]", {
                oninput: m.withAttr("value", function(val) {
                    olxListing.vm.priceFilter()["max-price"] = val;
                }),
                value: 100000
            })]),
            m("button.btn.btn-primary", {
                onclick: function() {
                    olxListing.vm.priceFilter()["apply"] = !olxListing.vm.priceFilter()["apply"];
                }
            }, (function() {
                if (!olxListing.vm.priceFilter()["apply"])
                    return "Apply";
                else
                    return "Remove";
            })())
        ]),
        m(".brand-filter", {
            class: olxListing.vm.showFilter() == "brand" ? "" : "hidden"
        }, (function() {
            var l = [];
            olxListing.vm.brandList()[olxListing.vm.selectedCategory()].map(function(value, index) {
                l.push(m(".brand", [m("input[type=checkbox][name=brand][id=brand" + index + "][value=" + value + "]", {
                    onclick: m.withAttr("checked", function(val) {
                        if (val == true) {
                            olxListing.vm.selectedBrand().push(value);
                            console.log(olxListing.vm.selectedBrand());
                        } else {
                            olxListing.vm.selectedBrand().splice(olxListing.vm.selectedBrand().indexOf(value), 1);
                        }
                    }),
                    checked: olxListing.vm.selectedBrand().indexOf(value) != -1
                }), m("label[for=brand" + index + "]", value)]));
            })
            return l;
        })()),
        m(".row.content", [
            m("#map", {
                //config:olxListing.loadScript
            }, "map"),
            m("ul.list", [
                (function() {
                    var list = [];
                    olxListing.vm.data()[olxListing.vm.selectedCategory()].map(function(value, index) {
                        if (olxListing.vm.selectedBrand().length == 0)
                            list.push(m("li", {
                                onclick: olxListing.showDetail.bind('', true, value)
                            }, [
                                m("img.img-responsive[src=" + value.image + "]"),
                                m(".description", [
                                    m(".entity-name", value.seller),
                                    m(".speciality", value.brand),
                                    m(".service", value.contact),
                                    m(".fees", [
                                        m("i.fa-inr.fa.fa-lg"),
                                        m("span.fees-text", value.price)
                                    ])
                                ]),
                                m("i.fav-ico.fa.fa-heart-o.fa-lg")
                            ]))
                        else if (olxListing.vm.selectedBrand().indexOf(value.brand) != -1)
                            list.push(m("li", {
                                onclick: olxListing.showDetail.bind('', true, value)
                            }, [
                                m("img.img-responsive[src=" + value.image + "]"),
                                m(".description", [
                                    m(".entity-name", value.seller),
                                    m(".speciality", value.brand),
                                    m(".service", value.contact),
                                    m(".fees", [
                                        m("i.fa-inr.fa.fa-lg"),
                                        m("span.fees-text", value.price)
                                    ])
                                ]),
                                m("i.fav-ico.fa.fa-heart-o.fa-lg")
                            ]))
                    });
                    return list;
                })(),
            ]), (function() {
                if (olxListing.vm.showEntityDetail())
                    return m(".entity-detail", [
                        m(".entity-images", m("img.img-responsive[src=" + olxListing.vm.entityDetail()["image"] + "]")),
                        m(".entity-content", [
                            m("h3", "Seller : " + olxListing.vm.entityDetail().seller),
                            m("h4", "Price : " + olxListing.vm.entityDetail().price),
                            m("h5", "Contact : " + olxListing.vm.entityDetail().contact)
                        ]),
                        m("span.close", {
                            onclick: olxListing.showDetail.bind('', false, {})
                        }, "X")
                    ]);
            })(),

        ]),
        m(".row.footer", "footer")
    ]);
}
