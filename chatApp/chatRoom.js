const EventEmitter = require('events');

class ChatRoom extends EventEmitter {
    constructor(roomName) {
        super();
        this.roomName = roomName;
        this.users = new Set();
    }

    join(user) {
        this.users.add(user);
        this.emit('userJoined', user);
    }

    leave(user) {
        //this.users = this.users.filter(u => u !== user);
        //this.emit('userLeft', user);
        if (this.users.has(user)) {
            this.users.delete(user);
            this.emit('userLeft', user);
        } else {
            console.log(`${user} is not in the chat room.`);
        }
    }

    sendMessage(user, message) {
        if (this.users.has(user)) {
            this.emit('message', { user, message });
        } else {
            console.log(`${user} is not in the chat room.`);
        }
    }
}
module.exports = ChatRoom;
// The above code demonstrates the use of EventEmitter to create a simple chat room application.
