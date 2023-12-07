import React from 'react'
import { SiWalletconnect } from "react-icons/si";
const Header = ({title}) => {
  return (
    <div className='Header'>
      <SiWalletconnect />

      <h1 className='hcontent'> {title}</h1>
    </div>
  )
}

export default Header
