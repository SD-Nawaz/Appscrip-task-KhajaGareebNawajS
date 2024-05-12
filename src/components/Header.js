import React from 'react'
import {SVG_MAIN_LOGO, SEARCH_SVG, LIKE_SVG, CART_SVG, USER_SVG} from '../utils'

const Header = () => {
  return (
    <div className='header-container'>
      <div className='header_logo_container'>
        <div className='header_applogo_container'>
          {SVG_MAIN_LOGO}
          <p className='p_logo'>LOGO</p>
        </div>

        <div className='header_morelogos_container'>
          {SEARCH_SVG}
          {LIKE_SVG}
          {CART_SVG}
          {USER_SVG}
          <select className='eng_para'>
            <option>ENG</option>
            <option>KAN</option>
            <option>HINDI</option>
          </select>
        </div>
      </div>

      <div className='header_navigation_section_container'>
        <div className='header_navigation_section'>
          <p>SHOP</p>
          <p>SKILLS</p>
          <p>STORIES</p>
          <p>ABOUT</p>
          <p>CONTACT US</p>
        </div>
      </div>

      <div className='header_title_section'>
        <p className='header_title_para'>DISCOVER OUR PRODUCTS</p>
        <p className='header_para_info'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. In molestiae
          quod ullam dolores, eius commodi a explicabo deserunt earum doloribus
          nobis odit.
        </p>
      </div>
    </div>
  )
}

export default Header
