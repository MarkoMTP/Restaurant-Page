console.log('God Is Great, He Will Make 2024 The Greatest Year Of My Life');

import addAll from "./homepage";
import addAllMenu from "./menu";
import addContact from "./contact";


const container = document.querySelector("#container");

const content = document.createElement("div");
container.appendChild(content)

//this is the header
const header = document.createElement("div");
header.setAttribute("id", "header");
const h1Header = document.createElement("h1")
h1Header.textContent = "Expensive Lounge";

header.appendChild(h1Header);

const ul = document.createElement("ul");
ul.classList.add("tabs")

const li1 =  document.createElement("li")
li1.classList.add("tab");
li1.textContent = "Home"

li1.addEventListener("click", () => {
    content.setAttribute("id", "content")

    li2.style.color = '';
    li2.style.fontSize = '100%';
    li1.style.color = 'red';
    li1.style.fontSize = '140%';
    li3.style.color = '';
    li3.style.fontSize = '100%';


    addAll()
})


const li2 =  document.createElement("li")
li2.classList.add("tab");
li2.textContent = "Menu"
li2.addEventListener('click', () => {
content.setAttribute("id", "content")
    li1.style.color = '';
    li1.style.fontSize = '100%';
    li2.style.color = 'red';
    li2.style.fontSize = '140%';
    li3.style.color = '';
    li3.style.fontSize = '100%';
    addAllMenu()
})

const li3 =  document.createElement("li")
li3.classList.add("tab");
li3.textContent = "Contact"
li3.addEventListener('click', () => {
    content.setAttribute("id", "content")
        li1.style.color = '';
        li1.style.fontSize = '100%';
        li3.style.color = 'red';
        li3.style.fontSize = '140%';
        li2.style.color = '';
        li2.style.fontSize = '100%';
        addContact()
    })
    

ul.appendChild(li1)
ul.appendChild(li2) 
ul.appendChild(li3)
header.appendChild(ul)

container.appendChild(header)

//img background

const backgroundImg = document.createElement("div");
backgroundImg.setAttribute("id", "back")

container.appendChild(backgroundImg);

  



    

  