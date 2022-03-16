import React from 'react'

function Comment({comment}) {
    console.log(comment)
  return (
    <div>
      <p>{comment}</p>
    </div>
  )
}

export default Comment
