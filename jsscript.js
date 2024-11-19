//GRUNNLEGGENDE
//#1. --------------------------------- 
console.log("#1.-----------------------");

let mittNavn = "Sondre";
console.log(mittNavn);

console.log("");

function toTall(num1, num2){
    return num1 + num2;  
}
console.log(toTall(5,8));

console.log("");

//#2. --------------------------------- 
console.log("#2.-----------------------");

function alderUtregn (num1){
    const currentYear = 2024;
    let fodselsAar = num1;
    let alder = currentYear - fodselsAar;
    return "Jeg er " + alder + " år gammel";
}

console.log(alderUtregn(1997));

console.log("");


//#3. --------------------------------- 
console.log("#3.-----------------------");

function positiveOrNegative (num1){
    if (num1 > 0){
        return "Tallet er positivt";
    }
    else if (num1 == 0){
        return "Tallet er null";
    } 
    else if (num1 < 0) {
        return "Tallet negativt";
    } 
    else {
        return "Ugyldig input";
    }
}

console.log(positiveOrNegative(5));
console.log(positiveOrNegative(-3));
console.log(positiveOrNegative(0));
console.log(positiveOrNegative("Pizza"));

console.log("");

//#4. --------------------------------- 
console.log("#4.-----------------------");

for (let i = 1; i <= 20; i++) {
    console.log(i);
  }

console.log("");

let sum = 0; 

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) { 
        sum += i;
    }
}

console.log("Summen av alle partall mellom 1 og 100 er:", sum); 

console.log("");

//#5. --------------------------------- 
console.log("#5.-----------------------");

function reverserString(str) {
    return str.split('').reverse().join('');
}

console.log(reverserString("I love skibidi toilet"));

console.log("");

function byttChars(text1) {
    if (text1.length < 7) {
        return "Streng er for kort";
    } else {
    let chars = text1.split("");

    const tredje = chars[2];
    const femte = chars[4];
    const sjuende = chars[6];

    chars[2] = femte; 
    chars[4] = sjuende;
    chars[6] = tredje;

    return chars.join("");
    }
}

console.log(byttChars("Full sabotasje"));
console.log(byttChars("sigma"));     

console.log("");

//#6. --------------------------------- 
console.log("#6.-----------------------");

let tallListe1 = [1, 7, 9, 3, 8, 5]; 
let tallListe2 = [1, 7, 9, 3, 8]; 

function findMedian (exArray) {
    exArray.sort();
    console.log(exArray.toString());
    if (exArray.length % 2 === 0){
        return exArray [(exArray.length/2)];
    } else {
        return exArray [(Math.floor(exArray.length/2))];
    };
};

console.log(findMedian(tallListe1)); 
console.log(findMedian(tallListe2)); 

console.log("");

function unikeVerdier(array) {
    const unikeVerdier = new Set(array);
    
    return unikeVerdier.size;
}

console.log(unikeVerdier([1,"Sigma",3,"Sigma",5]));
console.log(unikeVerdier(["Skibidi","Skibidi","Skibidi"]));

console.log("");

//#7. --------------------------------- 
console.log("#7.-----------------------");

function skuddar(år) {
    if ((år % 4 === 0 && år % 100 !== 0) || (år % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}
console.log(skuddar(2024)); 
console.log(skuddar(1900)); 
console.log(skuddar(2000)); 
console.log(skuddar(2023)); 

console.log("");

function pilDireksjon(directions) {

    const mapping = {
        '>': 'Høyre',
        '<': 'Venstre',
        'v': 'Ned',
        '^': 'Opp'
    };

    const tekstResultat = directions.split('').map(tegn => {
        return mapping[tegn] || 'Ugylding Input'; 
    });


    tekstResultat.forEach(retning => console.log(retning));
}

pilDireksjon("><v^");

console.log("");

//#8. --------------------------------- 
console.log("#8.-----------------------");

function PrimtallFaktorisering(tall) {
    if (tall < 1) return []; 
    const faktor = []; 
    let minstePrimTall = 2; 

    while (tall > 1) {
       
        while (tall % minstePrimTall === 0) {
            faktor.push(minstePrimTall); 
            tall = tall / minstePrimTall; 
        }
        minstePrimTall++; 
    }

    return faktor;
}

console.log(PrimtallFaktorisering(12)); 
console.log(PrimtallFaktorisering(10)); 
console.log(PrimtallFaktorisering(1));  
console.log(PrimtallFaktorisering(248)); 

console.log("");

//#9. --------------------------------- 
console.log("#9.-----------------------");
function calculateAge(birthDateString) {
    const birthDate = new Date(birthDateString);
    if (isNaN(birthDate)) {
        return "Ugyldig datoformat";
    }

    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12;
    }

    if (days < 0) {
        const previousMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
        days += previousMonth.getDate();
        months--;
    }

    return { years, months, days };
}

const birthDateString = "1997-06-04";

const age = calculateAge(birthDateString);

console.log(`Alder: ${age.years} år, ${age.months} måneder og ${age.days} dager.`);

console.log("");

//#10. --------------------------------- 
console.log("#10.-----------------------");

function finnesIArray(array, verdi) {
    if (array.includes(verdi)){
        return true;
    } else {
        return false;
    } ;
}
let arrayMedTingI = ["Skibidi", 1, "Sigma", 69, "Gyatt", 420];

console.log(finnesIArray(arrayMedTingI,"Skibidi"));console.log(finnesIArray(arrayMedTingI, 69));
console.log(finnesIArray(arrayMedTingI,"Ohio"));

console.log("");

//MIDDELS VANSKELIG
console.log("MIDDELS VANSKELIG");

//#1. --------------------------------- 
console.log("#1.-----------------------");

function fibonacciFunction(x) {
    if (x <= 0) return []; 
    if (x === 1) return [0];

    const fibonacci = [0, 1]; 

    for (let i = 2; i < x; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }

    return fibonacci;
}

console.log(fibonacciFunction(15));

console.log("");

//#2. --------------------------------- 
console.log("#2.-----------------------");
function palindromSjekk(textString) {
    const lowercaseTextString = textString.toLowerCase();
    const reversertTextString = lowercaseTextString.split('').reverse().join('');
    return lowercaseTextString === reversertTextString;
}

console.log(palindromSjekk("Agnes i Senga")); 
console.log(palindromSjekk("Skibidi")); 
console.log(palindromSjekk("Racecar")); 

console.log("");

//#3. --------------------------------- 
console.log("#3.-----------------------");

function sumMatrix(matrix) {
    let totalSum = 0;
    for (let row of matrix) {
        for (let value of row) {
            totalSum += value;
        }
    } return totalSum;
}

const arrayMatrix1 = [
    [2, 17, 3],
    [13, 5, 5],
    [7, 8, 9]
];

console.log(sumMatrix(arrayMatrix1));

console.log("");

//#4. --------------------------------- 
console.log("#4.-----------------------");

function bubbleSort(array) {
    let arrayToBeSorted = array.length;

    for (let i = 0; i < arrayToBeSorted - 1; i++) {
       
        for (let j = 0; j < arrayToBeSorted - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    } return array;
}

const numbers = [69, 6, 420, 12, 27, 11, 333];
console.log(bubbleSort(numbers)); 



console.log("");

//#5. --------------------------------- 
console.log("#5.-----------------------");

function filtrerObjekter(liste, betingelse) {
    return liste.filter(betingelse);
}

const forskjelligeObjekter = [
    { navn: "Objekt#1", alder: 25 },
    { navn: "Objekt#2", alder: 18 },
    { navn: "Objekt#3", alder: 30 },
];


const resultat = filtrerObjekter(forskjelligeObjekter, (obj) => obj.alder > 20);

console.log(resultat);

console.log("");

//#6. --------------------------------- 
console.log("#6.-----------------------");
function countCharacters(text) {
    const tegnTelt = {};

    for (let tegn of text) {

        if (tegnTelt[tegn]) {
            tegnTelt[tegn]++;
        } else {
          
            tegnTelt[tegn] = 1;
        }
    }

    return tegnTelt;
}
console.log(countCharacters("What have I done?"));


console.log("");

//#7. --------------------------------- 
console.log("#7.-----------------------");
function gruperElements(array) {
    
    array.sort((a, b) => a - b);

    const grupert = [];


    array.forEach(item => {
        if (grupert.length === 0 || grupert[grupert.length - 1][0] !== item) {
            grupert.push([item]);
        } else {
           
            grupert[grupert.length - 1].push(item);
        }
    });

    return grupert;
};

console.log(gruperElements([1, 2, 2, 3, 3, 3]));

console.log("");

//#8. --------------------------------- 
console.log("#8.-----------------------");
function sumNummmerFromString(input) {

    const nummer = input.match(/\d+/g);

    
    if (!nummer) return 0;

    
    return nummer.reduce((sum, num) => sum + parseInt(num, 10), 0);
}


console.log(sumNummmerFromString("Det er 77 episoder med Skibidi Toilet")); 
console.log(sumNummmerFromString("Hvordan vet man hva 5 pluss 64 blir? Slik som dette"));    
console.log(sumNummmerFromString("Skibidi Toilet"));           

console.log("");






//#9. --------------------------------- 
console.log("#9.-----------------------");

function celsiusTilFahrenheit(celsius) {
    const fahrenheit = (celsius * 9 / 5) + 32;
    return `${celsius}°C er ${fahrenheit.toFixed(2)}°F`;
}
function fahrenheitTilCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5 / 9;
    return `${fahrenheit}°F er ${celsius.toFixed(2)}°C`;
}
function celsiusTilKelvin(celsius) {
    const kelvin = celsius + 273.15;
    return `${celsius}°C er ${kelvin.toFixed(2)}K`;
}
function kelvinTilCelsius(kelvin) {
    const celsius = kelvin - 273.15;
    return `${kelvin}K er ${celsius.toFixed(2)}°C`;
}
function kelvinTilFahrenheit(kelvin) {
    const fahrenheit = (kelvin - 273.15) * 9 / 5 + 32;
    return `${kelvin}K er ${fahrenheit.toFixed(2)}°F`;
}
function fahrenheitTilKelvin(fahrenheit) {
    const kelvin = (fahrenheit - 32) * 5 / 9 + 273.15;
    return `${fahrenheit}°F er ${kelvin.toFixed(2)}K`;
}
console.log(celsiusTilFahrenheit(36));   
console.log(fahrenheitTilCelsius(96.8));
console.log(celsiusTilKelvin(36));       
console.log(kelvinTilCelsius(310.15));    
console.log(kelvinTilFahrenheit(310.15));
console.log(fahrenheitTilKelvin(96.8));  

console.log("");

//VANSKELIG
console.log("VANSKELIG");

//#1. --------------------------------- 
console.log("#1.-----------------------");

//const arrayOfArrays = [
    //[1, 2, 1, 1, 1, 1, 1, 1, 1],
    //[1, 0, 0, 0, 0, 0, 0, 0, 1],
    //[1, 0, 1, 1, 1, 1, 1, 0, 1],
    //[1, 0, 1, 0, 0, 0, 0, 0, 1],
    //[1, 0, 1, 1, 1, 1, 1, 1, 1],
    //[1, 0, 1, 0, 0, 0, 1, 0, 1],
    //[1, 0, 1, 0, 1, 0, 1, 0, 1],
    //[1, 0, 0, 0, 1, 0, 0, 0, 1],
    //[1, 1, 1, 1, 1, 1, 1, 9, 1]
  //];
  
  //function mazeSolver(map){
    //map = "skibidi";




    
  //};
  
  //console.log(arrayOfArrays);