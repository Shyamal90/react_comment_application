import React, { useEffect, useState } from 'react'
import { data } from '../API'
import { createComment } from './createComment';
import Comment from './Comment';
import CommentForm from './CommentForm';

function Comments({ currentUserId }) {

    const [backendComments, setBackendComments] = useState([]);
    const [activeComment,setActiveComment] = useState(null);

    const rootComments = backendComments.filter((backendComment) => {
        return backendComment.parentReplyId === null;
    })



    useEffect(() => {
        setBackendComments([...data])
    }, [])

    console.log(rootComments);

    // define handle submit
    const addComment = (reply , parentId = null) => {
        console.log(reply);
        const formatedReply = createComment(reply,null);
        console.log(formatedReply);
        console.log(data.push(formatedReply))
        setBackendComments([formatedReply, ...backendComments]);
    }

    return (
        <>
            <div className="commentform">
                {/* reply, edit , = submit level
                    handleSubmit = handle the form 
                */}
                <CommentForm submitLabel="Write" handleSubmit={addComment}/>
            </div>
            <div>
                {
                    rootComments.map((currentComment) => {
                        return (
                            <Comment key={currentComment.id} {...currentComment} activeComment={activeComment} setActiveComment={setActiveComment}/>
                        )
                    })
                }
            </div>
        </>

    )
}

export default Comments
