import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="b-container">
      <Link to='/' className="container__return fa fa-arrow-left">
        <spam>Back</spam>
      </Link>
      <div className="container__section">
        <p>Not found. Please, go back to home and try again.</p>
      </div>
    </div>
  );
};

export default NotFound;
