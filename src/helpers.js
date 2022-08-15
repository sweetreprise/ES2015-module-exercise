// import React from 'react';
// import items from './foods'
let RANDOMFRUIT;

function choice(items) {
    RANDOMFRUIT = items[Math.floor(Math.random() * items.length)];
    return RANDOMFRUIT;
}

function remove(items, item) {
    for(let i = 0; i < items.length; i++) {
        if(item === items[i]) {
            items.splice(items[i], 1);
            return items;
        }
    }
    return undefined;
}

export { choice, remove, RANDOMFRUIT };