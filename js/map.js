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

    var LagMarker = new google.maps.Marker({
        position: Lagloc,
        map,
        icon: 'https://maps.google.com/mapfiles/kml/pal4/icon49.png',
        /*animation: google.maps.Animation.BOUNCE */
      });
    
    var Lagtext =
    '<p>Lagos, most populous city</p>';
    var Laginfo = new google.maps.InfoWindow({
    content: Lagtext,
    });
    
    LagMarker.addListener('mouseover', function () {
    Laginfo.open(map, this);
    });
    LagMarker.addListener('mouseout', function () {
    Laginfo.close();
    });
    
    google.maps.event.addListener(LagMarker, 'click', function () {
    map.setCenter(LagMarker.getPosition());
    map.setZoom(14);
    });

    var AbjMarker = new google.maps.Marker({
        position: Abjloc,
        map,
        icon: 'https://maps.google.com/mapfiles/kml/pal4/icon47.png',
        animation: google.maps.Animation.BOUNCE
      });

    var Abjtext =
    '<p>Abuja, capital</p>';
    var Abjinfo = new google.maps.InfoWindow({
    content: Abjtext,
    });
    
    AbjMarker.addListener('mouseover', function () {
    Abjinfo.open(map, this);
    });
    AbjMarker.addListener('mouseout', function () {
    Abjinfo.close();
    });
    
    google.maps.event.addListener(AbjMarker, 'click', function () {
    map.setCenter(AbjMarker.getPosition());
    map.setZoom(14);
    });
}
google.maps.event.addDomListener(window, 'load', initMap);