import React from 'react';
import Forms from "../../helpers";
import {Field, reduxForm} from 'redux-form';

const AddStudentValidation = props => {
    const {handleSubmit, submitFunction} = props;
    return (
        <div className="allInputContainer row center">
            <form onSubmit={handleSubmit(submitFunction)}>
                <div className={"z-depth-4 Info col s12 m6 l6 lx6 left"}>
                    <h5 className="center">Student Information</h5>
                    <div className="col s10 m12 l12 lg12 center">
                        <Field name={"student_id"} label={"Student ID"} component={Forms}/>
                    </div>

                    <div className="col s10 m12 l12 lg12 center">
                        <Field name={"name"} label={"Student's Full Name"} component={Forms}/>
                    </div>

                    <div className="col s10 m12 l12 lg12 center">
                        <Field name={"year"} label={"Year"} component={Forms}/>
                    </div>

                    <div className="col s10 m12 l12 lg12 center">
                        <Field name={"age"} label={"Age"} component={Forms}/>
                    </div>

                </div>


                <div className={"z-depth-4 classes col s12 m6 l6 lx6 right"}>
                    <h5 className="center">Enter Classes</h5>
                    <div className="col s10 m12 l12 lg12 center">
                        <Field name={"class #1"} label={"Class #1"} component={Forms}/>
                    </div>

                    <div className="col s10 m12 l12 lg12 center">
                        <Field name={"class #2"} label={"Class #2"} component={Forms}/>
                    </div>

                    <div className="col s10 m12 l12 lg12 center">
                        <Field name={"class #3"} label={"Class #3"} component={Forms}/>
                    </div>

                    <div className="col s10 m12 l12 lg12 center">
                        <Field name={"class #4"} label={"Class #4"} component={Forms}/>
                    </div>

                    <div className="col s10 m12 l12 lg12 center">
                        <Field name={"class #5"} label={"Class #5"} component={Forms}/>
                    </div>

                    <div className="col s10 m12 l12 lg12 center">
                        <Field name={"class #6"} label={"Class #6"} component={Forms}/>
                    </div>

                </div>


                {/*<div className="col s10 center">*/}
                {/*<div className="col s6">*/}
                {/*<button className={"red darken-2 btn waves-effect waves-light"}>Clear</button>*/}
                {/*</div>*/}

                {/*<div className="col s6">*/}
                {/*<button className={"blue darken-2 btn waves-effect waves-light"}>Add Student</button>*/}
                {/*</div>*/}
                {/*</div>*/}
            </form>
        </div>
    )
}

export default reduxForm({
    form: "add_student_form"
})(AddStudentValidation);