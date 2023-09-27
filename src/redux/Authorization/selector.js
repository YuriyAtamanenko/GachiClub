export const selectIsLoggedIn = state => state.auth.isLoaggedIn;

export const selectUser = state => state.auth.bodyData;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectBodyData = state => state.auth.bodyData;

// export const selectError = state => state.auth.error;

export const selectGroupBlood = state => state.auth.user.bodyData.blood;
