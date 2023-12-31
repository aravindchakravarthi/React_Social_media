import React from 'react'

const NewPost = ({postBody, setPostBody, postTitle, setPostTitle, handleSubmit}) => {
  return (
    <div className='NewPost'>
        <h2>New Post</h2>
        <form className='newPostForm' onSubmit={handleSubmit}>
            <label htmlFor='postTitle'>Title:</label>
            <input
                id='postTitle'
                type='text'
                autoFocus
                required
                value={postTitle}
                onChange={(e) => setPostTitle(e.target.value)}
            />
            <label htmlFor='postBody'>Post:</label>
            <textarea 
                id='postBody'
                type='text'
                required
                value={postBody}
                onChange={(e) => setPostBody(e.target.value)}
            />
            <button type='submit' >Submit</button>

        </form>
    </div>
  )
}

export default NewPost
