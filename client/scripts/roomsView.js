var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on('click', RoomsView.renderRoom);
  },

  renderRoom: function(roomName) {
    // var temp = $('#roomName').val();
    var temp = roomName;
    if(!temp) {
      alert('Enter a valid room name, jerk!');
      return;
    }
    if (Rooms.hasOwnProperty(temp)) {
      return;
    }
    Rooms[temp] = temp;
    RoomsView.$select.append(`<option> ${temp} </option>`);
    $('#roomName').val('');
    return;
  },

  render: function() {
  }

};
