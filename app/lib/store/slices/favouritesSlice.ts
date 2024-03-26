import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FavouritesState {
  count: number;
  items: any[];
}

const initialState: FavouritesState = {
  count: 0,
  items: [],
};

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    initFavourites: (state, action: PayloadAction<FavouritesState>) => {
      const { count, items } = action.payload;
      state.count = count;
      state.items = items;
    },
    addToFavourites: (state, action: PayloadAction<any>) => {
      state.items.push(action.payload);
      state.count++;
    },
    deleteFromFavourites: (state, action: PayloadAction<any>) => {
      const index = state.items.findIndex(item => item.article === action.payload.article);
      if (index !== -1) {
        state.items.splice(index, 1);
        state.count--;
      }
    },
  },
});

export const { initFavourites, addToFavourites, deleteFromFavourites } = favouritesSlice.actions;

export default favouritesSlice.reducer;
