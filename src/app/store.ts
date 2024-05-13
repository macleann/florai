import { configureStore, ConfigureStoreOptions } from '@reduxjs/toolkit';
import { reactotron } from '../../ReactotronConfig';
import authReducer from '../features/auth/authSlice';

const enhancers: any = [];

if (__DEV__ && reactotron) {
  enhancers.push(reactotron.createEnhancer());
}

const configureStoreOptions: ConfigureStoreOptions = {
  reducer: {
    auth: authReducer,
  },
  enhancers: (getDefaultEnhancers) =>
    getDefaultEnhancers().concat(enhancers),
};
 
 export const store = configureStore(configureStoreOptions);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
