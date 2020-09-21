import React, {useState, useEffect} from "react";
import Header from './header/header';
import Body from './body/body';
import Footer from './footer/footer'

function Page24h(props) {
    const [scroll, setScroll]= useState(false);
    const[hideBody, setHideBody] = useState(true);

    const hide=(e)=>{
        console.log(e)
        setHideBody(e)
    }
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
        return _ =>{
            window.removeEventListener('scroll', e=>handleScroll(e))
        }
    },[])
    
    const style = hideBody ? {display: 'inline'}: {display: 'none'} ;
    return (
        <div>
            <header>
                <Header hide={hide}/>
            </header>
            <body style={style}>
                <Body />
            </body>
            <footer>
                <Footer scroll={scroll} />
            </footer>
        </div>
    );
}

export default Page24h;