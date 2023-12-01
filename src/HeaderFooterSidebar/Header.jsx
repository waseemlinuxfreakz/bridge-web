import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import ConnectWallet from './ConnectWallet';
import  ConnectionIndicator from './ConnectionIndicator';


function Header() {
    return ( 
        <header id='header'>
            <div className="container">
                <div className="headerNave">
                    <h1 className="siteTitle">Bridge</h1>
                    <div className="headerRightSide">
                        <ConnectionIndicator/>
                        <ConnectWallet/>
                    </div>
                </div>
            </div>
        </header>
     );
}

export default Header;