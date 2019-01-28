import React from 'react';
import '../assets/css/app.scss';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min'
import 'material-icons';
import {Route} from 'react-router-dom';
import List from '../components/list/list'
import Nav from '../components/nav'
import SignIn from '../components/singIn/singIn'
import SignUp from '../components/SignUp/signUp'
import AddStudent from '../components/addStudent/addStudent';
import EditRecords from '../components/edit/editRecords'

const App = () => (
    <div>
        <Nav/>
        <div className={"container"}>
            <Route exact path={"/"} component={List}/>
            <Route path={"/signIn"} component={SignIn}/>
            <Route path={"/signUp"} component={SignUp}/>
            <Route path={"/addStudent"} component={AddStudent}/>
            <Route path={"/editRecords"} component={EditRecords}/>
        </div>
    </div>
);

export default App;
