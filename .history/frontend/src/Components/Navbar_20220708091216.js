import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function NavBar() {


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
