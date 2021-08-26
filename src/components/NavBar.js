import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavBar({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className = "container">
  <a className="navbar-brand" href="#Home">Leone's Portfolio Page</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    <li className="nav-item active">
<a
    href="#home"
    onClick={() => handlePageChange('Home')}

    className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
  >
  Home
</a>
</li>
<li className="nav-item">
<a
    href="#portfolio"
    onClick={() => handlePageChange('Portfolio')}

    className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
  >
    Portfolio
  </a>
</li>
<li className="nav-item">
<a
    href="#resume"
    onClick={() => handlePageChange('Resume')}

    className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
  >
    Resume
  </a>
</li>
<li className="nav-item">
<a
    href="#contact"
    onClick={() => handlePageChange('Contact')}

    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
  >
    Contact
  </a>
</li>
</ul>
  </div>
  </div>
</nav>
  )}

export default NavBar;
