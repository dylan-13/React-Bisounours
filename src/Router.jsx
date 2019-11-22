import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from './mainPage/MainPage';
import Contact from './contact/Contact';
import Galerie from './galerie/Galerie';


class Router extends React.Component {

    render(){
        return(
            <>
            <Header />
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route exact path="/Contact" component={Contact} />
                <Route exact path="/Galerie" component={Galerie} /> 
            </Switch>
            <Footer />
            </>
        )
    }
}
export default Router;