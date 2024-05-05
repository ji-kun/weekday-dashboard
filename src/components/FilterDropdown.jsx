import React, { useRef, useState } from 'react'
import useOutsideClick from '../hooks/useOutsideClick';

const FilterDropdown = ({filter, setFilters}) => {
  const [value, setValue] = useState(0)
  const [showDropdown, setShowDropdown] = useState(false)

  const anchorRef = useRef(null)
  // useOutsideClick(anchorRef, () => setShowDropdown(false))

  const handleValueChange = (value) => {
    setValue(value)
    setShowDropdown(false)

    if(filter.title === 'Roles') {
      setFilters(prev => ({...prev, roles: value}))
    } else if(filter.title === 'Experience') {
      setFilters(prev => ({...prev, experience: value}))
    } else if(filter.title === 'Minimum Base Pay Salary') {
      setFilters(prev => ({...prev, salary: value === 0 ? value : value.substring(0, value.length - 1)}))
    }
  }

  return (
    <div className='dropdown-container'>
      <div 
        className={`dropdown-title ${showDropdown && 'active'}`}
        style={{ minWidth: filter.minWidth }}
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {value === 0 
          ?<>{filter.title}</>
          : <>{value} &nbsp;
              <div onClick={() => {
                handleValueChange(0);
              }}>&#10005;</div>
            </>
        }
        <div
          className='dropdown-box'
        >
          <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" class="css-8mmkcg">
            <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z">
            </path>
          </svg>
        </div>
      </div>
      {showDropdown
       ?
       <div ref={anchorRef} className='dropdown'>
         {
           filter.values.map((value) => {
             return (
               <div 
                key={value}
                onClick={() => {
                  handleValueChange(value)
                }}
                className='dropdown-item'
               >{value}</div>
             )
           })
         }
       </div>
       : null
      }
    </div>
  )
}

export default FilterDropdown