import React, {Component} from "react";
import {Field, reduxForm} from 'redux-form';
import {connect} from "react-redux"
import {UpdateRecord_action} from '../../actions/updateRecord_action';
import Forms from "../../helpers";


class EditPage extends Component {
    state = {
        data: "",
    }

    getGPA = (classData, index) => {
        console.log(classData);
        const classArray = [classData[index].class1_grade, classData[index].class2_grade, classData[index].class3_grade, classData[index].class4_grade, classData[index].class5_grade, classData[index].class6_grade]
        let currentClassGrades = classArray.filter((index) => index != null || index != undefined);
        let totalScore = 0;
        for (let index = 0; index < currentClassGrades.length; index++) {
            if (currentClassGrades[index] > 89.9) {
                totalScore += 4
            } else if (currentClassGrades[index] > 79.9) {
                totalScore += 3;
            } else if (currentClassGrades[index] > 69.9) {
                totalScore += 2;
            } else if (currentClassGrades[index] > 59.9) {
                totalScore += 1;
            } else {
                totalScore += 0;
            }
        }
        let gpa = totalScore / currentClassGrades.length;
        return gpa.toFixed(2);
    };

    test = () => {
        console.log("test worked");
    }

    componentDidMount = () => {
        this.setState({
            data: this.props.location.state.data
        })
    };

    render() {
        console.log(this.props.location.state);
        const {handleSubmit} = this.props;
        const {data} = this.state;
        return (
            <div className={"editContainer"}>
                <form  onSubmit={handleSubmit(this.test)}>
                    <h3 className={"center RightHeader row"}>{`Edit ${data.name}'s Record`}</h3>
                    <div className={"row"}>
                        <Field placeholder={data.name} size={"s4"} type={"text"} name={"name"} label={"Name"}
                               component={Forms}/>

                        <Field placeholder={data.age} size={"s4"} type={"text"} name={"age"} label={"Age"}
                               component={Forms}/>

                        <Field placeholder={data.year} size={"s4"} type={"text"} name={"year"} label={"Year"}
                               component={Forms}/>

                        <Field placeholder={data.GPA} size={"s4"} type={"text"} name={"GPA"} label={"GPA"}
                               component={Forms}/>

                        <Field placeholder={data.tardy} size={"s4"} type={"text"} name={"tardy"} label={"tardy"}
                               component={Forms}/>

                        <Field placeholder={data.absent} size={"s4"} type={"text"} name={"absent"} label={"absent"}
                               component={Forms}/>

                        <Field placeholder={data.class1} size={"s4"} type={"text"} name={"Class #1"} label={"Class #1"}
                               component={Forms}/>

                        <Field placeholder={data.class1_grade} size={"s4"} type={"text"} name={"Class #1 Grade"} label={"Class #1 Grade"}
                               component={Forms}/>

                        <Field placeholder={data.class2} size={"s4"} type={"text"} name={"Class #2"} label={"Class #2"}
                               component={Forms}/>

                        <Field placeholder={data.class2_grade} size={"s4"} type={"text"} name={"Class #2 Grade"} label={"Class #2 Grade"}
                               component={Forms}/>

                        <Field placeholder={data.class3} size={"s4"} type={"text"} name={"Class #3"} label={"Class #3"}
                               component={Forms}/>

                        <Field placeholder={data.class3_grade} size={"s4"} type={"text"} name={"Class #3 Grade"} label={"Class #3 Grade"}
                               component={Forms}/>

                        <Field placeholder={data.class4} size={"s4"} type={"text"} name={"Class #4"} label={"Class #4"}
                               component={Forms}/>

                        <Field placeholder={data.class4_grade} size={"s4"} type={"text"} name={"Class #4 Grade"} label={"Class #4 Grade"}
                               component={Forms}/>

                        <Field placeholder={data.class5} size={"s4"} type={"text"} name={"Class #5"} label={"Class #5"}
                               component={Forms}/>

                        <Field placeholder={data.class5_grade} size={"s4"} type={"text"} name={"Class #5 Grade"} label={"Class #5 Grade"}
                               component={Forms}/>

                        <Field placeholder={data.class6} size={"s4"} type={"text"} name={"Class #6"} label={"Class #6"}
                               component={Forms}/>

                        <Field placeholder={data.class6_grade} size={"s4"} type={"text"} name={"Class #6 Grade"} label={"Class #6 Grade"}
                               component={Forms}/>
                    </div>
                </form>
            </div>
        )
    }
}

function validate() {
    const errors = {};
    return errors;
}

function mapStateToProps() {
    return {}
}

export default reduxForm({
    form: "add_student_form",
    validate,
})(connect(mapStateToProps, {
    UpdateRecord_action
})(EditPage));


{/*<div className={"editContainer row"}>*/
}
{/*<div className="leftSide col s6 m6 l6 lg6">*/
}
{/*<h3 className={"center LeftHeader"}>Original Values</h3>*/
}
{/*<div className={"left"}>{`Name: ${data.name}`}</div>*/
}
{/*</div>*/
}

{/*<div className="rightSide col s6 m6 l6 lg6">*/
}
{/*<form onSubmit={handleSubmit(this.test)}>*/
}
{/*<h3 className={"center RightHeader "}>Edited Values</h3>*/
}
{/*<label htmlFor="name">Name</label>*/
}
{/*<input autoComplete={"off"} placeholder={data.name} type={"text"}  id={"name"} name={"name"} className={"left s12"}/>*/
}
{/*</form>*/
}
{/*</div>*/
}
{/*</div>*/
}