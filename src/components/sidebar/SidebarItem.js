import React from 'react'
import PropTypes from 'prop-types'
import '../../App.css';

class SidebarItem extends React.Component {

    constructor(props) {
        super(props);
        this.state= {
            isToggleOn : false,
        };
    }

    // -------------------------------
    // Toggle methods
    // -------------------------------
    resetToggle = () => {
        this.setState({
            isToggleOn: false
        });
    }
    toggleSelection = () => {
        this.setState(state => ({
          isToggleOn: !state.isToggleOn
      }), this.filterMethod);
    }

    // -------------------------------
    // Filter methods
    // -------------------------------
    filterMethod = () => {
        // Choose appropriate method
        if(this.state.isToggleOn) {
            this.filterByClick();
        } else {
            this.resetFilter();
        }
        // Signal that venues are being filtered by selection, not by text
        this.props.resetTextFilter();
    }
    filterByClick = () => {
        this.props.filterByClick(this.props.venue);
    }
    resetFilter= () => {
        this.props.resetFilter();
    }

    render() {
        // Get props
        const key = this.props.venue.id;
        const name = this.props.venue.name;
        const isTextFilterOn = this.props.isTextFilterOn;

        // Build CSS class and method
        var itemClass = "Sidebar-item";

        // Manage CSS on filter state
        if(!isTextFilterOn) {
            if(this.state.isToggleOn) {
                itemClass += " Highlight";
            }
        }

        return (
            <li id={key} className={itemClass} onClick={this.toggleSelection}>{name}</li>
        );
    }
}

// Add PropTypes
SidebarItem.propTypes = {
    venue: PropTypes.object,
    filterByClick: PropTypes.func,
    isTextFilterOn: PropTypes.func,
    resetTextFilter: PropTypes.func
};

export default SidebarItem;
