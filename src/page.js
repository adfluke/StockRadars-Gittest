import React from 'react';
import { Link } from 'react-router-dom';

const Page = () => {
  return (
    <div>
      <h1>This is the Page</h1>
      <Link to="/data">Go to Data Page</Link>
      <br />
      <Link to="/form">Go to Form Page</Link>
    </div>
  );
};

export default Page;
