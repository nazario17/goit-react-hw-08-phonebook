export const handlePending = (state, action) => {
  state.isLoading = true;
  state.isRefreshing = true;
};

export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  state.isRefreshing = false;
};

export const handleRegister = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

export const handleLogIn = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

export const handleLogOut = (state, action) => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

export const handleFetchCurrentUser = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};
