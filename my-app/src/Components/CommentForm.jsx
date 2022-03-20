import React, { useState } from 'react'

function CommentForm({handleSubmit,submitLabel}) {
    const [reply,setReply] = useState("");
    const onSubmit = (event) => {
        event.preventDefault();
        handleSubmit(reply);
        setReply("");
    }
  return (
    <form onSubmit={onSubmit}>
       <textarea className="comment_form_text_area" cols="80" rows="10" value={reply} onChange={(event)=>setReply(event.target.value)}>
       </textarea>

       <input type="submit" value={submitLabel}/>
    </form>
  )
}

export default CommentForm
