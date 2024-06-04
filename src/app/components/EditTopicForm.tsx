'use client'

import { useState } from "react"
export default function EditTopicForm({id,title,description}){
    const[newTitle,setNewTitle]=useState(title)
    const[newDescription,setNewDescription]=useState(description)
    return <div> <form className="flex flex-col gap-3" >
    <input
    onChange={(e)=>setNewTitle(e.target.value)}
    value={newTitle}
     className="border border-slate-500 px-8 py-2" 
    type="text" placeholder="Topic Title"/>

    <input 
    onChange={(e)=>setNewDescription(e.target.value)}
    value={newDescription}
    className="border border-slate-500 px-8 py-2"
     type="text" placeholder="Topic Description"/>

     <button className="bg-green-700 font-bold text-white px-3 py-2 
     w-fit">Update Topic</button>
</form></div>
}