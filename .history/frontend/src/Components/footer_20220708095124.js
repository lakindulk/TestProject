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
          Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
          euismod convallis velit, eu auctor lacus vehicula sit amet.
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
