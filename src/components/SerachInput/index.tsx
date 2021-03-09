import React, { FC, useState, useEffect } from 'react';
import search from 'assets/icons/search.svg';

interface IProps {
  getQuery(q: string): void;
}

const SearchInput: FC<IProps> = ({ getQuery }) => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const handleSearch = (q: string) => getQuery(q);
    const delay = setTimeout(() => {
      handleSearch(searchTerm);
    }, 700);

    return () => clearTimeout(delay);
  }, [searchTerm, getQuery]);

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
        onChange={(e) => setSearchTerm(e.target.value)}
      ></input>
    </div>
  );
};

export default SearchInput;
