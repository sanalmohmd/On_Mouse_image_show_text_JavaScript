// var item = document.getElementById("image1");

// var item2 = document.getElementById("image2");

// var item3 = document.getElementById("image3");

// var divtext = document.querySelector("#customtext")



// function showtext1(){
//     divtext.innerHTML ="<h1>Lorem ipsum dolor sit amet,</h1>";
// }

// function hidetext1(){
//     divtext.removeAttribute("hidden","true")
// }

function display(element){
    document.getElementById("image1").innerHTML =element.alt;
}

function reset(){
    document.getElementById("image1").innerHTML =""
}