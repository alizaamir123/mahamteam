import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import Home from './Home'

import Contactus from './Contactus'
import Sitemap from './Sitemap'
import Aboutus from './Aboutus'
import Feedback from './Feedback'
import Living from './Living'
import Kitchen from './Kitchen'
import Bedroom from './Bedroom'
import Bathroom from './Bathroom'
import Sofas from './Sofas'
import Beds from './Beds'
import Chairs from './Chairs'
import Tables from './Tables'
import Storage from './Storage'
import Wall from "./Wall";
import Ceiling from "./Ceiling";
import Tablelamps from "./Tablelamps";
import Floor from "./Floor";
import Outdoor from "./Outdoor";



import Nav from './Nav';
import Footer from './Footer';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/contactus" element={<Contactus />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/living" element={<Living />} />
          <Route path="/bedroom" element={<Bedroom />} />
          <Route path="/bathroom" element={<Bathroom />} />
          <Route path="/kitchen" element={<Kitchen />} />
          <Route path="/beds" element={<Beds />} />
          <Route path="/chairs" element={<Chairs />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/sofas" element={<Sofas />} />
          <Route path="/storage" element={<Storage />} />
          <Route path="/wall" element={<Wall />} />
          <Route path="/ceiling" element={<Ceiling />} />
          <Route path="/tablelamps" element={<Tablelamps />} />
          <Route path="/floor" element={<Floor />} />
          <Route path="/outdoor" element={<Outdoor />} />
        
          <Route path="/nav" element={<Nav />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </Router>

    </>
  )
}

export default App