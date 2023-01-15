// cấu trúc mảng
// mô phỏng ứng dụng giao hàng tận nơi

'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    [weekdays[5]]: {
        open: 0, //open 24 hours
        close: 24,
    },
};



const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian','Pizzeria','Vegetarian','Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    //các ký tự đối tượng nâng cao ES6
    openingHours, 

    order(starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },


    orderDelivery({
        starterIndex = 1, 
        mainIndex = 0, 
        time = '20:00', 
        address,
    }){
        console.log(
            'Order received! ${this.starterMenu[starterIndex]} and {this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}'
        );
    },
    orderPasta(ing1, ing2, ing3){
        console.log('Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}');
    },
    orderPizza(mainIngredient, ...otherIngredients){
        console.log(mainIngredient);
        console.log(otherIngredients);
    }
};


