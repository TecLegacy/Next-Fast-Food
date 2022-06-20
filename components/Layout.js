import React from 'react';
// import Footer from './Footer';
// import NavBar from './NavBar';
import NavBar from './NavBar';
import Footer from './Footer';
const Layout = props => {
  return (
    <React.Fragment>
      <NavBar />
      {props.children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
