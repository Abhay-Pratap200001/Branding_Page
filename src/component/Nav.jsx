import React from "react";

function Nav() {
  return (
    <>
      <div>
        <nav className="container">
          <div className="Logo">
           <img src="/img/brand_logo.png" alt="Logo" />
          </div>
          <ul>
            <li href="#">Menu</li>
            <li href="#">Location</li>
            <li href="#">ABOUT</li>
            <li href="#">CONTACT</li>
          </ul>

          <button>Login</button>
        </nav>
      </div>
    </>
  );
}

export default Nav;
