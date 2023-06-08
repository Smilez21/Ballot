import React from 'react';
import NomineeCard from './NomineeCard';

const CategoryList = ({ categories, selections, handleSelection }) => {
  return (
    <div className="category-list">
      {categories.map(category => (
        <div key={category.id} className="category">
          <h3>{category.name}</h3>
          <div className="nominee-list">
            {category.nominees.map(nominee => (
              <NomineeCard
                key={nominee.id}
                nominee={nominee}
                selected={selections[category.id] === nominee.id}
                handleSelection={() => handleSelection(category.id, nominee.id)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
