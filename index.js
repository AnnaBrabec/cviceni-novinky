const bodyElement = document.querySelector("body")
bodyElement.style.color = "#e9e9e9"
const newsElement = document.querySelector(".news")
newsElement.style.backgroundColor = "white"
newsElement.style.maxWidth = "60rem"
const headerElement = document.querySelector("h1")
headerElement.classList.add("news__title")
headerElement.textContent = "Aktuální novinky"
const mainPost = document.querySelector("#zprava1")
mainPost.classList.add("post--main")
const picture = document.querySelector("#zprava3 img")
picture.src = "images/zprava3-novy.jpg"

