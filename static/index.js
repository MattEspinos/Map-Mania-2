var map;
var score = 0;

function initMap() {
    map = new google.maps.Map(document.getElementById("myMapID"), {
      center: { lat: 41.878, lng: 10 },
      zoom: 3,
    });

    google.maps.event.addListener(map, 'idle', function() {
        updateMapEvent()
    });
  }

  function initApplication(){
    console.log('Map Mania Start');
    openModal();
}
function cheat(){
  score = 10;
  updateMapEvent();
}

function openModal(){
  console.log('Map Mania Modal');
    // Get the modal
  var modal = document.getElementById("myModal");

  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  btn.onclick = function() {
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    closeModals(modal);
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      closeModals(modal);
    }
  }
}

function openCheatModal(){
  console.log('Map Mania Cheat Modal');
    // Get the modal
  var modal2 = document.getElementById("cheatModal");

  // Get the button that opens the modal
  var btn2 = document.getElementById("cheatButton");

  // Get the <span> element that closes the modal
  var span2 = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  btn2.onclick = function() {
    modal2.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span2.onclick = function() {
    closeModals(modal2);
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal2) {
      closeModals(modal2);
    }
  }
}

function closeModals(modal){
  modal.style.display = "none";
}

   async function updateMapEvent() {
    console.log('function UpdateMapEvent() from google-maps')
    var zoomLevel = map.getZoom()
    var inBounds = false;

    const response = await fetch("/favoriteplaces")
    const data = await response.json()

    //Chicago
    var loc = data.loc1;
    var temp = loc.split(",");
    var chicago = {lat: parseFloat(temp[0]), lng: parseFloat(temp[1])};
    //Toronto
    loc = data.loc2;
    temp = loc.split(",");
    var toronto = {lat: parseFloat(temp[0]), lng: parseFloat(temp[1])};
    //Tokyo
    loc = data.loc3;
    temp = loc.split(",");
    var tokyo = {lat: parseFloat(temp[0]), lng: parseFloat(temp[1])};
    //Tampa
    loc = data.loc4;
    temp = loc.split(",");
    var tampa = {lat: parseFloat(temp[0]), lng: parseFloat(temp[1])};
    //Las Vegas
    loc = data.loc5;
    temp = loc.split(",");
    var vegas = {lat: parseFloat(temp[0]), lng: parseFloat(temp[1])};
    //Alaska
    loc = data.loc6;
    temp = loc.split(",");
    var alaska = {lat: parseFloat(temp[0]), lng: parseFloat(temp[1])};
    //Berlin Germany
    loc = data.loc7;
    temp = loc.split(",");
    var berlin = {lat: parseFloat(temp[0]), lng: parseFloat(temp[1])};
    //Nashville
    loc = data.loc8;
    temp = loc.split(",");
    var nashville = {lat: parseFloat(temp[0]), lng: parseFloat(temp[1])};
    //Dallas
    loc = data.loc9;
    temp = loc.split(",");
    var dallas = {lat: parseFloat(temp[0]), lng: parseFloat(temp[1])};
    //Seoul South Korea
    loc = data.loc10;
    temp = loc.split(",");
    var korea = {lat: parseFloat(temp[0]), lng: parseFloat(temp[1])};
    

  if(score === 0){
    //Hint
    if(map.getBounds().contains(chicago)){
      document.getElementById("hint").innerHTML = "Hint: Place is in bounds";
    }
    else{
      document.getElementById("hint").innerHTML = "Hint: Place is not in bounds. Try looking around more.";
    }
    if(map.getBounds().contains(chicago) && zoomLevel >=10) {
      inBounds = true;
      var marker1 = new google.maps.Marker({position:chicago, map});
      marker1.setIcon('https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png');

      var infoWindow = new google.maps.InfoWindow({content: 'Location 1: Chicago, Illinois'});
      marker1.addListener('click', function() {
          infoWindow.open(map, marker1);
      });

      alert("You Found Location 1! Close this box to continue.");
      score++;
    }
  }
  
  if(score === 1){
    //Hint
    if(map.getBounds().contains(toronto)){
      document.getElementById("hint").innerHTML = "Hint: Place is in bounds";
    }
    else{
      document.getElementById("hint").innerHTML = "Hint: Place is not in bounds. Try looking around more.";
    }

    if(map.getBounds().contains(toronto) && zoomLevel >=10) {
      inBounds = true;
      var marker1 = new google.maps.Marker({position:toronto, map});
      marker1.setIcon('https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png');
  
      var infoWindow = new google.maps.InfoWindow({content: 'Location 2: Toronto, Ontario'});
      marker1.addListener('click', function() {
          infoWindow.open(map, marker1);
      });

      alert("You Found Location 2! Close this box to continue.");
      score++;
    }
  }
  
  if(score === 2){
    //Hint
    if(map.getBounds().contains(tokyo)){
      document.getElementById("hint").innerHTML = "Hint: Place is in bounds";
    }
    else{
      document.getElementById("hint").innerHTML = "Hint: Place is not in bounds. Try looking around more.";
    }

    if(map.getBounds().contains(tokyo) && zoomLevel >=10) {
      inBounds = true;
      var marker1 = new google.maps.Marker({position:tokyo, map});
      marker1.setIcon('https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png');
  
      var infoWindow = new google.maps.InfoWindow({content: 'Location 3: Tokyo, Japan'});
      marker1.addListener('click', function() {
          infoWindow.open(map, marker1);
      });

      alert("You Found Location 3! Close this box to continue.");
      score++;
    }
  }

  if(score === 3){
    //Hint
    if(map.getBounds().contains(tampa)){
      document.getElementById("hint").innerHTML = "Hint: Place is in bounds";
    }
    else{
      document.getElementById("hint").innerHTML = "Hint: Place is not in bounds. Try looking around more.";
    }

    if(map.getBounds().contains(tampa) && zoomLevel >=10) {
      inBounds = true;
      var marker1 = new google.maps.Marker({position:tampa, map});
      marker1.setIcon('https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png');
  
      var infoWindow = new google.maps.InfoWindow({content: 'Location 4: Tampa, Florida'});
      marker1.addListener('click', function() {
          infoWindow.open(map, marker1);
      });

      alert("You Found Location 4! Close this box to continue.");
      score++;
    }
  }

  if(score === 4){
    //Hint
    if(map.getBounds().contains(vegas)){
      document.getElementById("hint").innerHTML = "Hint: Place is in bounds";
    }
    else{
      document.getElementById("hint").innerHTML = "Hint: Place is not in bounds. Try looking around more.";
    }

    if(map.getBounds().contains(vegas) && zoomLevel >=10) {
      inBounds = true;
      var marker1 = new google.maps.Marker({position:vegas, map});
      marker1.setIcon('https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png');
  
      var infoWindow = new google.maps.InfoWindow({content: 'Location 5: Las Vegas, Nevada'});
      marker1.addListener('click', function() {
          infoWindow.open(map, marker1);
      });

      alert("You Found Location 5! Close this box to continue.");
      score++;
    }
  }

  if(score === 5){
    //Hint
    if(map.getBounds().contains(alaska)){
      document.getElementById("hint").innerHTML = "Hint: Place is in bounds";
    }
    else{
      document.getElementById("hint").innerHTML = "Hint: Place is not in bounds. Try looking around more.";
    }

    if(map.getBounds().contains(alaska) && zoomLevel >=10) {
      inBounds = true;
      var marker1 = new google.maps.Marker({position:alaska, map});
      marker1.setIcon('https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png');
  
      var infoWindow = new google.maps.InfoWindow({content: 'Location 6: Barrow, Alaska'});
      marker1.addListener('click', function() {
          infoWindow.open(map, marker1);
      });

      alert("You Found Location 6! Close this box to continue.");
      score++;
    }
  }

  if(score === 6){
    //Hint
    if(map.getBounds().contains(berlin)){
      document.getElementById("hint").innerHTML = "Hint: Place is in bounds";
    }
    else{
      document.getElementById("hint").innerHTML = "Hint: Place is not in bounds. Try looking around more.";
    }

    if(map.getBounds().contains(berlin) && zoomLevel >=10) {
      inBounds = true;
      var marker1 = new google.maps.Marker({position:berlin, map});
      marker1.setIcon('https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png');
  
      var infoWindow = new google.maps.InfoWindow({content: 'Location 7: Berlin, Germany'});
      marker1.addListener('click', function() {
          infoWindow.open(map, marker1);
      });

      alert("You Found Location 7! Close this box to continue.");
      score++;
    }
  }

  if(score === 7){
    //Hint
    if(map.getBounds().contains(nashville)){
      document.getElementById("hint").innerHTML = "Hint: Place is in bounds";
    }
    else{
      document.getElementById("hint").innerHTML = "Hint: Place is not in bounds. Try looking around more.";
    }

    if(map.getBounds().contains(nashville) && zoomLevel >=10) {
      inBounds = true;
      var marker1 = new google.maps.Marker({position:nashville, map});
      marker1.setIcon('https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png');
  
      var infoWindow = new google.maps.InfoWindow({content: 'Location 8: Nashville, Tennessee'});
      marker1.addListener('click', function() {
          infoWindow.open(map, marker1);
      });

      alert("You Found Location 8! Close this box to continue.");
      score++;
    }
  }

  if(score === 8){
    //Hint
    if(map.getBounds().contains(dallas)){
      document.getElementById("hint").innerHTML = "Hint: Place is in bounds";
    }
    else{
      document.getElementById("hint").innerHTML = "Hint: Place is not in bounds. Try looking around more.";
    }

    if(map.getBounds().contains(dallas) && zoomLevel >=10) {
      inBounds = true;
      var marker1 = new google.maps.Marker({position:dallas, map});
      marker1.setIcon('https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png');
  
      var infoWindow = new google.maps.InfoWindow({content: 'Location 9: Dallas, Texas'});
      marker1.addListener('click', function() {
          infoWindow.open(map, marker1);
      });

      alert("You Found Location 9! Close this box to continue.");
      score++;
    }
  }

  if(score === 9){
    //Hint
    if(map.getBounds().contains(korea)){
      document.getElementById("hint").innerHTML = "Hint: Place is in bounds";
    }
    else{
      document.getElementById("hint").innerHTML = "Hint: Place is not in bounds. Try looking around more.";
    }

    if(map.getBounds().contains(korea) && zoomLevel >=10) {
      inBounds = true;
      var marker1 = new google.maps.Marker({position:korea, map});
      marker1.setIcon('https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png');
  
      var infoWindow = new google.maps.InfoWindow({content: 'Location 10: Seoul, South Korea'});
      marker1.addListener('click', function() {
          infoWindow.open(map, marker1);
      });

      score++;
    }
  }

  if(score === 10){
    window.location.replace('/winner.html');
  }
  
    document.getElementById("score").innerHTML = "Score: " + score;
    console.log("inBounds:"+inBounds+"zoomLevel:"+zoomLevel)
  }

  function reset(){
    window.location.replace('/index.html');
  }
