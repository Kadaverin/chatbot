const passport = require('passport')
const MessageService = require('../services/message')
const UserService = require('../services/user')
const chatbot = require('../chatbot/index')

let connectedUsersFlags = {}


module.exports = function(io){
  io.on('connection' , socket => {
    emitChatData(socket)

    socket.on('connected' , user => {
      connectedUsersFlags[user.nickname] = true
    })

    socket.on('send message' , msg => {
      MessageService.createNewMessage(msg , (err , newMsg) => proxyHandler({ err, newMsg, io, socket}))
    })

    socket.on('I am typing' , user => {
      socket.broadcast.emit('user is typing' , user)
    })

    socket.on('I left chat' , user => {
      delete connectedUsersFlags[user.nickname]
      socket.broadcast.emit('user left' , user)
    })

    socket.on('I am stop typing' , user => {
      socket.broadcast.emit('user stop typing' , user)
    })

  })
}

function emitChatData(socket){
  MessageService.getLastMessages(100 , (err , msgs) => {
    if(err) return  socket.emit('fetch msgs error')
    UserService.all( (err , users) => {
      if (!err) {
        // add isOnline property to each user object
        let usersArr = users.map( user => {
          let modifiedUser = {...user}
          modifiedUser['isOnline'] =  !!connectedUsersFlags[user.nickname];
          return modifiedUser
        })

        socket.emit('chat data' , {messages: msgs , users: usersArr})
      }
    })
  })
}

function handleSendChatMessage( { err, newMsg, io, socket }){
    if(!err) io.emit('new message', newMsg)
 }

 const proxyHandler = new Proxy(handleSendChatMessage, {
    apply: (target, thisArg, argumentsList) => {

       target.apply(thisArg, argumentsList);

       if( /@bot/.test(argumentsList[0].newMsg.text)){
          chatbot.answerOn(argumentsList[0].newMsg.text , (answer) => {
              setTimeout( () => {
                argumentsList[0].socket.emit('new message' , {
                    senderNick : 'bot',
                    senderName : 'Bander',
                    text: answer,
                    receiverNick: argumentsList[0].newMsg.senderNick,
                    createdAt: new Date()
                })
              }, 500)
          })
       }
    }
 })
    
