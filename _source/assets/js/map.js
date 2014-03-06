function initialize() {
    var myLatlng = new google.maps.LatLng(50.450070, 30.523268);
    var mapOptions = {
        center: myLatlng,
        zoom: 4
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title:"Ukraine\nKiev"
    });
    marker.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);
