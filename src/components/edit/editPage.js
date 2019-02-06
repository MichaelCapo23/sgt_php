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
                        <Field size={"s4"} type={"text"} name={"name"} label={"Name"}
                               component={Forms}/>

                        <Field size={"s4"} type={"text"} name={"age"} label={"Age"}
                               component={Forms}/>

                        <Field size={"s4"} type={"text"} name={"year"} label={"Year"}
                               component={Forms}/>

                        <Field size={"s4"} type={"text"} name={"GPA"} label={"GPA"}
                               component={Forms}/>

                        <Field size={"s4"} type={"text"} name={"tardy"} label={"tardy"}
                               component={Forms}/>

                        <Field size={"s4"} type={"text"} name={"absent"} label={"absent"}
                               component={Forms}/>

                        <Field size={"s4"} type={"text"} name={"Class1"} label={"Class #1"}
                               component={Forms}/>

                        <Field size={"s4"} type={"text"} name={"Class1_Grade"} label={"Class #1 Grade"}
                               component={Forms}/>

                        <Field size={"s4"} type={"text"} name={"Class2"} label={"Class #2"}
                               component={Forms}/>

                        <Field size={"s4"} type={"text"} name={"Class2_Grade"} label={"Class #2 Grade"}
                               component={Forms}/>

                        <Field placeholder={data.class3} size={"s4"} type={"text"} name={"Class3"} label={"Class #3"}
                               component={Forms}/>

                        <Field placeholder={data.class3_grade} size={"s4"} type={"text"} name={"Class3_Grade"} label={"Class #3 Grade"}
                               component={Forms}/>

                        <Field placeholder={data.class4} size={"s4"} type={"text"} name={"Class4"} label={"Class #4"}
                               component={Forms}/>

                        <Field placeholder={data.class4_grade} size={"s4"} type={"text"} name={"Class4_Grade"} label={"Class #4 Grade"}
                               component={Forms}/>

                        <Field placeholder={data.class5} size={"s4"} type={"text"} name={"Class5"} label={"Class #5"}
                               component={Forms}/>

                        <Field placeholder={data.class5_grade} size={"s4"} type={"text"} name={"Class5_Grade"} label={"Class #5 Grade"}
                               component={Forms}/>

                        <Field placeholder={data.class6} size={"s4"} type={"text"} name={"Class6"} label={"Class #6"}
                               component={Forms}/>

                        <Field placeholder={data.class6_grade} size={"s4"} type={"text"} name={"Class6_Grade"} label={"Class #6 Grade"}
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

function mapStateToProps({form}, {location}) {
    let initialValues = {};
    const { add_student_form } = form;
    const { state } = location;

    if(add_student_form && state && state.data){
        const { data } = state;

        initialValues = {
            name: data.name,
            age: data.age,
            year: data.year,
            GPA: data.GPA,
            tardy: data.tardy,
            absent: data.absent,
            Class1: data.class1,
            Class1_Grade: data.class1_grade,
            Class2: data.class2,
            Class2_Grade: data.class2_grade,
            Class3: data.class3,
            Class3_Grade: data.class3_grade,
            Class4: data.class4,
            Class4_Grade: data.class4_grade,
            Class5: data.class5,
            Class5_Grade: data.class5_grade,
            Class6: data.class6,
            Class6_Grade: data.class6_grade,

        }
    }

    return {
        initialValues
    }
}

export default connect(mapStateToProps, {
    UpdateRecord_action
})(reduxForm({
    form: "add_student_form",
    validate,
    enableReinitialize: true
})(EditPage));