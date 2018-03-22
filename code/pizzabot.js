const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

//Put your Javscript code here:

  checkOrderName = (nameCheck) => { //Checking that the Pizza is on the menu.
    if (nameCheck == vegetarian || nameCheck == hawaiian || nameCheck == pepperoni){
      return true;
    }
    else {
      return false;
    }
  }

  totalCost = (quantity) => { // Finalizing the order by calculate the total price.
    let prize = pizzaPrice * quantity
    return prize;
  }

  cookingTime = (quantity2) => { // Show cooking times - 10-20 minutes depending on the amount "loop".
    if(quantity2 <= 2){
      return 10;
    }
    else if(quantity2 <=5){
      return 15;
    }
    else{
      return 20;
    }
  }

 alert("Hey! Happy to serve your pizza.🍕 On our menu we have Vegetarian Pizza, Hawaiian Pizza and Pepperoni Pizza")
  let wantToOrder = true;

   while (wantToOrder){
     let orderName = prompt("Enter the name of the pizza you want to order today") //Ask user to enter order
     const pizzaName = checkOrderName(orderName)

    if (pizzaName){
      let orderQuantity = prompt("How many of " + orderName + " do you want?") //Ask user about the amount.
      const orderTotal = totalCost(orderQuantity)
      const time = cookingTime(orderQuantity)
      alert("Great, I'll get started on your " + orderName + " right away, it will cost " + orderTotal + " kr. The pizzas will take " + time + " minutes ⏲ . Please hold on.  ")
      wantToOrder = false;
    }
    else {
     alert("❌ Sorry, we don't have that pizza. Please try to search for another one")
    }
  }
