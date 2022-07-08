import React from "react";
import  "./footer.css";
import { FaFacebookF, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function NavBar() {
  return (
    <footer class="footer-distributed">
      <div class="footer-left">
      
        <p class="footer-links">
          <a href="/"  hclass="link-1">
            Home
          </a>
        </p>

        <p class="footer-company-name">
          © Copyright Lakindu Kavishka | All Rights Reserved
        </p>
      </div>


      <div class="footer-center">
        <p class="footer-company-about">
          <span>About </span>
          Simple application using React simple CRUD operation Form validations added  
          Used Git for the test project and aded commits.
        </p>

        <div class="footer-icons">
          <a href="/">
            <FaFacebookF />
          </a>
          <a href="/">
            <FaTwitter />
          </a>
          <a href="/"> 
            <FaLinkedin />
          </a>
          <a href="/">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}
