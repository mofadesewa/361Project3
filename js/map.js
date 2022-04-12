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
}