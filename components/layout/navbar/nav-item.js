import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import DropdownMenu from "./dropdown-menu";
import MegaMenu from "./mega-menu";
import Link from "next/link";

export default function NavItem({ navItemText, menuItems, megaMenu = false, href }) {
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const handleClick = (e) => {
    setIsOpenDropDown(!isOpenDropDown);
  };

  return (
    <li className={`nav-item ${menuItems ? "nav-item-has-children" : ""}`}>
      <a href={menuItems.length === 0 ? href : "#"} className="nav-link-item drop-trigger" onClick={handleClick}>
        {navItemText}
		{menuItems.length > 0 && <FontAwesomeIcon icon={faAngleDown} />}
      </a>

      {menuItems.length > 0 ? (
        <DropdownMenu isOpenDropDown={isOpenDropDown} menuItems={menuItems} />
      ) : (
        <></>
      )}
      {megaMenu && <MegaMenu menuItems={menuItems} />}
    </li>
    // <DropdownMenu isOpenDropDown={isOpenDropDown} menuItems={menuItems} />
  );
}
