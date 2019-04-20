var MessagesView = {

  $chats: $('#chats'),
  $submit: $('#submitMessage'),

  initialize: function() {
    MessagesView.$submit.on('click', function(event) {
      var message = {
        text: $('#message').val(),
        username: App.username,
        roomname: $('#roomSelect option:selected').val()
      }
      Parse.create(message, function() {MessagesView.renderMessage(message)})
    });
  },

  render: function() {
    MessagesView.$chats.html('');
    var selectedRoom = $('#roomSelect option:selected').val();
    for (const obj of Messages.arr) {
      if (obj.roomname === selectedRoom) {
        this.renderMessage(obj);
      }
    }
  },

  renderMessage: function(message) {
    var text = message.text;
    var username = message.username;
    var template = MessageView.render({username: username, message: text});
    MessagesView.$chats.append(template);
  },

  // encodeHTML: function(s) {
  //   return s != null ? s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;') : null;
  // }

};