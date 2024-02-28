import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'sidebar',
  initialState: {
    user_id: "",
  },
  reducers: {
    setUser: (state, action) => {
      state.user_id = action.payload
    },
  },
});

export const { setSideLocation, setProductLocation } = counterSlice.actions;
export default counterSlice.reducer;