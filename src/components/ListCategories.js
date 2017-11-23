import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ListCategories = ({ categories }) => {
  return (
    <div className="b-container">
      <ul className="list-categories">
        { categories.map(category => (
          <li className="list-categories__item" key={category.name}>
            <Link to={`/category/${category.name}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

ListCategories.propTypes = {
  categories: PropTypes.array
};

export default ListCategories;
