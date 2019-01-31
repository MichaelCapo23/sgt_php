import React from 'react';
import Forms from "../../helpers";
import {Field, reduxForm} from 'redux-form';

const AddStudentValidation = props => {
    const {handleSubmit, submitFunction} = props;
    return (
        <div className="allInputContainer row">
            <div className={"classes col  "}>
                <form onSubmit={handleSubmit(submitFunction)}>
                    <h5 className="center">Enter Classes</h5>
                    <div className="col s10 center">
                        <Field name={"student_name"} label={"Student Name"} component={Forms}/>
                    </div>

                    <div className="col s10 centercol s10 center">
                        <Field name={"grade"} label={"Grade"} component={Forms}/>
                    </div>

                    <div className="col s10 center">
                        <Field name={"class1"} label={"Science"} component={Forms}/>
                    </div>

                    <div className="col s10 center">
                        <Field name={"class2"} label={"Math"} component={Forms}/>
                    </div>

                    <div className="col s10 center">
                        {/*<div className="col s6">*/}
                        {/*<button className={"red darken-2 btn waves-effect waves-light"}>Clear</button>*/}
                        {/*</div>*/}

                        {/*<div className="col s6">*/}
                        {/*<button className={"blue darken-2 btn waves-effect waves-light"}>Add Student</button>*/}
                        {/*</div>*/}
                    </div>
                </form>
            </div>


        </div>
    )
}

export default reduxForm({
    form: "add_student_form"
})(AddStudentValidation);