import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TopMenuState {
  currentTopMenu: string;
  currentSubMenu: string;
}

const initialState: TopMenuState = {
  currentTopMenu: '',
  currentSubMenu: '',
};

export const topMenuNavSlice = createSlice({
  name: 'topMenuNav',
  initialState,
  reducers: {
    setCurrentMenu: (state, action: PayloadAction<{ currentTopMenu: string; currentSubMenu: string }>) => {
      const { currentTopMenu, currentSubMenu } = action.payload;
      state.currentTopMenu = currentTopMenu;
      state.currentSubMenu = currentSubMenu;
    },
  },
});

export const { setCurrentMenu } = topMenuNavSlice.actions;

export default topMenuNavSlice.reducer;
