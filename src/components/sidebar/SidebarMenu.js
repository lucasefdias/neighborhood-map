import React from 'react'
import PropTypes from 'prop-types'
import SearchBar from './SearchBar.js';
import SidebarItem from './SidebarItem.js'
import '../../App.css';

class SidebarMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state= {
            isTextFilterOn : false
        };
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
    // Toggle methods
    resetTextFilter = () => {
        this.setState({
          isTextFilterOn: false
        });
    }
    turnTextFilterOn = () => {
        this.setState({
          isTextFilterOn: true
        });
    }

    // Click filter methods
    filterByClick = (venue) => {
        this.props.filterByClick(venue);
    }
    resetFilter = () => {
        this.props.resetFilter();
        this.resetTextFilter();
    }

    render() {
        // Get relevant props and state
        const isTextFilterOn = this.state.isTextFilterOn;
        const selectedVenues = this.props.selectedVenues;

        // Store component context
        const sidebarMenuComponent = this;

        // Elements to be rendered
        let renderedList = [];

        // Check if there are any selected venues and iterate through array to build list
        if(selectedVenues) {
            selectedVenues.forEach(function(venue){
                renderedList.push(<SidebarItem
                                    key={venue.id}
                                    isTextFilterOn={isTextFilterOn}
                                    venue={venue}
                                    filterByClick={sidebarMenuComponent.filterByClick}
                                    resetFilter={sidebarMenuComponent.resetFilter}
                                    resetTextFilter={sidebarMenuComponent.resetTextFilter}/>);
            });
        }

        return (
            <div id="sidebarMenuContainer">
                <SearchBar
                    onChange={this.updateQuery}
                    queryString={this.props.queryString}
                    turnTextFilterOn={this.turnTextFilterOn}
                    resetVenue={this.resetVenue} />
                <div id="sidebarMenu">
                    <ul>
                      {renderedList}
                    </ul>
                </div>
            </div>
        );
    }
}

// Add PropTypes
SidebarMenu.propTypes = {
    queryString: PropTypes.string,
    selectedVenues: PropTypes.array,
    filterByClick: PropTypes.func,
    resetFilter: PropTypes.func,
    resetVenue: PropTypes.func,
    updateQuery: PropTypes.func
};

export default SidebarMenu;
