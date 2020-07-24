import React from 'react';

import './SideDrawer.css';

function SideDrawer(){
    return(
        <nav className="side-drawer">
            <ul>
                <li><a href="/">Produtos</a></li>
                <li><a href="/">Usuários</a></li>
            </ul>
        </nav>
    );
}

export default SideDrawer;