import Footer from "./Footer";
import Nav from "./Nav";
import "./Sitemap.css";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function Sitemap() {
  return (
    <>
      <Nav />

      {/* Hero Section */}
      <section className="site hero-section text-center text-white d-flex flex-column justify-content-center">
        <div className="site container animate-heading">
          <h1 className="site fw-bold display-4">Site Map</h1>
        </div>
      </section>

      {/* Sitemap Section */}
      <div className="sitemap">
        <div className="sitemap-container">

          {/* Pages */}
          <div className="sitemap-column">
            <h3>PAGES</h3>
            <ul>
              <li><FaArrowRight /><Link to="/">Home</Link></li>
              <li><FaArrowRight /><Link to="/aboutus">About</Link></li>
              <li><FaArrowRight /><Link to="/contactus">Contact Us</Link></li>
              <li><FaArrowRight /><Link to="/feedback">Feedback</Link></li>
            </ul>
          </div>

          {/* Furniture */}
          <div className="sitemap-column">
            <h3>FURNITURE</h3>
            <ul>
              <li><FaArrowRight /><Link to="/sofas">Sofas & Couches</Link></li>
                     <li><FaArrowRight /><Link to="/chairs">Chairs & Recliners</Link></li>
              <li><FaArrowRight /><Link to="/tables">Tables</Link></li>
              <li><FaArrowRight /><Link to="/beds">Beds & Mattresses</Link></li>
              <li><FaArrowRight /><Link to="/storage">Storage</Link></li>
            </ul>
          </div>

          {/* Lighting */}
          <div className="sitemap-column">
            <h3>LIGHTING</h3>
            <ul>
              <li><FaArrowRight /><Link to="/ceiling">Ceiling Lights</Link></li>
              <li><FaArrowRight /><Link to="/wall">Wall Lights</Link></li>
              <li><FaArrowRight /><Link to="/floor">Floor Lamps</Link></li>
              <li><FaArrowRight /><Link to="/tablelamps">Table Lamps</Link></li>
              <li><FaArrowRight /><Link to="/outdoor">Outdoor Lighting</Link></li>
            </ul>
          </div>

          {/* Decor */}
          <div className="sitemap-column">
            <h3>DECOR</h3>
            <ul>
              <li><FaArrowRight /><Link to="/rugs">Rugs and Carpets</Link></li>
              <li><FaArrowRight /><Link to="/curtains">Curtains and Blinds</Link></li>
              <li><FaArrowRight /><Link to="/wall-art">Wall Art and Mirrors</Link></li>
              <li><FaArrowRight /><Link to="/cushions">Cushions and Throws</Link></li>
              <li><FaArrowRight /><Link to="/vases">Vases and Plant Pots</Link></li>
            </ul>
          </div>

          {/* Kitchen */}
          <div className="sitemap-column center-column">
            <h3>KITCHEN</h3>
            <ul>
              <li><FaArrowRight /><Link to="/cabinets">Cabinets and Pantries</Link></li>
              <li><FaArrowRight /><Link to="/countertops">Countertops</Link></li>
              <li><FaArrowRight /><Link to="/sinks">Sinks and Faucets</Link></li>
              <li><FaArrowRight /><Link to="/kitchen-islands">Kitchen Islands and Carts</Link></li>
              <li><FaArrowRight /><Link to="/bathroom-mirrors">Mirrors and Medicine Cabinets</Link></li>
            </ul>
          </div>
             {/* Bathroom */}
          <div className="sitemap-column">
            <h3>BATHROOM</h3>
            <ul>
              <li><FaArrowRight /><Link to="/vanities">Vanities and Cabinets</Link></li>
              <li><FaArrowRight /><Link to="/showers">Shower and Bathtubs</Link></li>
              <li><FaArrowRight /><Link to="/toilets">Toilets and Bidets</Link></li>
              <li><FaArrowRight /><Link to="/bathroom-sinks">Bathroom Sinks</Link></li>
              <li><FaArrowRight /><Link to="/mirrors">Mirrors and Medicine Cabinets</Link></li>
            </ul>
          </div>

          {/* Design Styles */}
          <div className="sitemap-column center-column">
            <h3>DESIGN STYLES</h3>
            <ul>
              <li><FaArrowRight /><Link to="/living">Living Room</Link></li>
              <li><FaArrowRight /><Link to="/bedroom">Bedroom</Link></li>
              <li><FaArrowRight /><Link to="/kitchen">Kitchen</Link></li>
              <li><FaArrowRight /><Link to="/bathroom">Bathroom</Link></li>
            </ul>
          </div>

       
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Sitemap;
