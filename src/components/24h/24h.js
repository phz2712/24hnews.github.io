import React, {useState, useEffect} from "react";
import Header from './header/header';
import Body from './body/body';
import Footer from './footer/footer'

function Page24h(props) {
    const [scroll, setScroll]= useState(false);

    const handleScroll = ()=>{
        if (window.scrollY < 150){
            setScroll( false);
        }
        else{
            setScroll (true);
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll',e=>handleScroll(e))
    },[])


    return (
        <div>
            <header>
                <Header/>
            </header>
            <body>
                <Body/>
            </body>
            <footer>
                <Footer scroll={scroll} />
            </footer>
        </div>
    );
}

export default Page24h;