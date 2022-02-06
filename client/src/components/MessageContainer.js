import React, { useState, useEffect } from "react";
import MessageBar from "./MessageBar";
import Messages from "./Messages";
import { io } from 'socket.io-client'

const socket = io.connect('/')
function MessageContainer (){
    
    const [id, setId] = useState()
    const [allMessages, setAllMessages] = useState([{from:'AI', val:"Hello. I'm an AI powered chat bot."}])

    useEffect(()=> {
      socket.on("set id", id => {
        setId(id)
      })
      socket.on("message", text => {
        setAllMessages(allMessages.concat(
            {
                from: 'AI',
                val : text
            }
        ))
    })
  })
    
    
    const addMessage = (from,message) => {
        const newMessage = {
            from: from,
            val:message
        }
        setAllMessages(allMessages.concat(newMessage))
    }

    return (
        <div className="w-5/6 mt-12 lg:mt-0 lg:w-2/5 md:w-1/2 h-5/6 rounded-lg relative flex flex-col border-2 border-slate-400 shadow-2xl bg-white">
            <div className="h-94 px-4 py-4 w-full flex flex-col space-y-2 overflow-y-auto">
                <Messages messages={allMessages}/>
            </div>
            <MessageBar socket={socket} addMessage={addMessage}/>
        </div>
    )
}


export default MessageContainer