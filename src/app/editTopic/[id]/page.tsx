interface Params {
    params: {
      id: string;
    };
}
import EditTopicForm from "@/app/components/EditTopicForm";
const getTopicById=async(id:string)=>{
    try{
        const res=await fetch(`http://localhost:3000/api/topics/${id}`,{
            cache:"no-store"
        })
        if(!res.ok){
            throw new Error("Failed to fetch topic")
        }
        return res.json()
    }catch(error){
        console.log(error)
    }
}
export default async function EditTopic({params}:Params){
    const {id}=params
    const {topic}=await getTopicById(id)
    const {title,description}=topic
    return <EditTopicForm id={id} title={title} description={description}/> 
}