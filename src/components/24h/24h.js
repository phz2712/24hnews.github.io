import React, {useState,} from "react";
import Header from './header/header';
import Body from './body/body';
import Footer from './footer/footer'

function Page24h(props) {
    return (
        <div>
            <header>
                <Header/>
            </header>
            <body>
                <Body/>
            </body>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default Page24h;