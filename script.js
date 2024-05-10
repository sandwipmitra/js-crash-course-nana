const standardShippingCost = 6;
const discountedShippingCost = 4;
let totalPrice;

function shipopingCostCalculation(totalPrice) {//function definition  
    //Function parameters are the names listed in the function definition
    //inside the function, the parameter behave as local variables(can only be
    //be accessed within that function)
    // the actual values received by the function are called function "arguments"

    // let totalPrice = 29;
    let shippingCost;

    if (totalPrice <= 10) {
        shippingCost = standardShippingCost;
    } else if (totalPrice <= 20) {
        shippingCost = discountedShippingCost;
    } else {
        shippingCost = 0;
    }

    console.log(`Shipping cost for you is ${shippingCost}`);
    console.log(`for total price of ${totalPrice}`);
    console.log("-----------------------------------------");
}


//functio parameters, 
//if more purchases
//user start shopping
totalPrice = 10;
shipopingCostCalculation(totalPrice)

//more items added to shopping cart
totalPrice = 19;
shipopingCostCalculation(totalPrice); //passing a value to a function as input parameters

//add another item to cart
totalPrice = 34;
shipopingCostCalculation(totalPrice);

//ready to order



