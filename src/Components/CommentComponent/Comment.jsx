import { useEffect, useRef, useState } from "react";
import "./Comment.css"
const Comment = (props)=>{
    const {commentHandler} = props;
    const textRef = useRef()
    const [userText,setuserText] = useState({userName:"",comment:""})
    const [isDisabled,setIsDisabled] = useState(true)
    const [userName,setUserName] = useState("")

    useEffect(()=>{
        if(userText != ""){
            setIsDisabled(false)
        }else{
            setIsDisabled(true)
        }
        if(userName=== ""){
            textRef.current.disabled = true
            cancelHandler()
        }else{
            textRef.current.disabled = false
        }
    },[userText,userName])

    const captureText=(e)=>{
       const userInput = e.target.value
       setuserText(userInput) 
    }
    const captureName=(e)=>{
        const setName = e.target.value
        setUserName(setName)
    }
    const sendComment = ()=>{
        commentHandler({userName:userName,comment:userText,newMessage:true,addReply:false,replies:[]})
        cancelHandler()
    }
    const cancelHandler=()=>{
        setuserText("")
    }
    return(
        <div className="comment-parent">
            <input type="text"  className="user-name" placeholder="enter your name" value={userName} onChange={captureName}/><br />
            <input type="text" ref={textRef}  className="main-comment" placeholder="Add Comment" value={userText} onChange={captureText}/><br />
            { userName ==="" && <p>please enter your name then only you can enter comment</p>}
            <div className="controllers">
                <button  disabled={isDisabled} className={isDisabled?"":"comment"} onClick={sendComment}>Comment</button><br />
                <button className="cancel" onClick={cancelHandler} >Cancel</button><br />
            </div>
        </div>
    )
}

export default Comment