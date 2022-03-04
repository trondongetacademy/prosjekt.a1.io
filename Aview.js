//View 
function view(){
    if(screen === 'main') showMainPage();
    else if(screen === 'rocket') showAllRocketsScreen();
    else if(screen === 'search') showSearchEngine();
    else if (screen === 'NSX') showNasaAndSpaceXInfo();
    appDiv.innerHTML = html;
 }
 function showMainPage(){
    html = `
    ${navigation()}
    <img class="img4" src="RocketIMG/EarthSatellite.jpg">
    `
 }
// Laster opp søkemotoren
 function showSearchEngine(){
   html = `
   ${navigation()}
   ${satiName()}
   ${returnToBottom()}
   <hr>
   ${exampleSatelite()}
   ${inputs()}
   ${visAlternativ}
   ${returnToTop()}
   `
 }
 // Laster opp opplysningene for rakettene
 function showAllRocketsScreen(){
   html = ` 
   ${navigation()}
   <br><div class="info"><b>For More Information:</b></div>
   ${navi()} 
   ${returnToBottom()}
   <div class="section">${page}</div>
   <hr>
   <div><h4>Du har lagt Til:</h4>${model.cartText}<h4>Til en pris av:</h4>${model.totalPrice}M$</div><br>
   <button class="button1" onclick="buyRocket()">Gå videre med kjøp</button>
   ${returnToTop()}
    `
 }

 function showNasaAndSpaceXInfo(){
   html =`
   ${navigation()}
   <br><div class="info"><b>For More Information:</b></div>
   ${showNasaAndSpaceXBar()}
   <hr>
   <div>
   <img class="img2" src="RocketIMG/StarshipStack.png">
   <img class="img3" src="RocketIMG/starship2.jpeg">
    </div>`
       html += `<div class="StarInfo">
       <h2>Starship with Super Heavy</h2>      
       ${NSX.NSXA[0].Firm}
       ${NSX.NSXA[0].Country}<br>
       Reusable?:${NSX.NSXA[0].Reusable}<br>
       Project: ${NSX.NSXA[0].Project}<br>
       Height Starship: ${NSX.NSXA[0].StarShip}<br>
       Heigth Super Heavy: ${NSX.NSXA[0].SuperHeavy}<br>
      Total Height: ${NSX.NSXA[0].Total}<br>
      Mass to Low Earth Orbit: ${NSX.NSXA[0].massLEO}<br>
      Mass to Geostationary Orbit: ${NSX.NSXA[0].massGTO}<br>
      Fuel Type: ${NSX.NSXA[0].Fuel}<br>
       </div>`
       html += `
       <div>
   <img class="img5" src="RocketIMG/Starship.jpeg">
   <img class="img6" src="RocketIMG/Super-Heavy.jpeg">
    </div><hr>
    <img class="img7" src="RocketIMG/NASASLS.jpeg">
    `
    html+= `<div class="StarInfo">
    <h2>NASA with Space Launch System ( SLS )</h2>      
    ${NSX.NSXA[1].Firm}
       ${NSX.NSXA[1].Country}<br>
       Reusable?:${NSX.NSXA[1].Reusable}<br>
       Height SLS: ${NSX.NSXA[1].SLS}<br>
       Project: ${NSX.NSXA[1].Project}<br>
      Mass to Low Earth Orbit: ${NSX.NSXA[1].massLEO}<br>
      Mass to Geostationary Orbit: ${NSX.NSXA[1].massGTO}<br>
      Fuel Type: ${NSX.NSXA[1].Fuel}<br>
    `}
 