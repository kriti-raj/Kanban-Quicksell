import React, { useState } from 'react';
import './Dropdown.css'
import './Dropdown.css'

const Dropdown = ({ setGroupingValue, setOrderingValue }) => {
  const [selectedValue, setSelectedValue] = useState(localStorage.getItem('grouping'));
  const [selectedValueorder, setSelectedValueorder] = useState(localStorage.getItem('order'));
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
    setGroupingValue(`${event.target.value}`);
    localStorage.setItem('grouping', `${event.target.value}`);
  };

  const handleSelectChangeorder = (event) => {
    setSelectedValueorder(event.target.value);
    setOrderingValue(`${event.target.value}`);
    localStorage.setItem('order', `${event.target.value}`);
  };

  return (
    <>
      <div className='dropdown'>
        <ul>Grouping <div>
          <select name="grouping" value={selectedValue} onChange={handleSelectChange} >
            <option value="status"  >Status</option>
            <option value="priority" >Priority</option>
            <option value="user">User</option>
          </select>
        </div>
        </ul>
        <ul>Ordering<div>
          <select name="ordering" value={selectedValueorder} onChange={handleSelectChangeorder} >
            <option value="Priority">Priority</option>
            <option value="Title">Title</option>
          </select>
        </div>
        </ul>
      </div>
    </>
  );
}

export default Dropdown;
