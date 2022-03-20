import React from 'react'
import './Comment.css'
import CommentForm from './CommentForm';

function Comment({id,author,body,points,replies,timestamp}) {
    console.log(body);
    const createdAt = new Date(timestamp).toLocaleDateString()

  return (
    <div className='comment_container'>

      <div className="profileByCreated">
        <p>{author}</p>
        <p>{points} points</p>
        <p>{createdAt}</p>
      </div>

      <div className="commentBody">
        <h3><span className='addToggle'>+</span>{body}</h3>
      </div>

      <div className="commentFunctionality">
        <div onClick={()=>setActiveComment({id,type:"replying"})}>Reply</div>
        <div>Give Award</div>
        <div>Share</div>
        <div>Report</div>
        <div>Save</div>
      </div>

      

      <div className="repliesContainer">
        {
          replies.length > 0 && (
            <div className='replyBody'>
              {
                replies.map((reply)=>{
                  return <Comment {...reply} key={reply.id}/>
                })
              }
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Comment
