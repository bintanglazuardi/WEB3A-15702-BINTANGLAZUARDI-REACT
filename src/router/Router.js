import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import CardPage from '../app/CardPage';
import ContentPage from '../app/ContentPage';

class Router extends Component{
    render(){
        return(
            <Switch>
                <Route exact path="/" component={CardPage}/>
                <Route path="/content" component={ContentPage}/>
            </Switch>
        )
    }
}

export default Router