import React from 'react'

import '../styles/filters.css'

const FilterSearch = ({setFilters}) => {
  const handleInputChange = (value) => {
    setFilters(prev => ({...prev, name: value}))
  }

  return (
    <input
      placeholder='Search Company Name'
      onChange={(e) => handleInputChange(e.target.value)}
      className='dropdown-title input'
    />
  )
}

export default FilterSearch