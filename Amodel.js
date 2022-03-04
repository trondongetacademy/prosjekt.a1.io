//Modell
let html = '';
let screen = 'main';
let recommend = '';
let page = '';
let visAlternativ = '';

const model = {
    name: 'Rockets',
    cart: [],
    totalPrice: 0,
    cartText: '',
    stk: 0,
// Legg til MassLeo og MassGeo til på samme måte som Name og Price, og sjekk om det går an å 
//hente ut den informasjonen med søkefelt.
    rocketry:[
        {
        Name:    'Falcon 9',
        Price:   62,
        Info:[
        'Firm:    Space X',
        'Country: USA',
        'Height:  70m',
        'massLEO: 22800kg',
        'massGTO: 8300kg',
        'Payload cost pr kg: 2.720$',
        'Reusable: Yes',
        'Fuel:    LOX & RP1',
        'Weight:  549.054kg'],
        image:  'RocketIMG/falcon9.jpeg',
        },
    
        {
        Name:    'Falcon Heavy',
        Price:   150,
        Info:[
        'Firm:    Space X',
        'Country: USA',
        'Height:  70m',
        'massLEO: 63 800kg',
        'massGTO: 26 700kg',
        'Payload cost pr kg: 1.400$',
        'Reusable: Yes',
        'Fuel:    LOX & RP1',
        'Weight:  142.000kg'],
        image:  'RocketIMG/Falcon-Heavy.jpeg',
        },

        {
        Name:    'Electron',
        Price:   7.5,
        Info:[
        'Firm:    Rocket Lab',
        'Country: New Zealand',
        'Height:  18m',
        'massLEO: 300kg',
        'massGTO: No Data',
        'Payload cost pr kg: 19.039$',
        'Reusable: No',
        'Fuel:    LOX & Kerosene',
        'Weight:  13.000kg'],
        image:  'RocketIMG/Electron.jpeg',
        },

        {
        Name:    'Delta IV Heavy',
        Price:   350,
        Info:[
        'Firm:    ULA',
        'Country: USA',
        'Height:  72m',
        'massLEO: 28 379kg',
        'massGTO: 13 810kg',
        'Payload cost pr kg: 81.082$',
        'Reusable: No',
        'Fuel:    LOX & LH2',
        'Weight:  733.000kg'],
        image:  'RocketIMG/DeltaIvHeavy.jpeg',
        },

        {
        Name:    'Ariane 5',
        Price:   166,
        Info:[
        'Firm:    ESA',
        'Country: Guiana Space Centre (French Guiana)',
        'Height:  52m',
        'massLEO: 16 000kg',
        'massGTO: 6950kg',
        'Payload cost pr kg: 9.167$',
        'Reusable: No',
        'Fuel:    LOX & LH2',
        'Weight:  777 000kg'],
        image:  'RocketIMG/ariane5-1.jpeg',
        },

        {
        
        Name:    'Soyuz-2',
        Price:   50,
        Info:[
        'Firm:    ROSKOSMOS',
        'Country: Russia',
        'Height:  46.3m',
        'massLEO: 8200kg',
        'massGTO: 3250kg',
        'Payload cost pr kg: No data',
        'Reusable: No',
        'Fuel:    LOX & RP1',
        'id="soyuz"',
        'Weight:  312 000kg'],
        image:  'RocketIMG/Soyuz.jpeg',
        },

        {
        Name:    'Long March 7',
        Price:   150,
        Info:[
        'Firm:    CNSA',
        'Country: China',
        'Height:  53.1',
        'massLEO: 13.500',
        'massGTO: 5.500kg',
        'Payload cost pr kg: 1.400$',
        'Reusable: No',
        'Fuel:    LOX & RP1',
        'Weight:  590.000kg'],
        image:  'RocketIMG/LongMarch7.jpeg',
        },
        
    ],
}

const NSX = {
    NSXA:[
      { Name:    'Starship',
        Firm:    'Space X',
        Country: 'USA',
        Reusable: 'Yes',
        Project:  'Mars flight, Human space travel, orbital technology and moon landing',
        StarShip:  '50m',
        SuperHeavy: '69m',
        Total:      '119m',
        massLEO: '100T+',
        massGTO: 'No data',
        Fuel:    'LOX & CH4 (Methane)',
        image:  'RocketIMG/StarshipStack.jpeg',
    },
      { Name:    'SLS',
       Firm:     'NASA',
       Country:  'USA',
       Reusable: 'No',
       SLS:      '111m',
       Project:  'Artemis Moon Program',
       massLEO: '105T',
       massGTO: 'No data',
       Fuel:    'LOX & LH2 (Liquid hydrogen)',
        image:  'RocketIMG/NASASLS.jpeg',}
    ]
}