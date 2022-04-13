function initMap() {
    var Nloc = new google.maps.LatLng(9.081999, 8.675277);
    var options = {
      center: Nloc,
      zoom: 7,
      zoomControl: true,
      gestureHandling: "greedy",
      scaleControl: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
  
    }

    var map = new google.maps.Map(document.getElementById("map"), options);
    const trafficLayer = new google.maps.TrafficLayer();
    trafficLayer.setMap(map);

    var Lagloc = new google.maps.LatLng(6.524379, 3.379206);
    var Abjloc = new google.maps.LatLng(9.076479, 7.398574);
    var Ibloc = new google.maps.LatLng(7.377536, 3,94704);

    
}
google.maps.event.addDomListener(window, 'load', initMap);