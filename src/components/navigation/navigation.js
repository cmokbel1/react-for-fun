import { render } from '@testing-library/react';
import React from 'react';

const Navigation = () => {
 return (
   <nav>
     <ul>
       <a href="/"><li>Link 1</li></a>
       <a href="/"><li>Link 1</li></a>
       <a href="/"><li>Link 1</li></a>
     </ul>
     <p>Branded Message</p>
     <label htmlFor="lUsername">username:</label>
      <input type="text" id="lUsername" required></input>
      <label htmlFor="lPassword">password:</label>
      <input type="password" id="lPassword" required></input>
      <button type="submit">login</button>
   </nav>
 )
}

export default Navigation 