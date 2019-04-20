var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="username" onclick="MessagesView.toggle(event)"><%= username %></div>
        <div><%= message %></div>
      </div>
    `)

};