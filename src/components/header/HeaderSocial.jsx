import React from 'react'
import{BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa';

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
<a href="https://www.linkedin.com/in/heba-alhamaydh/" target='_blank'><BsLinkedin/></a>
<a href="https://github.com/hebaAlhamaydh/" target='_blank'> <FaGithub/> </a>

    </div>
  )
}

export default HeaderSocial;