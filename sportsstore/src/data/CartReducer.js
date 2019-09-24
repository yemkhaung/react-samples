import { ActionTypes } from "./Types";

export const CartReducer = (storeData, action) => {
    let newStore = { cart: [], cartItems: 0, cartPrice: 0, ...storeData };
    let p = action.payload.product;
    let q = action.payload.quantity;

    switch (action.type) {
        case ActionTypes.CART_ADD:
            let existing = newStore.cart.find(item => item.product.id === p.id);
            existing
                ? (existing.quantity += q)
                : (newStore.cart = [...newStore.cart, action.payload]);
            newStore.cartItems += q;
            newStore.cartPrice += p.price;
            return newStore;

        case ActionTypes.CART_UPDATE:
            newStore.cart = newStore.cart.map(item => {
                if (item.product.id === p.id) {
                    const diff = q - item.quantity;
                    item.quantity += diff;
                    newStore.cartItems += diff;
                    newStore.cartPrice += item.product.price * diff;
                    return action.payload;
                }
                return item;
            });
            return newStore;

        case ActionTypes.CART_REMOVE:
            let selection = newStore.cart.find(item => item.product.id === p.id);
            newStore.cart = newStore.cart.filter(item => item.product.id !== p.id);
            newStore.cartItems -= selection.quantity;
            newStore.cartPrice -= selection.product.price * selection.quantity;
            return newStore;

        case ActionTypes.CART_CLEAR:
            return newStore;

        default:
            return storeData || {};
    }
};
