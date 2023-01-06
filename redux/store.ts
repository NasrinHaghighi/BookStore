import {combineReducers, configureStore } from '@reduxjs/toolkit'
//import { createWrapper } from 'next-redux-wrapper'


export const store = configureStore({
      reducer: {
    
   },
   middleware: (getDefaultMiddleware) =>
   getDefaultMiddleware({
       serializableCheck: {
       // Ignore these action types
       ignoredActions: ['your/action/type'],
       // Ignore these field paths in all actions
       ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
       // Ignore these paths in the state
       ignoredPaths: ['items.dates'],
     },
   }),

  });

//   export const makeStore =()=>{
// configureStore({
//   reducer:combineReducers,
// })
//   }
//   export const wrapper=createWrapper(makeStore)
  

  // Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch