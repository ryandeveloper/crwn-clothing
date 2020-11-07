import React from 'react';
import {connect } from 'react-redux'

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component'

import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems}) => {
   return (
      <div className='cart-dropdown'>
         <div className="cart-items">
            {cartItems && cartItems.map(cartItem => (
               <CartItem key={cartItem.id} item={cartItem} />
            ))}
         </div>
         <CustomButton>GO TO CHECKOUT</CustomButton>
      </div>
   )
}

const mapStateToProps = (state) => {
   const { cartItems } = state.cart
   return {
      cartItems
   }
}

export default connect(mapStateToProps)(CartDropdown);