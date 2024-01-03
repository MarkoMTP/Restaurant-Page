
import Menu from "./assets/menuPic.jpg";
import Champ from "./assets/champagne.jpg"



export default function addAllMenu () {

    content.innerHTML = '';
    //content 

    const menuPic = new Image()
    menuPic.src = Menu;
    menuPic.classList.add("menuImg")
    const h1Content = document.createElement("h1");
    h1Content.textContent = "MENU"
    
    content.appendChild(h1Content);

const namePizza = document.createElement("h2")
     namePizza.textContent = "Reflexive Booster Pizza"
     content.appendChild(namePizza) 

    const PizzaDiv = document.createElement("div");
    PizzaDiv.classList.add("pizzaDiv")
     PizzaDiv.appendChild(menuPic)  
     
         const pricePizza = document.createElement("p")
     pricePizza.textContent = "1 milion$" 
     PizzaDiv.appendChild(pricePizza) 

     content.appendChild(PizzaDiv)

    
    const champPic = new Image();
    champPic.src = Champ;
    champPic.classList.add("menuImg")
    
   
    const nameDrink = document.createElement("h2")
    nameDrink.textContent = "Reflex Booster"
     content.appendChild(nameDrink) 
    const drinkDiv = document.createElement("div");
    drinkDiv.classList.add("pizzaDiv")
    drinkDiv.appendChild(champPic)  
     
         const drinkPrice = document.createElement("p")
         drinkPrice.textContent = "1 milion$" 
     drinkDiv.appendChild(drinkPrice) 

     content.appendChild(drinkDiv)

    
  

    container.appendChild(content);

    
    }
    