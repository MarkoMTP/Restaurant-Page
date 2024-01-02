
export default function addAll () {

    content.innerHTML = '';
  

//content 

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

}


