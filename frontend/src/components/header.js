import React from "react";
import {Link} from 'react-router-dom';

function Header(){

return(
<nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">TOUR PACKAGE MANAGER</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          
         <a class="nav-link" href="/">PACKAGE HOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/add">CREATE NEW PACKAGES</a>
         
        </li>
        
        <li class="nav-item">
          <a class="nav-link" href="#">EDIT PACKAGES</a>
         
        </li>
       
        
      </ul>
    </div>
  </div>
</nav>

)

}

export default Header;