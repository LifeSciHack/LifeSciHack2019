// import { debug } from "util";

$(document).ready(function() {
    let longLat;
    const searchTerms=['body aches','chills','congested','cough','diarrhea','dry cough','fatigued','fever','feverish','flu','head hurts','headache','hurts','muscle ache','runny nose','sick','sneezing','sore throat','stuffy nose','the cold','virus','vomiting','weak']
const getGeolocation = Ip => {
    let IpGeocodeRequest = `http://api.ipstack.com/65.205.72.122?access_key=dff1b5fbf5a0ff3e24b3f3d24e8b0cd8`;
    $.get(IpGeocodeRequest, data=>{
       
      getLatitude=data.latitude;
      getLongitude=data.longitude;
      longLat=[getLatitude, getLongitude]
    });
    
}

getGeolocation();

$(".fa-search").on("click", function(event) {
  event.preventDefault();
  if (
    $("#form-search").val() !== ""
  ) {
    var searchQuery = {
      searchTerm: $("#form-search")
        .val()
        .trim(),
       geolocation: longLat

      
    };
   
    var splitTerms = searchQuery.searchTerm.toLowerCase().split(" ");
    for( var i =0; i< splitTerms.length; i++){
      
        if( searchTerms.indexOf(splitTerms[i]) != -1 ){
          
            $.post("/api/search", searchQuery, function(data) {
              
                console.log("Flu symptom search captured")
              });
        }
    }
    
  }
//     console.log("empty fields");
//     if ($(".pet-name").val() == "") {
//       alert(
//         " Please enter the pet name. You may not know the pet name, in which case enter 'Unknown'. "
//       );
//     } else if (clickedIcon == "") {
//       alert(" Please select the pet type");
//     } else {
//       alert("Please enter location");
//     }
//   }
});
})

