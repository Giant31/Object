var header = document.getElementById("header")

var container = document.getElementsByClassName("container")

var paragraph = document.getElementsByTagName("p")
var allDivs = document.querySelectorAll("div")    

//container[0].style ="background-color:black; color:red"
var heading = document.querySelector(".container h1")

heading.onclick = function(){
    heading.innerText ="hello"
}

var secondHeader = document.querySelector(".containerSecond h1")
secondHeader.onclick = function(){
    secondHeader.innerText="hello hello"
}
var Header = document.querySelector(".containerThird h1")
Header.onclick = function(){
    Header.style="color:red"
}
var secondHeader = document.querySelector(".containerSecond h1")
secondHeader.onclick = function(){
    secondHeader.innerText="hello hello"
}