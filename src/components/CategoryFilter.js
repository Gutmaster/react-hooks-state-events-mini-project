import React from "react";

function CategoryFilter({categories, selectCategory, curCat}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => <button className={category === curCat ? 'selected' : null} key={category} onClick={() => selectCategory(category)}>{category}</button>)}
    </div>
  );
}

export default CategoryFilter;
