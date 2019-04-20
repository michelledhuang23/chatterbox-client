var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#roomSelect'),

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

  renderRoom: function(roomName) {
    if(!roomName) {
      return;
    }

    RoomsView.$select.append(`<option value="${roomName}"> ${roomName} </option>`);
    return;
  },

  render: function() {
    // RoomsView.$select.html('');
    for (const value of Rooms.rooms) {
      this.renderRoom(value);
    }
  }

};
