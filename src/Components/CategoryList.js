import React from 'react';
import './CategoryList.css'
const CategoryList = ({ categories }) => {
  return (
    
      
      <div className="category-list-container">
      <div className="category-list">
        {categories.map((category, index) => (
          <div key={index} className="category-item">
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
