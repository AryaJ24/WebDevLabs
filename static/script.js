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

// let L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
// let L2 = ["Apple", "Banana", "Kiwi", "Orange"];

// function findTheBanana(item) {
//     if (item == "Banana") { 
//         alert("Banana Found!")
//     }
// }
// L1.forEach(findTheBanana);
// L2.forEach(findTheBanana);

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
if (window.location.href.includes("index.html")) {
    greetingFunc();
}
function addYear() {
    const year = new Date().getFullYear();
    const footer = document.getElementById("copyYear");
    if (footer) {
      footer.innerHTML = `${year} &copy; designed 🎨 and coded 👩🏻‍💻 by Arya   `;
    }
  }
  
  addYear();


//   function showList() {
//     document.getElementById('listimus').style.display = 'block';
//     document.getElementById('showButton').style.display = 'none';
// }

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

  // Form validation
  function validate() {
    // Get the input fields and validation message element by their IDs
    var userName = document.getElementById("name");
    var userEmail = document.getElementById("email");
    var userText = document.getElementById("comment");
    var msg = document.getElementById("ValidateMsg"); // Element to display validation message
    // Check if any of the fields are invalid using checkValidity()
    if (!userName.checkValidity() || !userEmail.checkValidity() || !userText.checkValidity()) {
        // If any field is invalid, display an error message
        msg.innerHTML = "Please fill out the form correctly so I can get back to you :)";
    }
 } 

 function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
        .then(response => response.json()) 
        .then(data => {
            document.getElementById("adviceText").innerText = `"${data.slip.advice}"`;
        })
        .catch(error => {
            document.getElementById("adviceText").innerText = "Oops! Something went wrong. Try again.";
            console.error("Error fetching advice:", error);
        });
}
function toggle() {
    const navLinks = document.querySelector('.nav .nav-links');
    if (navLinks.style.display === 'block') {
      navLinks.style.display = 'none';
    } else {
      navLinks.style.display = 'block';
    }
  }
    document.getElementById('hamburger').addEventListener('click', toggle);

    document.addEventListener("DOMContentLoaded", function() {
        let cpath = window.location.pathname;
        cpath = cpath.substring(cpath.lastIndexOf('/') + 1);
                let navL = document.querySelectorAll('.nav .navigation');
          navL.forEach(function(link) {
          let lp = link.getAttribute("href");
          if(lp === cpath) {
            link.classList.add("active");
          }
        });
      });