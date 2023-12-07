import './App.css';
import Home from './Home';
import Header from './Header';
import { useState, useEffect } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import NewPost from './NewPost';
import { format } from 'date-fns/esm';
import Missing from './Missing';
import {Routes, Route, useNavigate } from 'react-router-dom';
import About from './About';
import PostPage from './PostPage';
import EditPost from './EditPost';



function App() {
  const data =  [{id:1,title:'Hi,',body:'Welcome to TweetConnect',datetime:'00:01'}];
  const [posts, setPosts] = useState(data);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] =useState('');
  const [postBody, setPostBody] =useState('');
  const navigate = useNavigate();
  const [editTitle, seteditTitle] =useState('');
  const [editBody, seteditBody] =useState('');
  


  

  useEffect(() =>{
    const filteredResults = posts.filter((post) => 
        ((post.title).toLowerCase()).includes(search.toLowerCase())
        || ((post.body).toLowerCase()).includes(search.toLowerCase())
    )
    setSearchResults(filteredResults.reverse())
  },[posts, search])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length-1].id + 1 : 1;
    const datetime = format(new Date(), 'MMM dd, yyyy p');
    const newPost = {id, title:postTitle, datetime, body:postBody};
    const allPosts = [...posts, newPost]
    setPosts(allPosts);

    setPostTitle('');
    setPostBody('');
    navigate('/')

  }

  const handleEdit = (id) => {
    const datetime = format(new Date(), 'MMM dd, yyyy p');
    const updatedPost = posts.map((post) => post.id === id ? {...post, id, title:editTitle, body:editBody,datetime}: {...post})
    setPosts(updatedPost)
    seteditTitle('');
    seteditBody('');
    navigate('/')
  }

  const handleDelete = (id) => {
    const postList = posts.filter(post => post.id !== id)
    setPosts(postList)
    navigate('/')
  }

  return (
    <div className='App'>
      <Header 
        title="TweetConnect"
      />
      <Nav 
        search={search}
        setSearch={setSearch}
      />
      <Routes>
        <Route path="/" element={<Home posts={searchResults}/>} />
        <Route path='post'>
          <Route index element={<NewPost
          postTitle={postTitle}
          postBody={postBody}
          setPostBody={setPostBody}
          setPostTitle={setPostTitle}
          handleSubmit={handleSubmit}
          />} />
          <Route path=':id' element={<PostPage posts={posts} handleDelete={handleDelete}/>} />
        </Route>
        <Route path='/edit/:id' element={<EditPost posts={posts} editBody={editBody} editTitle={editTitle}  handleEdit={handleEdit} seteditBody={seteditBody} seteditTitle={seteditTitle}/>}/>
        <Route path='*' element={<Missing />} />
        <Route path='about' element={<About />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
