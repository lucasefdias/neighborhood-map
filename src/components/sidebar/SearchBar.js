import React from 'react'
import PropTypes from 'prop-types'

const SearchBar = props => {

    // -------------------------------
    // Text input methods
    // -------------------------------
    const onQueryChange = (e) => {
        // Update query string with new query
        const queryString = sanitizeInput(e.target.value);
        props.onChange(queryString);
        // Reset any toggled SidebarItem
        props.turnTextFilterOn();
        // Reset selected venue
        props.resetVenue();
    }
    // Sanitize text search
    const sanitizeInput = (string) => {
        return string.trim().toLowerCase();
    }

    return (
      <div id="searchBarDiv">
        <input
          id="searchVenue"
          onChange={onQueryChange}
          type="text"
          placeholder="Search a venue"
          value={props.queryString} />
     </div>
  );
}


// Add PropTypes
SearchBar.propTypes = {
    onChange: PropTypes.func,
    queryString: PropTypes.string,
    resetVenue: PropTypes.func,
    turnTextFilterOn: PropTypes.func
};

export default SearchBar
