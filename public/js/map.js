function initMap() {

    var map = new google.maps.Map(document.getElementById('map-section'), {
        center: {
            lat: 41.878910,
            lng: -87.635490
        },
        zoom: 12
    });

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(41.878910, -87.635490),
        title: "Isaac Medina",
        map: map

    });
}
