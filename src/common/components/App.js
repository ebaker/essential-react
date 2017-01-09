import React from 'react';
import Header from './header/page';


export default ({children}) => {
  return (
    <div>
      <Header />
      <div id="container">
        {children}
      </div>
    </div>
  );
}
