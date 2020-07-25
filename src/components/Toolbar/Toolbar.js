import React from 'react';

import './Toolbar.css';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

function Toolbar(props){
    return(
        <header className="toolbar">
            <nav className="toolbar__navigation">
                <div className="toolbar__toggle-button">
                    <DrawerToggleButton click = {props.drawerToggleclickHandler}/>
                </div>
                <div className="toolbar__logo"><a href="/">LOGO</a></div>
                <div className="spacer" />
                <div className="toolbar_navigation-items">
                    <ul>
                        <li><a href="/">Produtos</a></li>
                        <li><a href="/">Usuários</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Toolbar;