import React from "react";


function UserMessage ({val}){
    if(val){
        return (
            <div className="w-full flex justify-end">
                <div className="mr-2 bg-user-msg text-white rounded-lg w-2/5 p-2">
                    <p>{val}</p>
                </div>
                <span className="text-xl flex items-center bg-slate-500 py-5 px-3 rounded-full text-white h-8"><i className="fas fa-user"></i></span>
            </div>
        )
    }
    else{
        return (
            <>
            </>
        )
    }
    
}

export default UserMessage