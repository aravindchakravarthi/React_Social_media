import React from 'react'

const Footer = () => {
  const year = new Date();
  return (
    <div className='Footer'>
      <p> Copyright &copy; {year.getFullYear()}</p>
    </div>
  )
}

export default Footer
