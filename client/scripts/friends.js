var Friends = {
  friendsList: new Set(),
  toggleStatus: function(username) {
    Friends.friendsList.add(username);
  }
};