import React from 'react';

import './DrawerToggleButton.css';

function DrawerToggleButton(){
    return(
        <button className="toggle-button">
            <div className="toggle-button__line"/>
            <div className="toggle-button__line"/>
            <div className="toggle-button__line"/>
        </button>
    );
}

export default DrawerToggleButton;