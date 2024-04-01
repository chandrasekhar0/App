import "./ListOfComments.css"
import Comment from "../CommentComponent/Comment"
import Reply from "../ReplyComponent/Reply"
import { useEffect, useState } from "react"

const LoadComments = (props)=>{
    const {Comments,replyText} = props
    const [commentInbox,setCommentInbox] = useState([])

    useEffect(()=>{
        setCommentInbox(Comments)
        localStorage.setItem("mesgs",JSON.stringify(Comments))
     },[Comments])

    const addReply = (i)=>{
      setCommentInbox(commentInbox.map((item,index)=>{
        if(index === i){
           item.addReply = !item.addReply
           return item
        }
        return item
      }))
    }
    const replyTextHandler = (replyMsg)=>{
       console.log(replyMsg)
       setCommentInbox(commentInbox.map((item,index)=>{
        if(index === replyMsg.index){
           item.replies.push(replyMsg.replyMesg)
           item.addReply = !item.addReply
           return item
        }
        return item
      }))

    }
    const clickLike = ()=>{
         console.log(Comments)
    }
    const clickDisLike = ()=>{

    }

    return(
        <>
        <ul>
            {
                commentInbox.map((item,index)=>{
                    return( 
                        <>
                            <div key={index}>
                                <div className="comments">
                                    <p className="item-userName">{item.userName}</p>
                                    <p className="item-comment">{item.comment}</p>
                                </div>
                                <div className="comment-respond-buttons">
                                    <button className="comment-respond-buttons clickLike" onClick={clickLike}>Like</button>
                                    <button className="comment-respond-buttons clickLike" onClick={clickDisLike}>Dislike</button>
                                    <button className="comment-respond-buttons clickLike" onClick={()=>addReply(index)}>Reply</button>
                                </div>
                               {
                                item.addReply === true?<Reply index={index} replyText={replyTextHandler}/>:""
                               }
                             
                            </div>
                            <ul className="reply-list">
                               {
                                item.replies && item.replies.map((item)=>{
                                    return <li >{item}</li>
                                })
                               }
                               </ul>
                        </>
                    )
                })
            }
        </ul>
        </>
    )
}

export default LoadComments;