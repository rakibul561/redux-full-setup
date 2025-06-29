import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/features/counter/counterSlice' 
import taskReducer from './features/counter/task/TaskSlice' 


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo:  taskReducer
  },

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
