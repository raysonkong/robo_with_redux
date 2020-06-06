import React from 'react';

const SearchBox = ({onSearchfieldChange}) => {
  return (
    <div>
      <input
      className="ma2 pa2 f3 br3"
      type="text"
      placeholder="Search Robots..."
      onChange={onSearchfieldChange}
      />
    </div>
  )
}

export default SearchBox;