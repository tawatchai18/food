import React from 'react';
import './SideDrawer.css';

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open'
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <li ><a href="https://ffc.in.th/#What">Home</a></li>
                <li ><a href="https://ffc.in.th/dashboard/index.html#/dashboard/analytics">Dashboard</a></li>
                <li ><a href="https://ffc.in.th/Use/">How to use</a></li>
                <li ><a href="https://download.ffc.in.th">Download</a></li>
                <li><a href="https://www.ffc.in.th/blog/">Blog</a></li>
                <li ><a href="https://www.ffc.in.th/contact/">Contact</a></li>
            </ul>
        </nav>
    );
};

export default sideDrawer;