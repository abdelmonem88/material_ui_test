/* eslint-disable jsx-a11y/no-distracting-elements */
import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <div>
        <marquee scrollamount='5' direction='left'>
          About
        </marquee>
        <br />
        <Link to='/'>Home</Link>
      </div>
    </div>
  );
}

export default About;
