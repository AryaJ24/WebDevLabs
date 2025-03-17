let x = 5;
let y = 7;
let z = x+y;
console.log(z);
let A = "Hello ";
let B = "world!";
let C = A + B;
console.log(C);

function SumNPrint(x1, x2) {
    let x3 = x1 + x2;
    console.log(x3);  
}   
SumNPrint(x, y);
SumNPrint(A, B);

if (C.length > z) {
    console.log(C);
} else if (C.length < z) {
    console.log(z);
} else {
    console.log("good job!");
}

let L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
let L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function findTheBanana(item) {
    if (item == "Banana") { 
        alert("Banana Found!")
    }
}
L1.forEach(findTheBanana);
L2.forEach(findTheBanana);

function greetingFunc() {
    let d = new Date(); 
    let h = d.getHours();
    let E = document.getElementById("greeting");
    if (h < 12) {
        E.innerHTML = "Hi, I'm Arya. Good morning!";
    } else if (h < 18) {
        E.innerHTML = "Hi, I'm Arya. Good afternoon!";
    } else if (h < 20) {
        E.innerHTML = "Hi, I'm Arya. Good evening!";
    } else if ((h > 20 && h < 24) || (h > 0 && h < 5)) {
        E.innerHTML = "Hi, I'm Arya. Good night!";
    }
}
greetingFunc();

