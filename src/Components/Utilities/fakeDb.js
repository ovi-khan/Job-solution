// use local storage to manage cart data
const addToDb = id => {
    let jobCart = getJobCart();
    // add quantity
    const quantity = jobCart[id];
    if (!quantity) {
        jobCart[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        jobCart[id] = newQuantity;
    }
    localStorage.setItem('job-cart', JSON.stringify(jobCart));
}

// const removeFromDb = id => {
//     const shoppingCart = getShoppingCart();
//     if (id in shoppingCart) {
//         delete shoppingCart[id];
//         localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
//     }
// }

const getJobCart = () => {
    let jobCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('job-cart');
    if (storedCart) {
        jobCart = JSON.parse(storedCart);
    }
    return jobCart;
}

// const deleteShoppingCart = () => {
//     localStorage.removeItem('shopping-cart');
// }

export {
    addToDb,
    // removeFromDb,
    getJobCart as getJobCart,
    // deleteShoppingCart
}
