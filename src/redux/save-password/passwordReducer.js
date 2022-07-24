 import { createReducer } from '@reduxjs/toolkit';

 const initialState = {
	UpdatedPassword: 'Demo@123',
};

export default createReducer(initialState, (builder) => {
    builder
      .addCase("UPDATE_PASSWORD", (state, action) => {
        state.UpdatedPassword = action.payload;
      })
  })