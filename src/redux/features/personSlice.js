import { createSlice } from '@reduxjs/toolkit'

export const personSlice = createSlice({
  name: 'person',
  initialState: {
    firstName: '',
    lastName: '',
    email: ''
  },
  reducers: {
    setName: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
      state.email = action.payload.email
    }
  },
})

// Action creators are generated for each case reducer function
export const { setName } = personSlice.actions

export default personSlice.reducer;