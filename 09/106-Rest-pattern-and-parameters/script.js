// cấu trúc mảng
// mô phỏng ứng dụng giao hàng tận nơi

'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian','Pizzeria','Vegetarian','Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, //open 24 hours
            close: 24,
        },
    },

    order: function(starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderDelivery: function({
        starterIndex = 1, 
        mainIndex = 0, 
        time = '20:00', 
        address,
    }){
        console.log(
            'Order received! ${this.starterMenu[starterIndex]} and {this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}'
        );
    },
    orderPasta: function(ing1, ing2, ing3){
        console.log('Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}');
    },
    orderPizza: function(mainIngredient, ...otherIngredients){
        console.log(mainIngredient);
        console.log(otherIngredients);
    }
};

//SPREAD, bởi vì ở bên PHẢI của =
const arr = [1,2, ...[3, 4]];

//REST, bởi vì ở bên TRASI của =
const [a, b, ...orthers] = [1, 2, 3, 4, 5];
console.log(a, b, orthers);

const [Pizza, , Risotto, ...ortherFood] = [
    ...restaurant.mainMenu, 
    ...restaurant.starterMenu
]
console.log(Pizza, Risotto, ortherFood);

const { sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays);

const add = function(...numbers){
    let sum = 0;
    for(let i=0; i<numbers.length; i++) sum += numbers[i];
    console.log(sum);
};

add(2, 3)
add(5, 3, 7, 2)
add(1, 2, 3, 4, 5, 6)


const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');


