import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import './Nav.css';

function Nav() {
  useEffect(() => {
    // Scroll background effect
    const navbar = document.querySelector(".custom-navbar");
    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Multi-level dropdown handling
    document.querySelectorAll(".dropdown-submenu .dropdown-toggle").forEach((element) => {
      element.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        let submenu = this.nextElementSibling;
        if (submenu) {
          submenu.classList.toggle("show");
        }
      });
    });
    

    // Close submenu on outside click
    const closeSubmenus = () => {
      document.querySelectorAll(".dropdown-submenu .dropdown-menu").forEach((submenu) => {
        submenu.classList.remove("show");
      });
    };
    document.addEventListener("click", closeSubmenus);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", closeSubmenus);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg custom-navbar fixed-top">
      <div className="container-fluid">
        
       {/* Brand */}
<Link className="navbar-brand brand fs-4 d-flex align-items-center" to="/">
  <img 
    src="/logoimg.png" 
    alt="HomeStyler Logo" 
    style={{ height: "60px", width: "auto", marginRight: "10px" }} 
  />
  Home<span>Styler</span>
</Link>


        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto"> {/* Center links on large screens */}
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/aboutus">About Us</Link>
            </li>

            {/* Products Dropdown */}
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle " to="#" data-bs-toggle="dropdown">
                Products
              </Link>
              <ul className="dropdown-menu">
                {/* Furniture */}
                <li className="dropdown-submenu">
                  <Link className="dropdown-item " to="#">Furniture</Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/sofas">Sofas & Couches</Link></li>
                    <li><Link className="dropdown-item" to="/chairs">Chairs & Recliners</Link></li>
                    <li><Link className="dropdown-item" to="/tables">Tables</Link></li>
                    <li><Link className="dropdown-item" to="/beds">Beds & Mattresses</Link></li>
                    <li><Link className="dropdown-item" to="/storage">Storage</Link></li> 
                  </ul>
                </li>

                {/* Lighting */}
                <li className="dropdown-submenu">
                  <Link className="dropdown-item " to="#">Lighting</Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/ceiling">Ceiling Lights</Link></li>
                    <li><Link className="dropdown-item" to="/wall">Wall Lights</Link></li>
                    <li><Link className="dropdown-item" to="/floor">Floor Lamps</Link></li>
                      <li><Link className="dropdown-item" to="/tablelamps">Table Lamps</Link></li>
                        <li><Link className="dropdown-item" to="/outdoor">Outdoor Lighting</Link></li>
                  </ul>
                </li>

                {/* Decor */}
                <li className="dropdown-submenu">
                  <Link className="dropdown-item " to="#">Decor</Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/rugs">Rugs & Carpets</Link></li>
                    <li><Link className="dropdown-item" to="/curtains">Curtains & Blinds</Link></li>
                    <li><Link className="dropdown-item" to="/wall-art">Wall Art & Mirrors</Link></li>
                  </ul>
                </li>

                {/* Kitchen */}
                <li className="dropdown-submenu">
                  <Link className="dropdown-item " to="#">Kitchen</Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="#">Cabinets and Pantries</Link></li>
                    <li><Link className="dropdown-item" to="#">Countertops</Link></li>
                    <li><Link className="dropdown-item" to="#">Sinks and Faucets</Link></li>
                    <li><Link className="dropdown-item" to="#">Kitchen Islands and Carts</Link></li>
                    <li><Link className="dropdown-item" to="#">Backsplashes</Link></li>
                  </ul>
                </li>

                {/* Bathroom */}
                <li className="dropdown-submenu">
                  <Link className="dropdown-item " to="#">Bathroom</Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="#">Vanities and Cabinets</Link></li>
                    <li><Link className="dropdown-item" to="#">Showers and Bathtubs</Link></li>
                    <li><Link className="dropdown-item" to="#">Toilets and Bidets</Link></li>
                    <li><Link className="dropdown-item" to="#">Bathroom Sinks</Link></li>
                    <li><Link className="dropdown-item" to="#">Mirrors and Medicine Cabinets</Link></li>
                  </ul>
                </li>
              </ul>
            </li>

            {/* Design Styles Dropdown */}
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" data-bs-toggle="dropdown">
                Design Styles
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/living">Living Room</Link></li>
                <li><Link className="dropdown-item" to="/kitchen">Kitchen</Link></li>
                <li><Link className="dropdown-item" to="/bedroom">Bedroom</Link></li>
                <li><Link className="dropdown-item" to="/bathroom">Bathroom</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/feedback">Feedback</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactus">Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sitemap">Site Map</Link>
            </li>
          </ul>

          {/* Wishlist Button */}
          <button className="btn btn-outline-light ms-lg-3">
            <i className="bi bi-heart"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
