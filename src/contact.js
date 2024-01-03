
export default function addContact () {


    content.innerHTML = '';

    const h1Content = document.createElement("h1");
    h1Content.textContent = "Contact"

    content.appendChild(h1Content);


    const h4Content = document.createElement("h4")
h4Content.textContent = "Email: idontknow@gmail.com";

content.appendChild(h4Content);


const h4ContentN = document.createElement("h4")
h4ContentN.textContent = "09554429391";

content.appendChild(h4Content);

const adressa = document.createElement("p");
adressa.textContent = "Ulica Antuna Mihanovica 50b";
content.appendChild(adressa);

container.appendChild(content)

} 
