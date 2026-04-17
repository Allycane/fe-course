import { configureStore } from '@reduxjs/toolkit'
import likeSlice from '../features/likeSlice'
import skillSlice from '../features/skillSlice'

export const store = configureStore({
  reducer: {
    // slice 진열
    like : likeSlice,
    skill : skillSlice
  }
})