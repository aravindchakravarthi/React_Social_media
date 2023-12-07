import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const EditPost = ({posts, handleEdit, editTitle, editBody, seteditTitle, seteditBody }) => {
    const {id} =useParams();
    const post = posts.find(post => (post.id).toString() === id)
    useEffect(() => {
        if(post){
            seteditTitle(post.title);
            seteditBody(post.body);
        }
    } ,[post, seteditTitle, seteditBody])
  return (
    <div className='NewPost'>
        
        
            <h2>Edit Post </h2>
            <form onSubmit={(e) => e.preventDefault()} className='newPostForm'>
                <label htmlFor='postTitle'>Title:</label>
                <input 
                    type='text'
                    id='postTitle'
                    required
                    value={editTitle}
                    onChange={(e) => seteditTitle(e.target.value)}
                />
                <label htmlFor='postBody'>Body:</label>
                <textarea 
                    type='text'
                    id='postBody'
                    required
                    value={editBody}
                    onChange={(e) => seteditBody(e.target.value)}
                />
                <button type='submit' onClick={() => handleEdit(post.id)}>Update</button>
            </form>
      
    </div>
  )
}

export default EditPost
