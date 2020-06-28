import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import dateReducer from '../reducers/date';
import favoritePhotosReducer from '../reducers/favoritePhotos';

export const store = configureStore({
  reducer: {
    date: dateReducer,
    favoritePhotos: favoritePhotosReducer
  },

});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
