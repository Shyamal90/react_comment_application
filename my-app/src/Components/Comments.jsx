import React, { useEffect, useState } from 'react'
import {data} from '../API'
import Comment from './Comment';

function Comments({currentUserId}) {

    const [backendComments,setBackendComments] = useState([]);

    const rootComments = backendComments.filter((backendComment)=>{
        return backendComment.parentReplyId === null;
    })



    useEffect(()=>{
        setBackendComments([...data])
    },[])

    console.log(rootComments);

  return (
    <div>
       {
           rootComments.map((currentComment)=>{
               return(
                  <Comment key={currentComment.id} comment={currentComment}/>
               )
           })
       }
    </div>
  )
}

export default Comments
