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
            <li ><a href="https://ffc.in.th/#What">ABOUT</a></li>
                    <li ><a href="https://ffc.in.th/#Who">USER</a></li>
                    <li ><a href="https://ffc.in.th/#tour">FEATURES</a></li>
                    <li ><a href="https://ffc.in.th/FAQ-ffc.html">FAQ</a></li>
                    <li ><a href="https://download.ffc.in.th">DOWNLOAD</a></li>
                    <li ><a href="https://ffc.in.th/#contact">CONTACT</a></li>
            </ul>
        </nav>
    );
};

export default sideDrawer;