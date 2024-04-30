import React from 'react'

const Filter = (onCategoryChange) => {
    const handleChange = (event) => {
        const selectedCategory = event.target.value;
        onCategoryChange(selectedCategory);
      };
    
  return (
    <div className='FilterContainer'>
        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      
    </div>
  )
}

export default Filter
