import React, {useState} from "react";


function MessageBar ( {socket, addMessage} ) {


    let [currentUserMessage, setCurrentUserMessage] = useState('')

    const setMessage = (event) => {
        setCurrentUserMessage(event.target.value)
    }

    const sendMessage = (event) => {
        if(currentUserMessage.length > 0){
            addMessage('User',currentUserMessage)
            socket.emit("message", currentUserMessage)
            setCurrentUserMessage('')
        }   
    }

    return (
        <div className="h-6s flex">
            <div className="relative w-full border-t-2 border-slate-300">
                <input className="pl-4 pr-36 w-full h-full text-xl rounded-b-md outline-none" type={'text'} placeholder="Type here to send message..."  onChange={setMessage} value={currentUserMessage}/>
                <div className="absolute right-0 top-0 h-full">
                    <button className="bg-green-400 px-6 py-2 h-full text-xl text-white" onClick={sendMessage}><i className="fas fa-share"></i></button>
                    <button className="bg-blue-400 px-6 py-2  h-full text-xl rounded-br-md text-white"><i className="fas fa-microphone"></i></button>
                </div>     
            </div>
           
        </div>
    )
}

export default MessageBar