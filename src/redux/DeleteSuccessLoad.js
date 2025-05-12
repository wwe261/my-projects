 import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  success: false,
};

const deleteLoadSuccess = createSlice({
  name: "deleteLoadSuccess",
  initialState,
  reducers: {
    setDeleteStatus: (state, action) => {
      state.loading = action.payload.loading ?? state.loading;
      state.success = action.payload.success ?? state.success;
    },
    resetDeleteStatus: () => initialState,
  },
});

export const { setDeleteStatus, resetDeleteStatus } = deleteLoadSuccess.actions;
export default deleteLoadSuccess.reducer;
