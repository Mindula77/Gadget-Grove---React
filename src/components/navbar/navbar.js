import './navbar.css';

function Navbar() {
  return (
    <div className="navbar">
       <div class="navbar">
            {/* <a href="Main Page.html"><img src="logo.png" class="logo"></a> */}
            <nav>
                <ul id="menulist">
                    <li><a href="Main Page.html">Home</a></li>
                    <li><a href="items.html">Items</a></li>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="about.html">Contact Us</a></li>
                    
                <a href="login page.html"><button class="btnlogin-popup">Login</button></a>
                </ul>
            </nav>
            {/* <img src="none" class="menu-icon" onclick="togglemenu()"> */}
              </div>
    </div>
  );
}

export default Navbar;
