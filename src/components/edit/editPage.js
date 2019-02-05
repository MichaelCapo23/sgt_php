import React, {Component} from "react";
import {Field, reduxForm} from 'redux-form';


class EditPage extends Component {
    state = {
        data: "",
    }

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
            <div className={"editContainer row"}>
                <div className="leftSide col s6 m6 l6 lg6">
                    <h3 className={"center LeftHeader"}>Original Values</h3>
                    <div className={"left"}>{`Name: ${data.name}`}</div>
                </div>

                <div className="rightSide col s6 m6 l6 lg6">
                    <form onSubmit={handleSubmit(this.test)}>
                    <h3 className={"center RightHeader "}>Edited Values</h3>
                    <label htmlFor="name">Name</label>
                    <input autoComplete={"off"} placeholder={data.name} type={"text"}  id={"name"} name={"name"} className={"left s12"}/>
                    </form>
                </div>
            </div>
        )
    }
}

function validate(){
    const errors = {};
    return errors;
}

export default reduxForm({
    form: "add_student_form",
    validate,
})(EditPage);