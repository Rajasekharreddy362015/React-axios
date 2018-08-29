import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom'
import Home from './home'
import Menu from './menu'
class RoutingData extends Component {
    render() {
        return (
            <Router>
            <div>
                <div className="ui menu">
                <ul style={{ listStyleType: "none", display:"inline-block" }}>
                    <li><Link to={"/Home"}>HOME</Link></li>
                    <li><Link to={"/Menu"}>MENU</Link></li>
                    
                </ul>
                </div>
                <hr/>
                <div>
                <Switch>
                     <Route exact path="/Home" component={Home}/>
                     <Route exact path="/Menu" component={Menu} />
                </Switch>
                </div>
            </div>
            </Router>
        );
    }
}

export default RoutingData;