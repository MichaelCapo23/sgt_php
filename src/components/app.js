import React from 'react';
import '../assets/css/app.scss';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min'
import {Route} from 'react-router-dom';
import List from '../components/list'
import Nav from '../components/nav'

const App = () => (
    <div>
        <Nav/>
        <div className={"container"}>
            <Route exact path={"/"} component={List}/>
        </div>
    </div>
);

export default App;
