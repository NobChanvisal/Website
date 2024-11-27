import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("carts")) || [], // Safe initialization
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add Item to Cart
    addToCart(state, action) {
      const { id, title, salePrice, brand, colors, image, qty } = action.payload;
      const existingItem = state.cartItems.find(item => item.id === id);

      if (existingItem) {
        existingItem.qty += qty;
      } else {
        state.cartItems.push({ id, title, salePrice, brand, colors, image, qty });
      }

      try {
        localStorage.setItem("carts", JSON.stringify(state.cartItems));
      } catch (error) {
        console.error("Error saving to localStorage:", error);
      }
    },
    
    // Remove Item from Cart
    removeFromCart(state, action) {
      const { id } = action.payload;
      state.cartItems = state.cartItems.filter(item => item.id !== id);

      try {
        localStorage.setItem("carts", JSON.stringify(state.cartItems));
      } catch (error) {
        console.error("Error updating localStorage:", error);
      }
    },
  },
});

// Export Actions and Reducer
export const { addToCart, removeFromCart } = cartSlice.actions;  // Include removeFromCart here
export default cartSlice.reducer;
