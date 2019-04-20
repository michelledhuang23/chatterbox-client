var MessagesView = {

  $chats: $('#chats'),
  $submit: $('.submit'),
  $username: $('div.username'),

  initialize: function() {
    MessagesView.$submit.on('click', function(event) {
      var message = {
        text: $('#message').val(),
        username: App.username,
        roomname: $('select option:selected').val()
      }
      Parse.create(message, function() {MessagesView.renderMessage(message)})
    });
  },

  toggle: function(event) {
    var username = $(event.currentTarget).text();
    Friends.toggleStatus(username);
  },

  //
  render: function() {
    MessagesView.$chats.html('');
    var selectedRoom = $('select option:selected').val();
    var sortedMessagesByTime = Messages.arr.slice(0);
    sortedMessagesByTime.sort(function(a,b) {
      return a.createdAt - b.createdAt;
    });
    for (const obj of sortedMessagesByTime) {
      if (obj.roomname === selectedRoom) {
        this.renderMessage(obj);
      }
    }
  },

  //inserts message data into template and appends to chat
  renderMessage: function(message) {
    var text = message.text;
    var username = message.username;
    var template = MessageView.render({username: username, message: text});
    MessagesView.$chats.prepend(template);
  },

  // encodeHTML: function(s) {
  //   return s != null ? s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;') : null;
  // }

};