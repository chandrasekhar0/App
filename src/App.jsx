import { useState } from 'react'
import Comment from './Components/CommentComponent/Comment'
import LoadComments from './Components/ListOfCommentsComponent/ListOfComments'
import Reply from './Components/ReplyComponent/Reply';
import './App.css'

function App() {
  const [listOfComments,setListOfComments] = useState([])
  const [replies,setReplies] = useState({})
  
  const commentHandler=(text)=>{
     setListOfComments([...listOfComments,text])
  }
 const replyComp = (i)=>{
   
 }
  return (
    <>
       <h1 className='header'>Comment Box</h1>
       <Comment commentHandler = {commentHandler}/>
       <LoadComments Comments={listOfComments} />
    
    </>
  )
}

export default App
