import React from 'react'


const SearchInputs = () => {
  return (
    <div className='search'>
    <div className="search-bar">
    <input type="text" placeholder="Job title or keyword"/>
    <input type="text" placeholder="Search city, state or remote"/>
    <button>Search Jobs</button>
    </div>
    </div>


 
  )
}

export default SearchInputs

