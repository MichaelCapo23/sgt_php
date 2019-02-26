import React from 'react';
import '../assets/css/app.scss';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min'
import 'material-icons';
import {Route} from 'react-router-dom';
import List from '../components/list/list'
import Nav from '../components/nav'
import SignIn from '../components/signIn/signIn'
import SignUp from '../components/SignUp/signUp'
import AddStudent from '../components/addStudent';
import EditRecords from '../components/edit/editRecords';
import EditPage from "../components/edit/editPage";
import studentData from "./studentData/studentData"
import auth from './HOC/auth'

const App = () => (
    <div>
        <Nav/>
        <div className={"container row"}>
            <Route exact path={"/"} component={List}/>
            <Route path={"/studentData/:studentsID"} component={studentData}/>
            <Route path={"/signIn"} component={SignIn}/>
            <Route path={"/signUp"} component={SignUp}/>
            <Route path={"/addStudent"} component={auth(AddStudent)}/>
            <Route path={"/editRecords"} component={auth(EditRecords)}/>
            <Route path={"/editPage/:studentID"} component={auth(EditPage)}/>
        </div>
    </div>
);

export default App;
