import { createSelector } from "@reduxjs/toolkit";

export const selectCartItems = (state) => state.cart.items;

export const selectCartItemCount = (state) =>
  state.cart.items.reduce((acc, item) => acc + item.quantity, 0);

export const selectTotalPrice = (state) =>
  state.cart.items.reduce(
    (acc, item) => acc + item.quantity * (item.discount_price || item.price),
    0,
  );

export const selectCartItemIds = createSelector([selectCartItems], (items) =>
  items.map((item) => item.id),
);

export const selectCartItemQuantityById = (state, id) => {
  const item = state.cart.items.find((item) => item.id === id);
  return item ? item.quantity : 0;
};
