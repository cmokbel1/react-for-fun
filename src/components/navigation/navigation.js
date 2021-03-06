import React from 'react';

const Navigation = () => {

  return (
    <nav>
      <div className="left-side">
        <a className="brand-name" href="/">Brand Name</a>
        <div className="links">
          <a href="/">Link 1</a>
          <a href="/">Link 2</a>
          <a href="/">Link 3</a>

        </div>
      </div>
      <div className="right-side">
        <span id="brandMessage">Branded Message</span>
        <div id="loginSection">
          <div id="username">
            <label htmlFor="lUsername">username:</label>
            <input type="text" id="lUsername" required></input>
          </div>
          <div id="password">
            <label htmlFor="lPassword">password:</label>
            <input type="password" id="lPassword" required></input>
          </div>
          <button type="submit">login</button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation 