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
    if (!E) return;
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

function addYear() {
    const year = new Date().getFullYear();
    const footer = document.getElementById("copyYear");
    if (footer) {
      footer.innerHTML = `${year} &copy; designed 🎨 and coded 👩🏻‍💻 by Arya   `;
    }
  }
  
  addYear();
  

  function showList() {
    document.getElementById('listimus').style.display = 'block';
    document.getElementById('showButton').style.display = 'none';
}

$(document).ready(function() {
    $('#read-more').click(function() {
        $('#full-bio').show(); 
        $('#read-more').hide(); 
        $('#read-less').show();
    });

    $('#read-less').click(function() {
        $('#full-bio').hide();
        $('#read-more').show(); 
        $('#read-less').hide(); 
    });
});

function validateForm() {
    document.getElementById("validation").style.display = "none";
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var comment = document.getElementById("comment");
    if (!name.checkValidity() || !email.checkValidity() || !comment.checkValidity()) {
        document.getElementById("validation").innerText = "PLEASE FILL OUT THE FORM CORRECTLY!!!!!!!!";
        document.getElementById("validation").style.display = "block";
        return false;
    }
    return true; 
}