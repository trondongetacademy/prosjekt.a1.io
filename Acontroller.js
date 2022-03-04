// Skift variabel verdi til rakett siden
// Feil: ved flere trykk vil man laste opp siden x antall ganger man trykker..
function changeScreenValue(){
    screen = 'rocket';
    rockets();
    view();
}

// Skift variabel verdi til hoved siden
function changeToMain(){
    screen = 'main';
    view();
}
// Skift variabel verdi til satelitt siden
function searchEngine(){
    screen = 'search';
    view();
}
//Skifter variabel verdi til SpaceX og NASA Side
function NasaSpaceX(){
    screen = 'NSX';
    view();
}
// Handlevogn
function addToCart(index){
    model.cart.push(model.rocketry[index])
    model.totalPrice += model.rocketry[index].Price;
    showCart();
}
// Info om hva man har lagt til i handlevogna
function showCart(){
    model.cartText = '';
    for(let i = 0; i < model.cart.length; i++){
        model.cartText += `<div>${model.cart[i].Name}</div>`
    }
    view();
}

// Laster opp rakettene og informasjonen fra model
function rockets(){
for(let i in model.rocketry){
    page += '<hr>' + '<h2>' + model.rocketry[i].Name + '</h2>' + 'Price: ' +
    model.rocketry[i].Price + 'M$' + '<br>' + 
    `<button class="button1" onclick="addToCart(${i} )">Add to Cart</button>` + '<br>' +
    `<div>Du har lagt til antall: ${model.stk}Stk</div>` + '<br>' +
    `<img class='img' src="${model.rocketry[i].image}">`
     +'<br>'
    for(let q in model.rocketry[i].Info){
        page += '<li>' + model.rocketry[i].Info[q] + '</li>' +  '</br>' 
        }
    }
}

// Sammenligner verdiene man sender inn med objekt model og printer ut de som matcher
function compare(indexValue){
    console.log('er:',indexValue)
    for(let i in model.rocketry){
        for(let a in model.rocketry[i].Info){
        //for(let a = 0; a < model.rocketry[i].Info.length; a++){
             if(model.rocketry[i].Info[a].includes(indexValue)){
//                alert('ergerg')
                 // Fiks dette med vekt.
                visAlternativ += '<hr>' + '<h4>' + indexValue + '</h3>'
                + '<b>Rocket:</b> ' + '<h3>' + model.rocketry[i].Name + '</h3>' + '<br>' 
                +  `<img class='img' src="${model.rocketry[i].image}"><br>`
                +  model.rocketry[i].Info[0] + '<br>' 
                +  model.rocketry[i].Info[1] + '<br>'
                +  model.rocketry[i].Info[2] + '<br>'
                +  model.rocketry[i].Info[3] + '<br>'
                +  model.rocketry[i].Info[4] + '<br>'
                +  model.rocketry[i].Info[5] + '<br>'
                +  model.rocketry[i].Info[6] + '<br>'
                +  model.rocketry[i].Info[7] + '<br>'
                +  model.rocketry[i].Info[8] + '<br>'
        }
    }}
view();
}

// For når man prøver å kjøpe en rakett
function buyRocket(){
    alert('Du har ikke rettigheter til kjøp av romfartsraketter. Kontakt kundeservice.')
}
