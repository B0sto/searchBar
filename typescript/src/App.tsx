import { useState } from 'react';
import Search from './interface';

const SearchBar = ({ onSearch }: Search) => {
  const [inputValue, setInputValue] = useState('');

  const handleSearchClick = () => {
    onSearch(inputValue);
    setInputValue('');
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
};

const App = () => {
  const handleSearch = (query: string) => {
    console.log(query);
  };

  return (
    <div>
      <h1>Search</h1>
      <SearchBar onSearch={handleSearch} />
    </div>
  );
};

export default App;
