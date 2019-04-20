var MessagesView = {

  $chats: $('#chats'),
  $submit: $('#submitMessage'),

  initialize: function() {
    MessagesView.$submit.on('click', MessagesView.renderMessage);
  },

  render: function() {
  },

  renderMessage: function(message) {
    var userName = App.username;
    var messageText = $('#message').val();
    var template = MessageView.render({username: userName, message: messageText});
    MessagesView.$chats.append(template);
  }

};