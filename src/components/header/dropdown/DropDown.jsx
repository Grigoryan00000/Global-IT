import React, { useState, useRef, useEffect } from 'react';
import './DropDown.scss';

export const DropDown = ({ options,setLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [filter, setFilter] = useState(1);
  const dropdownRef = useRef(null);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  console.log(options[0].image);
  const img = options[0].image

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef} style={{background: isOpen ? "#40404099": "none", backdropFilter: isOpen ? "blur(24px)": "blur(0)"}}>
      <div className="dropdown-header" onClick={handleToggleDropdown}>
        {selectedOption ? (
          <>
            <img src={selectedOption.image} alt={selectedOption.label} className="dropdown-header-image" style={{width: "30px"}}/>
          </>
        ) : (
          <img src={img} alt="" style={{width: "30px"}} />
        )}
        <span className="dropdown-arrow" style={{color: "white", fontSize: "12px"}}>{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && (
         <div className="dropdown-options">
         {options.map((option, index) => (
           option.id !== filter ? (
             <div
             style={{background: isOpen ? "#40404099": "none", backdropFilter: isOpen ? "blur(24px)": "blur(0)"}}
               key={index}
               className="dropdown-option"
               onClick={() => {
                
                 handleOptionClick(option);
                 setLang(option.lang);
                 setFilter(option.id)
                }
               }
             >
               <img src={option.image} alt={option.label} className="dropdown-option-image" style={{width: "30px"}}/>
             </div>
           ) : null
         ))}
       </div>
      )}
    </div>
  );
};
