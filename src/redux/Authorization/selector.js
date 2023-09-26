export const selectIsLoggedIn = state => state.auth.isLoaggedIn;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;

// export const selectError = state => state.auth.error;

export const selectGroupBlood = state => state.auth.user.bodyData.blood;

