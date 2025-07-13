import { useEffect, useState } from 'react';
import "./NAv.css";
function SearchableDropdown({ options, onSelect }) {
  const [searchValue, setSearchValue] = useState('');
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    var limit=0;
   
    setFilteredOptions(
      
      options.filter(option => {
        if (limit >= 5) return false;
        if (option.strArea!=="") {
          if(option.strArea.toLowerCase().includes(searchValue.toLowerCase())){
             limit++;
          
          return true;
          }
        return false;
        }
        return false;
      }
      )
    );
    if(searchValue==""){
      setIsOpen(false);
    }
    
  }, [searchValue]);

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
    setIsOpen(true); // Open dropdown when typing
   
    
  };

  const handleOptionClick = (option) => {
    setSearchValue(option);
    onSelect(option);
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div className="searchable-dropdown">
      <input
        type="text"
        placeholder="Search your Cusine"
        value={searchValue}
        onChange={handleInputChange}
        
         />
      {isOpen && (
        <ul className="options-list " >
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <li key={option.strArea} className="options" onClick={() => handleOptionClick(option.strArea)}>
                {option.strArea}
              </li>
            ))
          ) : (
            <li>No matching options</li>
         
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchableDropdown;