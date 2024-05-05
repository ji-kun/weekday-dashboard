import React from 'react'

import '../styles/filters.css'
import { FILTER_ARRAY } from '../utils'
import FilterDropdown from './FilterDropdown'
import FilterSearch from './FilterSearch'

const Filters = ({setFilters}) => {
  return (
    <div className='filter-container'>
      {
        FILTER_ARRAY.map((filter) => {
          return (
            <React.Fragment key={filter.title}>
              {
                filter.title !== 'Search Company Name'
                ? <FilterDropdown setFilters={setFilters} filter={filter} />
                : <FilterSearch setFilters={setFilters} />
              }
            </React.Fragment>
          )
        })
      }
    </div>
  )
}

export default Filters