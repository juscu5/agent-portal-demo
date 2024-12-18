import React from "react";
import logo from '../../assets/tplogo.png';
import "./NavBar.scss";
import LinkManageCompany from "../../atoms/LinkManageCompany";
import LinkManageClientLinks from "../../atoms/LinkManageClientLinks";
import LinkCategory from "../../atoms/LinkCategory";
import UserAccountRoleLabel from "../../atoms/UserAccountRoleLabel";
import UADropdownItemLogout from "../../atoms/UADropdownItemLogout";

const navbar = () => {
  return (
    <div className="NavBar">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item">
            <img src={logo} class="imagelogo" />
          </a>

          <a
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <LinkManageCompany />
            <LinkManageClientLinks />
            <LinkCategory />
          </div>

          <div class="navbar-end">
            <div class="navbar-item has-dropdown is-hoverable logoutButton">
              <a class="navbar-link is-arrowless">
                <UserAccountRoleLabel />
              </a>

              <div class="navbar-dropdown is-right">
                <UADropdownItemLogout />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default navbar;

document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach((el) => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});
