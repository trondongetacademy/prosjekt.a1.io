// Navigasjons Meny
function navigation(){
    return `
    <div class="BraView">
        <h1 id="tilToppen">Tronds Nerde Side</h1>
        <ul>
          <li onclick="changeToMain()"><a class="navigation" href="#">Home</a></li>
          <li><a class="navigation" href="#">About</a></li>
          <li onclick="searchEngine()"><a class="navigation" href="#">Search Engine</a></li>
          <li onclick="changeScreenValue()"><a class="navigation" href="#">Show Rockets</a></li>
          <li onclick="NasaSpaceX()"><a class="navigation" href="#">Future Nasa and Space X</a></li>
        </ul>
    </div>`
 };
//Funksjonen for tilbake til toppen knapp
function returnToTop(){
  return `
  <hr>
  <a id="tilBunnen"  class="ba" href="#tilToppen"> To Top </a>`
}
//Funksjonen for tilbake til bunn knapp
function returnToBottom(){
  return `
  <a id="tilToppen" class="ba" href="#tilBunnen"> To Bottom </a>`
}

 //Navigasjons Meny for raketter
function navi(){
    return `
    <div class="naviView">
        <ul>
          <li onclick="showF9()" class="naviLi"><a href="https://www.spacex.com/vehicles/falcon-9/" target="_blank">Falcon 9</a></li>
          <li onclick="showF9()" class="naviLi"><a href="https://www.spacex.com/vehicles/falcon-heavy/" target="_blank">Falcon Heavy</a></li>
          <li onclick="showF9()" class="naviLi"><a href="https://www.rocketlabusa.com/launch/electron/" target="_blank">Electron </a></li>
          <li onclick="showF9()" class="naviLi"><a href="https://www.ulalaunch.com/rockets/delta-iv" target="_blank">Delta IV Heavy </a></li>
          <li onclick="showF9()" class="naviLi"><a href="https://www.arianespace.com/vehicle/ariane-5/" target="_blank">Ariane-5 </a></li>
          <li onclick="showF9()" class="naviLi"><a href="https://en.wikipedia.org/wiki/Soyuz_(rocket_family)" target="_blank">Soyuz-2 </a></li>
          <li onclick="showF9()" class="naviLi"><a href="https://en.wikipedia.org/wiki/Long_March_7" target="_blank">Long March-7 </a></li>
        </ul>
    </div>`
 };
// Oversikt over land tilgjengelig på satelitt side
 function satiName(){
  return `
  <div class="naviView">
      <ul>
        <li class="naviLi">Country's:</a></li>
        <li class="naviLi"><a href="#">USA</a></li>
        <li class="naviLi"><a href="#">China</a></li>
        <li class="naviLi"><a href="#">New Zealand </a></li>
        <li class="naviLi"><a href="#">Russia</a></li>
        <li class="naviLi"><a href="#">French Guiana</a></li>
      </ul>
  </div>`
};

 // Exempel for satelitt
 function exampleSatelite(){
  return `
  <div>
  <h3>Search for different rockets</h3>
  <b>Example:<br></b>
  Country to launch from: USA<br>
  </div>
  `
}

// Input delen for rakett menyen
 function inputs(){
    return `
    <div>Write in the <span class="text" >input field</span> which country you want to check for rockets: <br>
    Country: <input  placeholder="Example: USA" type="text" onchange="compare(this.value)"></div> `  
}

//Navigasjon for Nasa og Space X 
function showNasaAndSpaceXBar(){
  return `
  <div class="NasaSpaceXBar">
        <ul>
          <li class="naviLi"><a href="https://www.nasa.gov/exploration/systems/sls/index.html" target="_blank">NASA SLS</a></li>
          <li class="naviLi"><a href="https://www.spacex.com/vehicles/starship/" target="_blank">Space X Starship</a></li>
        </ul>
    </div>`
}