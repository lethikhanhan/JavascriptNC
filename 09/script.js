'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze,Italy',
    categories: ['Italian', 'Pizzeria','Vegetarian','Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open:12,
            close:22,
        },
        fri: {
            open: 11,
            close:23,
        },
        sat: {
            open:0, //open 24 hours
            close:24,
        },
    },

    order: function (starterIndex,mainIndex) {
        return[this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function ({
        starterIndex = 1,
        mainIndex = 0,
        time = '20:00',
         address,
        }) {
        console.log('Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}');
    },
};

const arr = [7,8,9];
const badNewArr = [ 1,2,arr[0],arr[1],arr[2]];
console.log(badNewArr);

const newArr = [1,2,...arr];
console.log(newArr);

console.log(...newArr);
console.log(1,2,7,8,9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//Coppy array
const mainMenuCopy = [...restaurant.mainMenu];
// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.loh(menu);


//Iterables: arrays, strings, maps,set. NOT objects
const str = 'Jonas';
const letters =[...str,'','S.'];
console.log(letters);

