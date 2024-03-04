import React from 'react';
import Nav from '../components/Navbar';
import Footer from '../components/Footer';
import Error404 from '../components/Error404';

const Page404 = () => {
  return (
    <div>
      <Nav />
      <Error404 />
      <Footer />
    </div>
  );
};

export default Page404;