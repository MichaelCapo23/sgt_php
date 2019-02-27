import React, {Component} from "react";
import {Field, reduxForm} from 'redux-form';
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import Forms from "../../helpers";
import {oneStudentsData_action} from '../../actions/oneStudentsData_action'


class StudentData extends Component {
    state = {
        data: null,
    }

    componentDidMount = () => {
        debugger;
        let pathName = window.location.pathname;
        console.log(pathName);
        let slashAndID = pathName.slice(pathName.lastIndexOf("/"), pathName.length);
        let ID = slashAndID.slice(1, slashAndID.length);
        this.props.oneStudentsData_action(ID);
        if (this.props.studentData != undefined && this.state.data == null && this.props.studentData.ID === ID) {
            for (let [key, value] of Object.entries(this.props.studentData)) {
                if (value == "null" || value == "" || value == undefined || value == "N/A") {
                    value = "N/A";
                    this.props.studentData[key] = value
                }
            }
            this.setState({
                data: this.props.studentData
            })
        }
    };

    componentDidUpdate = () => {
        debugger;
        if (this.props.studentData != undefined && this.state.data == null) {
            for (let [key, value] of Object.entries(this.props.studentData)) {
                if (value == "null" || value == "" || value == undefined || value == "N/A") {
                    value = "N/A";
                    this.props.studentData[key] = value
                }
            }
            this.setState({
                data: this.props.studentData
            })
        }
    }

    render() {
        debugger;
        return (
            <div className={"editContainer"}>
                <h3 className={"center RightHeader row"}>{`${this.state.data ? this.state.data.name : ""}`}</h3>
                <div className={"row"}>
                    <Field disabled={"disabled"} inputClass={"colorDark"}
                           classdiv={"editDiv"} placeholder={this.state.data ? this.state.data.name : ""}
                           size={"s12 m3 l3 offset-s1"} type={"text"}
                           name={"name"} label={"Name"}
                           component={Forms}/>

                    <Field disabled={"disabled"} inputClass={"colorDark"}
                           classdiv={"editDiv"} placeholder={this.state.data ? this.state.data.student_number : ""}
                           size={"s12 m3 l3 offset-s1"}
                           type={"text"}
                           name={"student_number"}
                           label={"student Number"}
                           component={Forms}/>

                    <Field disabled={"disabled"} inputClass={"colorDark"}
                           classdiv={"editDiv"} placeholder={this.state.data ? this.state.data.age : ""}
                           size={"s12 m3 l3 offset-s1"}
                           type={"text"}
                           name={"age"} label={"Age"}
                           component={Forms}/>

                    <Field disabled={"disabled"} inputClass={"colorDark"}
                           classdiv={"editDiv"} placeholder={this.state.data ? this.state.data.year : ""}
                           size={"s12 m3 l3 offset-s1"} type={"text"}
                           name={"year"} label={"Year"}
                           component={Forms}/>

                    <Field disabled={"disabled"} inputClass={"colorDark"}
                           placeholder={this.state.data ? this.state.data.year : ""} classdiv={"editDiv"}
                           size={"s12 m3 l3 offset-s1"} type={"text"}
                           name={"GPA"} label={"GPA"}
                           component={Forms}/>

                    <Field disabled={"disabled"} inputClass={"colorDark"}
                           placeholder={this.state.data ? this.state.data.tardy : ""} classdiv={"editDiv"}
                           size={"s12 m3 l3 offset-s1"} type={"text"}
                           name={"tardy"}
                           label={"tardy"}
                           component={Forms}/>

                    <Field disabled={"disabled"} inputClass={"colorDark"}
                           placeholder={this.state.data ? this.state.data.absent : ""} classdiv={"editDiv"}
                           size={"s12 m3 l3 offset-s1"} type={"text"}
                           name={"absent"}
                           label={"absent"}
                           component={Forms}/>

                    <Field disabled={"disabled"} inputClass={"colorDark"}
                           placeholder={this.state.data ? this.state.data.class1 : ""} classdiv={"editDiv"}
                           size={"s12 m3 l3 offset-s1"} type={"text"}
                           name={"Class1"}
                           label={"Class #1"}
                           component={Forms}/>

                    <Field disabled={"disabled"} inputClass={"colorDark"}
                           placeholder={this.state.data ? this.state.data.class1_grade : ""} classdiv={"editDiv"} size={"s12 m3 l3 offset-s1"}
                    type={"text"} name={"Class1_grade"}
                    label={"Class #1 Grade"}
                    component={Forms}/>

                    <Field disabled={"disabled"} inputClass={"colorDark"}
                           placeholder={this.state.data ? this.state.data.class2 : ""} classdiv={"editDiv"} size={"s12 m3 l3 offset-s1"} type={"text"}
                    name={"Class2"}
                    label={"Class #2"}
                    component={Forms}/>

                    <Field disabled={"disabled"} inputClass={"colorDark"}
                           placeholder={this.state.data ? this.state.data.class2_grade : ""} classdiv={"editDiv"} size={"s12 m3 l3 offset-s1"}
                    type={"text"} name={"Class2_grade"}
                    label={"Class #2 Grade"}
                    component={Forms}/>

                    <Field disabled={"disabled"} inputClass={"colorDark"}
                           placeholder={this.state.data ? this.state.data.class3 : ""} classdiv={"editDiv"} size={"s12 m3 l3 offset-s1"} type={"text"}
                    name={"Class3"}
                    label={"Class #3"}
                    component={Forms}/>

                    <Field disabled={"disabled"} inputClass={"colorDark"}
                           placeholder={this.state.data ? this.state.data.class3_grade : ""} classdiv={"editDiv"} size={"s12 m3 l3 offset-s1"}
                    type={"text"} name={"Class3_grade"}
                    label={"Class #3 Grade"}
                    component={Forms}/>

                    <Field disabled={"disabled"} inputClass={"colorDark"}
                           placeholder={this.state.data ? this.state.data.class4 : ""} classdiv={"editDiv"} size={"s12 m3 l3 offset-s1"} type={"text"}
                    name={"Class4"}
                    label={"Class #4"}
                    component={Forms}/>

                    <Field disabled={"disabled"} inputClass={"colorDark"}
                           placeholder={this.state.data ? this.state.data.class4_grade : ""} classdiv={"editDiv"} size={"s12 m3 l3 offset-s1"}
                    type={"text"} name={"Class4_grade"}
                    label={"Class #4 Grade"}
                    component={Forms}/>

                    <Field disabled={"disabled"} inputClass={"colorDark"}
                           placeholder={this.state.data ? this.state.data.class5 : ""} classdiv={"editDiv"} size={"s12 m3 l3 offset-s1"} type={"text"}
                    name={"Class5"}
                    label={"Class #5"}
                    component={Forms}/>

                    <Field disabled={"disabled"} inputClass={"colorDark"}
                           placeholder={this.state.data ? this.state.data.class5_grade : ""} classdiv={"editDiv"} size={"s12 m3 l3 offset-s1"}
                    type={"text"} name={"Class5_grade"}
                    label={"Class #5 Grade"}
                    component={Forms}/>

                    <Field disabled={"disabled"} inputClass={"colorDark"}
                           placeholder={this.state.data ? this.state.data.class6 : ""} classdiv={"editDiv"} size={"s12 m3 l3 offset-s1"} type={"text"}
                    name={"Class6"}
                    label={"Class #6"}
                    component={Forms}/>

                    <Field disabled={"disabled"} inputClass={"colorDark"}
                           placeholder={this.state.data ? this.state.data.class6_grade : ""} classdiv={"editDiv"} size={"s12 m3 l3 offset-s1"}
                    type={"text"} name={"Class6_grade"}
                    label={"Class #6 Grade"}
                    component={Forms}/>

                    <div ref={e => this.errorEditDiv = e} className={"errorEdit hide"}></div>

                    <div className="center">
                        <Link to={"/"} className={"btn blue pulse"}>Student Grade Table</Link>
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        studentData: state.oneStudentsData_reducer.record
    }
}

export default connect(mapStateToProps, {
    oneStudentsData_action
})(reduxForm({
    form: 'studentData-form',
    // validate
})(StudentData));