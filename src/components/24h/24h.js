import React, {useState,} from "react";
import Header from './header/header'
import Body from './body/body'
import { connect } from 'react-redux';

function Page24h(props) {
    return (
        <div>
            <header>
                <Header/>
            </header>
            <body>
                <Body/>
            </body>
        </div>
    );
}

export default Page24h;