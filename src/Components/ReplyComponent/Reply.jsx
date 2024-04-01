import { useState } from "react"
import "./Reply.css"
const Reply = (props)=>{
    const [replyMesg,setReplyMsg] = useState("")
    const {index,replyText} = props
    const handleReply = (e)=>{
       let mesg=e.target.value
       setReplyMsg(mesg)
    }
    const handleReplybtn = () =>{
        replyText({replyMesg,index})
    }
    return(
        <>
        <input className="reply-text" type="text" onChange={handleReply}/>
        <button onClick={handleReplybtn}>Comment</button>
        </>
    )
}

export default Reply;