import React, { FC } from 'react';
import search from 'assets/icons/search.svg';

interface IProps {
  getQuery(q: string): void;
}

const SearchInput: FC<IProps> = ({ getQuery }) => {
  const handleSearch = (q: string) => getQuery(q);

  return (
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
        id="search"
        onChange={(e) => handleSearch(e.target.value)}
      ></input>
    </div>
  );
};

export default SearchInput;
