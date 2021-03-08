import React from 'react';
import search from 'assets/icons/search.svg';

const SearchInput = () => (
  <div className="mb-1">
    <input
      type="text"
      style={{
        backgroundImage: `url(${search})`,
        backgroundSize: '16px',
        backgroundPosition: '16px 50%',
        backgroundRepeat: 'no-repeat',
      }}
      className="form-control border-0 pl-5"
      id="das"
    ></input>
  </div>
);

export default SearchInput;
