import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ShoppingCartItem {
  article: string;
  count: number;
}

interface ShoppingCartState {
  count: number;
  items: ShoppingCartItem[];
}

const initialState: ShoppingCartState = {
  count: 0,
  items: [],
};

export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    initShoppingCart: (state, action: PayloadAction<ShoppingCartState>) => {
      const { items } = action.payload;
      state.count = items.length;
      state.items = items;
    },
    addToShoppingCart: (state, action: PayloadAction<ShoppingCartItem>) => {
      state.items.push(action.payload);
      state.count++;
    },
    deleteFromShoppingCart: (state, action: PayloadAction<{ article: string }>) => {
      const index = state.items.findIndex(item => item.article === action.payload.article);
      if (index !== -1) {
        state.items.splice(index, 1);
        state.count--;
      }
    },
    updateItemInShoppingCart: (state, action: PayloadAction<{ article: string; newCount: number }>) => {
      const { article, newCount } = action.payload;
      const index = state.items.findIndex(item => item.article === article);
      if (index !== -1) {
        state.items[index].count = newCount;
      }
    },
    deleteAllItemsFromShoppingCart: (state) => {
      state.items = [];
      state.count = 0;
    },
  },
});

export const {
  initShoppingCart,
  addToShoppingCart,
  deleteFromShoppingCart,
  updateItemInShoppingCart,
  deleteAllItemsFromShoppingCart,
} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
