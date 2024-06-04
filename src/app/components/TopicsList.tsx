import { HiPencilAlt } from "react-icons/hi"
import RemoveBtn from "./RemoveBtn"
import Link from "next/link"
interface Topic {
    _id: string;
    title: string;
    description: string;
  }

const getTopics=async()=>{
    try {
        const res=await fetch('http://localhost:3000/api/topics',{
            cache: "no-store",
        })

        if(!res.ok){
            throw new Error("failed to fetch topic")
        }
        return res.json()
    } catch (error) {
        console.log("error in loading",error)
    }
}

export default async function TopicsList(){
    const {topics}=await getTopics()
    return(
    <>
    {topics.map((t:Topic)=>(
        <div key={t._id} className="p-7 border border-slate-300 my-3 flex justify-between gap-5 items-start">
        <div>
            <h2 className="font-bold text-3xl"> {t.title}</h2>
            <div> {t.description}</div>
        </div>
        <div className="flex gap-2">
            <RemoveBtn id={t._id}/>
            <Link href={`/editTopic/${t._id}`}> 
             <HiPencilAlt size={24}/></Link>
        </div>
    </div>
))}
    </>
)
}