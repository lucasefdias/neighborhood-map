import React from 'react'
import '../App.css';

// --------------------------------------------
// Navbar components
// --------------------------------------------
const Navbar = () => (
    <header className="App-header">
        <nav className="Navbar">
            <a className="Navbar-brand" href="/">Neighborhood Map</a>
            <div className="Api-attribution">
                Powered by Google Maps and Foursquare API data
            </div>
        </nav>
    </header>
);

export default Navbar;
