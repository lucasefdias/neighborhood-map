import React from 'react'
import SidebarMenu from './sidebar/SidebarMenu.js'
import PropTypes from 'prop-types'
import '../App.css';

// --------------------------------------------
// Sidebar components
// --------------------------------------------
class Sidebar extends React.Component {

    // Set a constructor
    constructor(props) {
        super(props);
    }

    // -------------------------------
    // SearchBar methods
    // -------------------------------
    updateQuery = (queryString) => {
        this.props.updateQuery(queryString);
    }
    resetVenue = () => {
        this.props.resetVenue();
    }

    // -------------------------------
    // SidebarItem select methods
    // -------------------------------
    filterByClick = (venue) => {
        this.props.filterByClick(venue);
    }
    resetFilter = () => {
        this.props.resetFilter();
    }

    render() {
        return (
            <nav className="Sidebar" role="navigation">
                <div id="menuToggle">
                    {/*
                    A hidden checkbox is used as click reciever,
                    so we can use the :checked selector on it
                    */}
                    <input id="Sidebar-toggle" type="checkbox" />

                    {/* Menu icon*/}
                    <span></span>
                    <span></span>
                    <span></span>

                    {/* Sidebar is displayed when the menu icon is clicked*/}
                    <SidebarMenu
                        selectedVenues={this.props.selectedVenues}
                        queryString={this.props.queryString}
                        updateQuery={this.updateQuery}
                        resetVenue={this.resetVenue}
                        filterByClick={this.filterByClick}
                        resetFilter={this.resetFilter}/>
                </div>
            </nav>
        );
    }
}

// Add PropTypes
Sidebar.propTypes = {
    queryString: PropTypes.string,
    selectedVenues: PropTypes.array,
    filterByClick: PropTypes.func,
    resetFilter: PropTypes.func,
    resetVenue: PropTypes.func,
    updateQuery: PropTypes.func
};


export default Sidebar;
