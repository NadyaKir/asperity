import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Avatar } from "@mui/material";
import { dropdownOptions } from "../../../json";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left align-middle">
      <button
        type="button"
        onClick={toggleDropdown}
        className="py-1.5 px-4 rounded-[18px] border-2 border-iconPrimary"
      >
        <div className="flex items-center">
          <Avatar
            alt="Remy Sharp"
            src="/assets/avatars/avatar.png"
            sx={{ width: 24, height: 24 }}
          />
          <ChevronDown color="#E1E3E6" />
        </div>
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg  focus:outline-none">
          <div
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {dropdownOptions.map((option, index) => (
              <a
                key={index}
                href="#"
                className="block px-4 py-2 text-sm bg-bgPrimary hover:bg-transparentContrastHover focus:bg-transparentContrastFocused"
                role="menuitem"
              >
                {option}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
