console.log('God Is Great, He Will Make 2024 The Greatest Year Of My Life');



    const container = document.querySelector("#container");

//this is the header
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

//img background

const backgroundImg = document.createElement("div");
backgroundImg.setAttribute("id", "back")

container.appendChild(backgroundImg)

//content 

const content = document.createElement("div");
content.setAttribute("id", "content")

const h1Content = document.createElement("h1");
h1Content.textContent = "Come on down for some delicious cuisine!"

content.appendChild(h1Content);

const h4Content = document.createElement("h4")
h4Content.textContent = "Tasty and affordable!";

content.appendChild(h4Content);

const homePgBtn = document.createElement("button");
homePgBtn.classList.add('myButton')
homePgBtn.textContent = "Order Now";

content.appendChild(homePgBtn);

const adressa = document.createElement("p");
adressa.textContent = "Ulica Antuna Mihanovica 50b";
content.appendChild(adressa);

const WorkTime = document.createElement("p");
WorkTime.textContent = "Mon-Sat: 8am-8pm";

content.appendChild(WorkTime);

container.appendChild(content)

    

    

    

    