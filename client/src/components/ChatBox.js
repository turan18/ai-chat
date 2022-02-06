import React from "react";
import MessageContainer from "./MessageContainer";


function ChatBox () {
    return (
        <div className="w-full h-screen flex justify-center items-center bg-slate-200 font-led">
            <div className="absolute top-2 text-2xl text-black">
                <h1 className="text-center">A Real-Time AI Chat App.</h1>
                <p className="text-xs text-center">Developed by Yasin Turan. @2022</p>
                <p className="text-xs text-center">Link to Project: </p>
            </div>

            <MessageContainer />
        </div>
    )
}


export default ChatBox