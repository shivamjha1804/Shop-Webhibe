import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from "../reducer";
import { PERSIST, persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

// const initialState = {
//   user: {},
//   isLoggedIn: false,
// } 

// const rootReducer = combineReducers({
//   user: User
// })

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user', 'Address', 'Profile'],
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"]
      }
    })
});

export const persistor = persistStore(store);

export default { store, persistor };