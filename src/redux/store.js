import { configureStore } from '@reduxjs/toolkit'
import personReducer from '../redux/features/personSlice'

export default configureStore({
  reducer: {
    person: personReducer,
  },
})