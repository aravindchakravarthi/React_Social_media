import React from 'react'
import { Link } from 'react-router-dom';


const Nav = ({search, setSearch}) => {
  return (
    <div className='Nav'>
        <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
            <label htmlFor='search'>Search Posts</label>
            <input
                id='search'
                type='text'
                value={search}
                placeholder="&#61442;  Search Posts"
                className="mainLoginInput"
                onChange={(e) => setSearch(e.target.value)}
             />
        </form>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/post">New Post</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
    </div>

  )
}

export default Nav
