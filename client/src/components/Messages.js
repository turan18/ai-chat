import React from 'react';
import AIMessage from "./AIMessage";
import UserMessage from "./UserMessage";

function Messages({ messages }) {
    if(messages.length > 0){
        return messages.map((message,index) => {
            
            if(message.from === 'AI'){
                return <AIMessage key={index} val={message.val} />
            }
            else if(message.from === 'User'){
                return <UserMessage key={index} val={message.val} />
            }
        })   
    }
    else{
        return (<p className='text-center'>Start a conversation...</p>)
    }
   
}

export default Messages