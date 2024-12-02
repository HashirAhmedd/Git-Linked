import React, { useState } from "react";
import "./HamburgerMenu.css"; 
import DropdownWithSelection from "./DropdownWithSelection";
import { useNavigate } from 'react-router-dom';

const HamburgerMenu = ({userId}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();
  function gotoLikedRepos(){
      navigate("/LikedRepos", { state: { userId } })
  }


  return (
    <>
      {/* Hamburger Icon */}
      <div className="hamburger-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Sliding Menu */}
      <div className={`side-menu ${isOpen ? "open" : ""}`}>
        <button className="close-button" onClick={toggleMenu}>
          &times;
        </button>

        <button className="btn btn-secondary likedRepos" onClick={gotoLikedRepos}>Liked Repositries</button>

        {/* Inputs inside the menu */}
        <div className="input-container">
          {/* Dropdown for Repo Programming Language */}
          <DropdownWithSelection
            label="Repo Programming Language"
            options={[
              "JavaScript",
              "Python",
              "Java",
              "C#",
              "Ruby",
              "Go",
              "TypeScript",
            ]}
          />


        </div>
      </div>
      
    </>
  );
};

export default HamburgerMenu;
