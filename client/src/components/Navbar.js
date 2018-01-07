import React from "react";



const Navbar = () => (
<nav class = "white" role = "navigation"> 
    <div class="nav-wrapper container">
    <ul class="right hide-on-med-and-down">
        <li>
         Menu
        </li>
    </ul>

    <ul id="nav-mobile" class="side-nav">
        <li>
            <a href="#">Navbar Link</a>
        </li>
    </ul>
    <a href="#" data-activates="nav-mobile" class="button-collapse">
        <i class="material-icons">menu</i>
    </a>
</div> 
</nav>
);

export default Navbar;