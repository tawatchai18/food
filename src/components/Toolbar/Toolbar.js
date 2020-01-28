import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';
import ReactGa from 'react-ga';


const trackingId = "UA-156975553-1"; // Replace with your Google Analytics tracking ID
ReactGa.initialize(trackingId);

ReactGa.pageview('https://download.ffc.in.th')


const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar_toggle-button">
                <DrawerToggleButton click={props.drawerToggleClickHandler} />
            </div>
            <div className="toolbar_logo">
                <a href="https://ffc.in.th/">
                    <img style={{ height: 100, width: 100, marginLeft: 125 }} src="LOGO_Color.png" ></img>
                </a>
            </div>
            <div className="spacer" />
            <div className="toolbar_navigation-items" style={{ fontSize: 16, marginRight: 160 }}>
                <ul>
                    <li ><a href="https://ffc.in.th/#What">Home</a></li>
                    <li ><a href="https://ffc.in.th/dashboard/index.html#/dashboard/analytics">Dashboard</a></li>
                    <li ><a href="https://ffc.in.th/Use/">How to use</a></li>
                    <li ><a href="https://download.ffc.in.th">Download</a></li>
                    <li><a href="https://www.ffc.in.th/blog/">Blog</a></li>
                    <li ><a href="https://www.ffc.in.th/contact/">Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;