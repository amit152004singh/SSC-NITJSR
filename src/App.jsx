import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import About from './components/About';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Events from './components/Events';



const Layout = ({ children }) => (
  <>
    <NavBar />
    {children}
    <Events/>
  </>
);

const App = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  </Router>
);

export default App;