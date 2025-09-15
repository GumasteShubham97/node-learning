const ChatRoom = require('./chatRoom');

const chat = new ChatRoom();

chat.on('userJoined', (user) => {
    console.log(`${user} has joined the chat.`);
});

chat.on('userLeft', (user) => {
    console.log(`${user} has left the chat.`);
});

chat.on('message', ({ user, message }) => {
    console.log(`${user}: ${message}`);
});

// Simulating chat activity
chat.join('Alice');
chat.join('Bob');

chat.sendMessage('Alice', 'Hello, everyone!');
chat.sendMessage('Bob', 'Hi Alice!');

chat.leave('Alice');
chat.sendMessage('Alice', 'Goodbye!'); // This should show that Alice is not

chat.leave('Bob');
chat.sendMessage('Bob', 'See you later!'); // This should show that Bob is not
