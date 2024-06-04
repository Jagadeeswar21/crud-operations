'use client'
interface RemoveBtnProps {
    id: string;
  }
import { FC } from 'react';
import { HiOutlineTrash } from "react-icons/hi"
import { useRouter } from 'next/navigation';
const RemoveBtn:FC<RemoveBtnProps>=({id})=>{
    const router=useRouter()
    const removeTopic=async()=>{
        const confirmed=confirm("are you sure")
        if(confirmed){
            const res=await fetch(`http://localhost:3000/api/topics?id=${id}`,{
                method:'DELETE'
         } )

         if(res.ok){
            router.refresh()
         }
        
        }
    }

    return(
        <button onClick={removeTopic} className="text-red-400">
            <HiOutlineTrash size={24}/>
        </button>
    )
}
export default RemoveBtn