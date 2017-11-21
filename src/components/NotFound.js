import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = ({ location }) => {
  return (
    <div className="b-container">
      <Link to='/' className="container__return fa fa-arrow-left">
        <spam>Back</spam>
      </Link>
      <div className="container__section">
        <p>No match for ${location.pathname}</p>
      </div>
    </div>
  );
};

export default NotFound;
