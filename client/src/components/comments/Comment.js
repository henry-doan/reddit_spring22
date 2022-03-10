import { useState } from 'react';
import CommentForm from './CommentForm';

const Comment = ({ id, author, body, updateComment, deleteComment }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      {
        editing ?
          <>  
            <CommentForm 
              id={id}
              author={author}
              body={body}
              updateComment={updateComment}
              setEdit={setEdit}
            />
            <button onClick={() => setEdit(false)}>Cancel</button>
          </>
        : 
        <>
          <h1>Author: {author}</h1>
          <p>Message: {body}</p>
          <button onClick={() => setEdit(true)}>Edit</button>
          <button onClick={() => deleteComment(id)}>Delete</button>
        </>
      }
      
    </>
  )
}

export default Comment;