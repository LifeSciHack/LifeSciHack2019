$(document).ready(function() {
  //Generate Map
  var kittayIcon = L.icon({
    iconUrl: "./assets/img/kittay.png", //"public/assets/img/kittay.png",

    iconSize: [25, 36], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [25, 36], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62], // the same for the shadow
    popupAnchor: [-10, -35] // point from which the popup should open relative to the iconAnchor
  });
  var doggyIcon = L.icon({
    iconUrl: "./assets/img/dog.png",

    iconSize: [25, 36], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [25, 36], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62], // the same for the shadow
    popupAnchor: [-10, -35] // point from which the popup should open relative to the iconAnchor
  });
  key = "AIzaSyD70EcFlRlgIbc1ARNvns5CszqjaUyQzVI";
  // initialize the map
  var mymap = L.map("map").setView([30.2672, -97.7431], 13);

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
  var Address = [];
  var clickedPoint = "";
  var clickedPointString = "";
  var clickedPointResponse = "";
  var clickedIcon = "";
  $(".dog-icon").on("click", function(event) {
    clickedIcon = "Dog";
  });
  $(".cat-icon").on("click", function(event) {
    clickedIcon = "Cat";
  });
  function onMapClick(e) {
    if (Address.length > 0) {
      mymap.removeLayer(Address[0]);
      Address = [];
    }
    lat = e.latlng.lat;
    lng = e.latlng.lng;
    clickedPoint = [lat, lng];

    clickedPointString = clickedPoint.toString();
    //AJAX request to convert lat/lng to address for tooltip
    const searchAddress = address => {
      let geocodeRequest = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${clickedPointString}&key=${key}`;
      $.get(geocodeRequest).then(response => {
        clickedPointResponse = response.results[0].formatted_address;
        if (clickedIcon === "") {
          alert(
            "Please select the type of found pet you are reporting using the dog/cat icons above."
          );
        }
        if (clickedIcon === "Dog") {
          clickedPointMarker = L.marker(clickedPoint, { icon: doggyIcon });
        } else if (clickedIcon === "Cat") {
          clickedPointMarker = L.marker(clickedPoint, { icon: kittayIcon });
        }

        clickedPointMarker
          .addTo(mymap)
          .bindPopup(`You clicked on: <br> ${clickedPointResponse}`)
          .openPopup();
        Address.push(clickedPointMarker);
        console.log(Address);
      });
    };
    searchAddress();
  }
  mymap.on("click", onMapClick);

  $(".submit").on("click", function(event) {
    event.preventDefault();
    if (
      $(".pet-name").val() !== "" &&
      (clickedIcon === "Dog" || clickedIcon === "Cat") &&
      clickedPointResponse !== ""
    ) {
      var foundPet = {
        name: $(".pet-name")
          .val()
          .trim(),
        found_location: clickedPointString,
        at_AAC: "No",
        date: $("#date-found")
          .val()
          .trim(),
        looks_like: $(".pet-type")
          .val()
          .trim(),
        type: clickedIcon,
        color: $(".color")
          .val()
          .trim(),
        sex: $(".sex")
          .val()
          .trim(),
        age: $(".age")
          .val()
          .trim(),
        image_link: $("#photo")
          .val()
          .trim(),
        Address: clickedPointResponse
      };

      $.post("/api/pets", foundPet, function(data) {
        $(".foundName").text(data.name);
        $("#img").attr("src", data.image_link);
        $(".date_found").text(data.date);
        $(".locationFound").text(data.Address);
        $("#results-modal").modal("toggle");
      });
    } else {
      console.log("empty fields");
      if ($(".pet-name").val() == "") {
        alert(
          " Please enter the pet name. You may not know the pet name, in which case enter 'Unknown'. "
        );
      } else if (clickedIcon == "") {
        alert(" Please select the pet type");
      } else {
        alert("Please enter location");
      }
    }
  });
});
