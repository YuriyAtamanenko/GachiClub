import { initialState } from "./initialState";

export const handlePending = state => {
  state.isLoading = true;
};
export const handlePendingUpdate = state => {
  state.isLoadingUpdate = true;
};

export const complateUpdate = (state, action) => {
  state.isLoadingUpdate = false;
  state.memo = action.payload;
};

export const handleRejectedUpdate = (state, action) => {
  state.isLoadingUpdate = false;
  state.errorUpdate = action.payload;
};

export const getCurrentUser = (state, action) => {
  state.isLoading = false;
  state.data = action.payload;

  const userParams = state.data.bodyData;

  if (Object.keys(userParams).length === 0) {
    state.data.bodyData = initialState.data.bodyData;
  }
};

export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
