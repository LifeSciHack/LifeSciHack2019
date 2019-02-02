$(document).ready(function() {
  mapType = "";
  $(".reset").hide();

  key = "AIzaSyD70EcFlRlgIbc1ARNvns5CszqjaUyQzVI";
  // initialize the map
  var mymap = L.map("map").setView([30.2672, -97.7431], 12);
  function getFoundMapResults() {
    $.get("/api/pets", function(data) {
      for (var i = 0; i < data.length; i++) {
        if (data[i].found_location) {
          let mapPoint = data[i].found_location.split(",");
          let mapPointParsed = [
            parseFloat(mapPoint[0]),
            parseFloat(mapPoint[1])
          ];
            marker = new L.marker(mapPointParsed)
            .bindPopup(String(data[i].name));
            markers.addLayer(marker);
          
        }
      }
    });
  }
 
  // load a tile layer
  L.tileLayer(
    "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiamN0b2JleSIsImEiOiJjam9kNGs3MzMwczI2M3BwYjVtaXRpZ2l1In0.sxKzZ76nyy_PN8ETEnoKKA",
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: "mapbox.streets",
      accessToken:
        "pk.eyJ1IjoiamN0b2JleSIsImEiOiJjam9kNGs3MzMwczI2M3BwYjVtaXRpZ2l1In0.sxKzZ76nyy_PN8ETEnoKKA"
    }
  ).addTo(mymap);
  var markers = new L.FeatureGroup();
  function clearAllMarkers() {
    markers.clearLayers();
  }
 
  
  mymap.addLayer(markers);

  function onMapClick(e) {
    marker.openPopup();
  }
 
  mymap.on("click", onMapClick);
});
