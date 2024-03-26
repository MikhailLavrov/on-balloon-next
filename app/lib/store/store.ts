import { configureStore } from '@reduxjs/toolkit'
import callMeBackReducer from './slices/callBackSlice';
import favouritesReducer from './slices/favouritesSlice';
import shoppingCartReducer from './slices/shoppingCartSlice';
import topMenuNavReducer from './slices/topMenuSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      callMeBack: callMeBackReducer,
      favourites: favouritesReducer,
      shoppingCart: shoppingCartReducer,
      topMenuNav: topMenuNavReducer,
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
