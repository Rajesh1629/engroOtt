"use client"
import React, { useEffect, useState } from 'react'

const Header = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const data = ['Home', 'Movies', 'Shows']; 
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  const toggleDropdown = () => {
    setIsDropdownVisible((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <header className="header">
    <div className="left-header">
      {windowWidth > 986 &&<>
      <img alt="logo" loading="lazy" width="120" height="36" decoding="async" data-nimg="1" className="engroLogo" style={{"color":"transparent"}}  src="https://engro.io/images/engro_logo_header.svg"/>
      <ul className="nav navbar-nav">
        <li className="nav-item">
          <a className="" href="/">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="movie" href="/movie">
            Movies
          </a>
        </li>
        <li className="nav-item">
          <a className="movie" href="/series">
            Series
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/articles">
            Articles
          </a>
        </li>
      </ul>
      </>}

     {windowWidth < 986 &&
     <div>
     <svg
       xmlns="http://www.w3.org/2000/svg"
       width="24"
       height="24"
       viewBox="0 0 32 32"
       onClick={toggleDropdown}
       style={{ cursor: 'pointer' }}
     >
       <path fill="#ff0000" d="M3.5 10h25c.828 0 1.5-.672 1.5-1.5S29.328 7 28.5 7h-25C2.672 7 2 7.672 2 8.5S2.672 10 3.5 10zM28.5 15h-25C2.672 15 2 15.672 2 16.5S2.672 18 3.5 18h25c.828 0 1.5-.672 1.5-1.5S29.328 15 28.5 15zM28.5 23h-25C2.672 23 2 23.672 2 24.5S2.672 26 3.5 26h25c.828 0 1.5-.672 1.5-1.5S29.328 23 28.5 23z"></path>
     </svg>
   
     {isDropdownVisible && (
       <ul
         className="dropdown-menu"
         style={{
          
        }}
       >
         {data.map((item, index) => (
           <li key={index} style={{ padding: '8px', cursor: 'pointer' }}>
             {item}
           </li>
         ))}
       </ul>
     )}
   
     {/* Hidden dropdown for smoother transition when closing */}
     {!isDropdownVisible && (
       <ul
         className="dropdown-menu"
         style={{
           position: 'absolute',
           top: '100%',
           left: '0',
           backgroundColor: 'white',
           border: '1px solid #ccc',
           listStyleType: 'none',
           padding: '0',
           margin: '0',
           zIndex: 1000,
           opacity: 0,
           transform: 'translateY(-10px)',
           transition: 'opacity 0.3s ease, transform 0.3s ease',
         }}
       >
         {data.map((item, index) => (
           <li key={index} style={{ padding: '8px', cursor: 'pointer' }}>
             {item}
           </li>
         ))}
       </ul>
     )}
   </div>
   }
    </div>
    <div className="right-header">
    <li className="nav-item">
        <div className="nav-filter">
          <a className="nav-link openbtn">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
          <path fill="#fff" d="M 12 2 C 11.172 2 10.5 2.672 10.5 3.5 L 10.5 4.1953125 C 7.9131836 4.862095 6 7.2048001 6 10 L 6 16 L 4.4648438 17.15625 L 4.4628906 17.15625 A 1 1 0 0 0 4 18 A 1 1 0 0 0 5 19 L 12 19 L 19 19 A 1 1 0 0 0 20 18 A 1 1 0 0 0 19.537109 17.15625 L 18 16 L 18 10 C 18 7.2048001 16.086816 4.862095 13.5 4.1953125 L 13.5 3.5 C 13.5 2.672 12.828 2 12 2 z M 10 20 C 10 21.1 10.9 22 12 22 C 13.1 22 14 21.1 14 20 L 10 20 z"></path>
      </svg>
          </a>
        </div>
      </li>
      <li className="nav-item">
        <div className="nav-filter">
          <a className="nav-link openbtn">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50">
        <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z" fill="#fff"></path>
        </svg>
          </a>
        </div>
      </li>
      <li className="nav-item">
        <div className="nav-filter">
          <a className="nav-link openbtn">
            <svg
              className="filter-animate"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="#fff" d="M24 14v-4c-1.619 0-2.906.267-3.705-1.476-.697-1.663.604-2.596 1.604-3.596l-2.829-2.828c-1.033 1.033-1.908 2.307-3.666 1.575-1.674-.686-1.404-2.334-1.404-3.675h-4c0 1.312.278 2.985-1.404 3.675-1.761.733-2.646-.553-3.667-1.574l-2.829 2.828c1.033 1.033 2.308 1.909 1.575 3.667-.348.849-1.176 1.404-2.094 1.404h-1.581v4c1.471 0 2.973-.281 3.704 1.475.698 1.661-.604 2.596-1.604 3.596l2.829 2.829c1-1 1.943-2.282 3.667-1.575 1.673.687 1.404 2.332 1.404 3.675h4c0-1.244-.276-2.967 1.475-3.704 1.645-.692 2.586.595 3.596 1.604l2.828-2.829c-1-1-2.301-1.933-1.604-3.595l.03-.072c.687-1.673 2.332-1.404 3.675-1.404zm-12 2c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"></path>
            </svg>
          </a>
        </div>
      </li>
      <li className="nav-item">
        <div className="user-icon">
            <a href="">
             <img src="https://excellencetheme.com/templates/avastream/images/avatar/user.jpg" alt="logo" />
            </a>
        </div>
      </li>
    </div>
  </header>  )
}

export default Header