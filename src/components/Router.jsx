import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './header/Header'
import Footer from './footer/Footer'
import Home from './home/Home';
import Historic from './historic/Historic.js';
import Galerie from './galerie/Galerie';
import Contact from './contact/Contact';


class Router extends React.Component {

    render(){
        return(
            <>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Historic" component={Historic} />
                <Route exact path="/Galerie" component={Galerie} /> 
                <Route exact path="/Contact" component={Contact} />
            </Switch>
            <Footer />
            </>
        )
    }
}
export default Router;