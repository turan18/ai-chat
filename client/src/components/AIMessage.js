import React from "react";



function AIMessage ({val}){
    return (
        <div className="w-full flex justify-start">
            <span className="text-xl flex items-center bg-slate-500 py-5 px-2 rounded-full text-green-200 h-8"><i className="fas fa-robot"></i></span>
            <div className="ml-2 bg-ai-msg text-black rounded-lg w-2/5 p-2">
                <p className="text-sm lg:text-lg">
                    {val}
                </p>
            </div>
        </div>
    )
}


export default AIMessage