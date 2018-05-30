function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(51.1, 17),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}