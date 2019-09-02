import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from "./component/home";
import Services from "./component/service";
import Contact from "./component/contact";
import Entrepreneur from './component/entrepreneur';
import Students from './component/student';
import Hobbies from './component/hobbyists';

class Routes extends Component {
    render() { 
        return(
            <BrowserRouter>
                <Route exact activeClassName='is-active' path='/' component={Home}/>
                <Route exact path='/services' component={Services}/>
                <Route path='/contact' component={Contact}/>
                <Route path='/services/entrepreneur' component={Entrepreneur}/>
                <Route path='/services/students' component={Students}/>
                <Route path='/services/hobbies' component={Hobbies}/>
            </BrowserRouter>
        )
}
}

export default Routes;