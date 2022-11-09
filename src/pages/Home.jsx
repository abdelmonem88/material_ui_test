import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <marquee scrollamount='5' direction='right'>
        Home
      </marquee>
      <br />
      <Link to='about'>About</Link>
    </div>
  );
}

export default Home;
