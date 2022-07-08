import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
  let user = JSON.parse(localStorage.getItem("user"));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <header className={`${styles.navbar}`}>
      
      <Link
        to="/propertyList"
        style={{ color: "white", textDecoration: "none" }}
      >
        <div className={`${styles.navbar__item}`}>Add Agenda</div>
      </Link>
      <Link
        to="/createAd"
        style={{ color: "white", textDecoration: "none" }}
      >
      <div className={`${styles.navbar__item}`}>View/Edit Agenda</div>
      </Link>

  
    </header>
  );
}
