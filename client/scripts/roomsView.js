var RoomsView = {

  $button: $('#rooms button'),
  $select: $('select'),

  initialize: function() {
    RoomsView.$select.change(function() {
      MessagesView.render();
    });
    RoomsView.$button.on('click', function(event) {
      Rooms.add($('#roomName').val());
      RoomsView.render();
      $('#roomName').val('');
    });
  },

  //adds room to drop down menu
  renderRoom: function(roomName) {
    if(!roomName) {
      return;
    }

    RoomsView.$select.append(`<option value="${roomName}"> ${roomName} </option>`);
    return;
  },

  //loops through each unique room in the rooms Set and calls the renderRoom method
  render: function() {
    // RoomsView.$select.html('');
    for (const value of Rooms.rooms) {
      this.renderRoom(value);
    }
  }

};
