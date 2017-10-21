var characters = [];

var planets = [];

var initialize = function(){

var renderCharacters = function() {
  console.log('hey')
  var selectTag = document.querySelector("#load-characters");
  characters.forEach(function(character) {
    var optionTag = document.createElement("option");
    optionTag.innerText = character.name;
    selectTag.appendChild(optionTag);
  })
}

var handleSelectChange = function() {
  var selectedCharacter = undefined;
  for(character of characters) {
    if (character.name === this.value) selectedCharacter = character;
  }
  console.log(selectedCharacter);

      var ul = document.querySelector("#select-result");
      var li = document.createElement("li")
      var li2 = document.createElement("li");
      var li3 = document.createElement("li");
      var li4 = document.createElement("li")
      var li5 = document.createElement("li");
      var li6 = document.createElement("li");
      var li7 = document.createElement("li")
      var li8 = document.createElement("li");

        while(ul.firstChild) { ul.removeChild(ul.firstChild) }

      li.innerText = "Name: " + selectedCharacter.name;
      ul.appendChild(li);

      li2.innerText ="Height: " + selectedCharacter.height;
      ul.appendChild(li2);

      li3.innerText ="Mass: " + selectedCharacter.mass;
      ul.appendChild(li3);

      li4.innerText = "Hair Colour: " + selectedCharacter.hair_color;
      ul.appendChild(li4);

      li5.innerText ="Skin Colour: " + selectedCharacter.skin_color;
      ul.appendChild(li5);

      li6.innerText ="Eye Colour: " + selectedCharacter.eye_color;
      ul.appendChild(li6);

      li7.innerText = "Birth Year: " + selectedCharacter.birth_year;
      ul.appendChild(li7);

      li8.innerText ="Gender: " + selectedCharacter.gender;
      ul.appendChild(li8);

}


  var select = document.querySelector("select");
  select.addEventListener("change", handleSelectChange);



  var url = "https://swapi.co/api/people/?page=";
  var makeRequest = function(url){
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.addEventListener("load", function () {
      var response = JSON.parse(this.responseText);
      response.results.forEach(function(character){
        characters.push(character)
      })
    })
    request.send();
  }
  var counter = 0;

  while(counter < 10){
    counter++;
    makeRequest(url+counter)
  }
  setTimeout(renderCharacters, 2500)




  var renderPlanets = function() {
    console.log('ahoy')
    var selectTag2 = document.querySelector("#load-planets");
    planets.forEach(function(planet) {
      var optionTag2 = document.createElement("option");
      optionTag2.innerText = planet.name;
      selectTag2.appendChild(optionTag2);
    })
  }


  var handlePlanetSelectChange = function() {
    var selectedPlanet = undefined;
    for(individual of planets) {
      console.log(individual);
      if (individual.name === this.value) selectedPlanet = individual;
    }

        var ul = document.querySelector("#planet-result");
        var li = document.createElement("li")
        var li2 = document.createElement("li");
        var li3 = document.createElement("li");
        var li4 = document.createElement("li")
        var li5 = document.createElement("li");
        var li6 = document.createElement("li");
        var li7 = document.createElement("li")
        var li8 = document.createElement("li");
        var li9 = document.createElement("li");

          while(ul.firstChild) { ul.removeChild(ul.firstChild) }

        li.innerText = "Name: " + selectedPlanet.name;
        ul.appendChild(li);

        li2.innerText ="Rotation Period: " + selectedPlanet.rotation_period;
        ul.appendChild(li2);

        li3.innerText ="Orbital Period: " + selectedPlanet.orbital_period;
        ul.appendChild(li3);

        li4.innerText = "Diameter: " + selectedPlanet.diameter;
        ul.appendChild(li4);

        li5.innerText ="Climate: " + selectedPlanet.climate;
        ul.appendChild(li5);

        li6.innerText ="Gravity: " + selectedPlanet.gravity;
        ul.appendChild(li6);

        li7.innerText = "Terrain: " + selectedPlanet.terrain;
        ul.appendChild(li7);

        li8.innerText ="Surface Water: " + selectedPlanet.surface_water;
        ul.appendChild(li8);

        li8.innerText ="Population: " + selectedPlanet.population;
        ul.appendChild(li9);

  }


    var select = document.querySelector("select#load-planets");
    select.addEventListener("change", handlePlanetSelectChange);




  var url = "https://swapi.co/api/planets/?page=";
  var makeAnotherRequest = function(url){
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.addEventListener("load", function () {
      var response = JSON.parse(this.responseText);
      response.results.forEach(function(planet){
        planets.push(planet)
      })
    })
    request.send();
  }
  var counter = 0;

  while(counter < 7){
    counter++;
    makeAnotherRequest(url+counter)
  }
  setTimeout(renderPlanets, 2500)

}


window.addEventListener("load", initialize);
