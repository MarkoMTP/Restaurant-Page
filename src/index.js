console.log('God Is Great, He Will Make 2024 The Greatest Year Of My Life');



    const container = document.querySelector("#container");


const header = document.createElement("div");
header.setAttribute("id", "header");
const h1Header = document.createElement("h1")
h1Header.textContent = "Goran's Get Sexy Lounge";

header.appendChild(h1Header);

const ul = document.createElement("ul");
ul.classList.add("tabs")

const li1 =  document.createElement("li")
li1.classList.add("tab");
li1.textContent = "Home"

ul.appendChild(li1)

const li2 =  document.createElement("li")
li2.classList.add("tab");
li2.textContent = "Menu"

ul.appendChild(li2) 

const li3 =  document.createElement("li")
li3.classList.add("tab");
li3.textContent = "Contact"
ul.appendChild(li3)

header.appendChild(ul)

container.appendChild(header)
    

    

    

    