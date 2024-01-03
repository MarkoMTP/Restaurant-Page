
export default function addAll () {

    content.innerHTML = '';
  

//content 

const h1Content = document.createElement("h1");
h1Content.textContent = "Come on down for some delicious cuisine!"

content.appendChild(h1Content);

const h4Content = document.createElement("h2")
h4Content.textContent = "Tasty and affordable!";

content.appendChild(h4Content);

const homePgBtn = document.createElement("button");
homePgBtn.classList.add('myButton')
homePgBtn.textContent = "Order Now";

content.appendChild(homePgBtn);


const WorkTime = document.createElement("h4");
WorkTime.textContent = "Mon-Sat: 8am-8pm";

content.appendChild(WorkTime);

container.appendChild(content)

}


