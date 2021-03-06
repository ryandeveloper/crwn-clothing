import { CartActionTypes } from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utils';

const INITIAL_STATE = {
   hidden: true,
   cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {

      // TOGGLE_CART_HIDDEN
      case CartActionTypes.TOGGLE_CART_HIDDEN:
         return {
            ...state,
            hidden: !state.hidden
         }

      // ADD CART ITEM
      case CartActionTypes.ADD_ITEM:
         return {
            ...state,
            cartItems: addItemToCart(state.cartItems, action.payload)
         }

      // CLEAR_ITEM_FROM_CART
      case CartActionTypes.CLEAR_ITEM_FROM_CART:
         return {
            ...state,
            cartItems: state.cartItems.filter(
               cartItem => cartItem.id !== action.payload.id
            )
         }

      // REMOVE_ITEM
      case CartActionTypes.REMOVE_ITEM:
         return {
            ...state,
            cartItems: removeItemFromCart(state.cartItems, action.payload)
         }

      default:
         return state;
   }
}

export default cartReducer;