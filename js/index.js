//Task 1

function compare(a, b){
    if(a < b)
        console.log(b + ' is bigger than ' + a);
    else if(a > b)
        console.log(a + ' is bigger than ' + b);
    else
        console.log(a + ' is equal to ' + b);
}
console.log('Task 1: ');
compare(2, 1);
compare(1, 3);
compare(2, 2);

//Task 2
console.log('Task 2: ');
for(let i=0;i<10;i++){
    console.log(i+1);
}

//Task 3
console.log('Task 3: ');
for(let i=0;i<=10;i++){
    console.log(i++);
}

//Task 4
console.log('Task 4: ');

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

for(let i=0;i<5;i++){
    console.log(getRandomNumber(1, 10));
}

//Task 5
console.log('Task 5: ');

let num = 0;
while(num !== 5){
    num = getRandomNumber(1, 10);
    console.log(num);
}

//Task 6
console.log('Task 6: ');

let list = new Array(getRandomNumber(20, 30));
list = [...list].map(a => a = getRandomNumber(10, 30));

let max = -Infinity;

for(let i = 0; i < list.length; i++){
    if(max < list[i])
        max = list[i];
}

console.log('Max number found in array is: ' + max);

//Task 7
console.log('Task 7: ');

const letter = {
    1: 'A',
    2: 'B',
    3: 'C',
    4: 'D',
}

let list2 = new Array(100);
list2 = [...list2].map(a => a = letter[`${getRandomNumber(1, 4)}`])

let aCount = 0;
let bCount = 0;
let cCount = 0;
let dCount = 0;

for(let i = 0;i<list2.length;i++){
    if(list2[i] === 'A')
        aCount++;
    if(list2[i] === 'B')
        bCount++;
    if(list2[i] === 'C')
        cCount++;
    if(list2[i] === 'D')
        dCount++;
}

console.log('A found: ' + aCount);
console.log('B found: ' + bCount);
console.log('C found: ' + cCount);
console.log('D found: ' + dCount);

//Task 8
console.log('Task 8: ');

function lygineSuma(a, b){
    let output = 0;
    if(typeof a === 'number' && typeof b === 'number'){
        output = a + b;
    }
    else if(Array.isArray(a) && Array.isArray(b)){
        output = a.length + b.length;
    }
    else
        return 'Abu typai turi buti skaiciai arba masyvai';
    if(output % 2 !== 0){
        return 'Suma nelygine';
    }
    return output;
}

console.log(lygineSuma(2, 2));
console.log(lygineSuma([1], [2]));
console.log(lygineSuma(2, 1));
console.log(lygineSuma([2,2,3], [2,1]));

//Task 9
console.log('Task 9: ');

//Nebaigtas
function pirminisSkaicius(a){
    let num = 0;
    if(typeof a !== 'number'){
        return 'Tipas turi buti skaicius';
    }
    if(a % 2 === 0){
        return 'Skaicius ' + a + ' nera pirminis';
    }
    if(a % 1 === 0){
        return 'Skaicius ' + a + ' yra pirminis';
    }
    return 'Skaicius ' + a + ' nera pirminis';
}

console.log(pirminisSkaicius(7));

//Task 10
console.log('Task 10: ');

function telefonoNumeris(a){
    if(Array.isArray(a))
        return `(${a[0]}${a[1]}${a[2]}) ${a[3]}${a[4]}${a[5]}-${a[6]}${a[7]}${a[8]}${a[9]}`;
    return 'Ne masyvas';
}

console.log(telefonoNumeris([3,7,0,3,2,3,2,4,1,2]));
