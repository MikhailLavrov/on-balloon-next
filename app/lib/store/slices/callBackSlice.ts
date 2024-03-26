import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CallMeBackState {
  isSubmitted: boolean;
}

const initialState: CallMeBackState = {
  isSubmitted: false,
};

export const callMeBackSlice = createSlice({
  name: 'callMeBack',
  initialState,
  reducers: {
    submitCallBackForm: (state, action: PayloadAction<boolean>) => {
      state.isSubmitted = action.payload;
    },
  },
});

export const { submitCallBackForm } = callMeBackSlice.actions;

export default callMeBackSlice.reducer;
