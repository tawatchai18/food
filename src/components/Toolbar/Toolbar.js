import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar_toggle-button">
                <DrawerToggleButton click={props.drawerToggleClickHandler} />
            </div>
            <div className="toolbar_logo">
                <a href="https://ffc.in.th/">
                    <img style={{ height: 100, width: 100, marginRight: 50 }} src="LOGO_White.png" ></img>
                </a>
            </div>
            <div className="spacer" />
            <div className="toolbar_navigation-items" style={{fontSize:16}}> 
                <ul>
                    <li ><a href="https://ffc.in.th/#What">HOME</a></li>
                    <li ><a href="https://ffc.in.th/#Who">USER</a></li>
                    <li ><a href="https://ffc.in.th/#tour">FEATURES</a></li>
                    {/* <li ><a href="https://ffc.in.th/FAQ-ffc.html">FAQ</a></li> */}
                    <li ><a href="https://download.ffc.in.th">DOWNLOAD</a></li>
                    <li ><a href="https://www.ffc.in.th/contact/">CONTACT</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;