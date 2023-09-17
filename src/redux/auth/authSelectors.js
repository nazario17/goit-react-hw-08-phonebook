const selectLoggedIn = state => state.auth.isLoggedIn;
const selectUserName = state => state.auth.user.name;
const selectIsRefreshing = state => state.auth.isRefreshing;

const authSelectors = {
  selectLoggedIn,
  selectUserName,
  selectIsRefreshing,
};

export default authSelectors;
