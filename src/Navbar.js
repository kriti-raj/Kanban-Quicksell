import React, { useEffect, useRef, useState, useCallback } from 'react';
import Dropdown from './Dropdown.js';
import { icons } from "./assets/assets.js";

const Navbar = ({ order, grouping, setGroupingValue, setOrderingValue }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = useCallback((event) => {
    if (isDropdownOpen && !dropdownRef.current?.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  }, [isDropdownOpen]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <nav className='randombar'>
      <div className='topBar' onClick={() => setIsDropdownOpen(prev => !prev)}>
        <img 
          src={icons.Display} 
          className='optionsImg' 
          alt='Display icon'
        />
        <button className='button'>Display</button>
        <img 
          src={icons.Down} 
          className='optionsImg2' 
          alt='Dropdown arrow'
        />
      </div>
      {isDropdownOpen && (
        <div ref={dropdownRef}>
          <Dropdown
            order={order}
            grouping={grouping}
            setGroupingValue={setGroupingValue}
            setOrderingValue={setOrderingValue}
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;