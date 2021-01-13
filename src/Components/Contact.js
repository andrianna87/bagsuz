import React from 'react';
import '../styles/Contact.css';
import '../styles/global.css'

const pageStyle = {
    backgroundColor: '#efefef',
    display: 'successFormDisplay'
};

const btnStyle = {
    width: '60%',
    outline: 'none',
    fontSize: '18px',
    paddingTop: '20px',
    paddingBottom: '20px',
    cursor: 'pointer'
};

const txtFieldState = {
    value: "",
    valid: true, //whether the input is valid or not. if the input is empty or doesn't follow the input format properly, it will return false
    typeMismatch: false, //this returns false if the input format is not followed (such as email, numbers-only input format); returns true if all good
    errorMessage: "" //this is where the error message gets across
};

const ErrorValidationLabel = ({ txtLbl }) => (
    <label htmlFor="" style={{ color: "red" }}>
        {txtLbl}
    </label>
);

class Contact extends React.Component {
    state = {
        fullName: {...txtFieldState, fieldName:"Full Name", required: true, requiredTxt: "Full name is required"}, //required - you can use this property to set whether the input field is required or not; also can add logic in react component that whether we should make use of required input field or not
        email: {...txtFieldState, fieldName: "Email Address", required: true, requiredTxt: "Email is required", formatErrorTxt: "Incorrect email format"}, // formatErrorTxt - error message that shows up when user inputs an incorrect format such as incorrect email or zip code
        subject: {...txtFieldState, fieldName: "Subject", required: true, requiredTxt: "Please, select subject from the dropdown menu"}, //requiredTxt - error message that shows up when user inputs an incorrect format such as incorrect email format or zip code
        textarea: {...txtFieldState, fieldName: "Textarea", required: true},
        allFieldsValid: false //use this property when all fields are valid then display a success message or any other logic you needed to do
    };

    onSubmit = (e) => {
        e.preventDefault();
    };

    //we need to extract specific properties in Constraint Validation API using this code snippet
    reduceFormValues = formElements => {
        const arrElements = Array.prototype.slice.call(formElements); //we convert elements/inputs into an array found inside form element
        //we need to extract specific properties in Constraint Validation API using this code snippet
        const formValues = arrElements
            .filter(elem => elem.name.length > 0)
            .map(x => {
                const { typeMismatch } = x.validity;
                const { name, type, value } = x;
                return {
                    name,
                    type,
                    typeMismatch, //we use typeMismatch when format is incorrect(e.g. incorrect email)
                    value,
                    valid: x.checkValidity()
                };
            })
            .reduce((acc, currVal) => { //then we finally use reduce, ready to put it in our state
                const { value, valid, typeMismatch } = currVal;
                const {
                    fieldName,
                    requiredTxt,
                    formatErrorTxt
                } = this.state[currVal.name]; //get the rest of properties inside the state object
                //we'll need to map these properties back to state so we use reducer...
                acc[currVal.name] = {
                    value,
                    valid,
                    typeMismatch,
                    fieldName,
                    requiredTxt,
                    formatErrorTxt
                };
                return acc;
            }, {});
        return formValues;
    };

    checkAllFieldsValid = (formValues) => {
        return !Object.keys(formValues)
            .map(x => formValues[x])
            .some(field => !field.valid);
    };

    onSubmit = e => {
        e.preventDefault();
        const form = e.target;

        const formValues = this.reduceFormValues(form.elements);
        const allFieldsValid = this.checkAllFieldsValid(formValues);

        //note: put ajax calls here to persist the form inputs in the database.
        this.setState({ ...formValues, allFieldsValid }); //we set the state based on the extracted values from Constraint Validation API
    };

    //const allFieldsValid


    render() {
        const { fullName, email, subject, textarea, allFieldsValid } = this.state;
        const successFormDisplay = allFieldsValid ? "block" : "none";
        const inputFormDisplay = !allFieldsValid ? "block" : "none";

        const renderFullNameValidationError = fullName.valid ? "" : <ErrorValidationLabel txtLbl={fullName.requiredTxt} />;
        const renderEmailValidationError = email.valid ? "" : <ErrorValidationLabel txtLbl={email.typeMismatch ? email.formatErrorTxt : email.requiredTxt} />;
        const renderSubjectValidationError = subject.valid ? "" : <ErrorValidationLabel txtLbl={subject.requiredTxt}/>;
        const renderTextareaValidationError = textarea.valid ? "" : <ErrorValidationLabel txtLbl={textarea.requiredTxt}/>;

        return (
            <>
                <div style={pageStyle}>
                    <div style={{display: successFormDisplay}}>
                        <h2 style={{ textAlign: "center"}}>Success!</h2>
                        <p style={{ textAlign: "center"}}>You have successfully submitted a form.</p>
                    </div>

                    <div className="contactContainer" style={{display: inputFormDisplay}}>
                        <div className="contactIntro">
                            <div className="contactLeft">
                                <div className="contactImg">
                                    {/*image here*/}
                                </div>
                            </div>
                            <div className="contactRight">
                                <p className="contactSubtitle">DON'T BE A STRANGER</p>
                                <h1>We Look Forward To Hear From You</h1>
                                <h3>Feel free to contact us for any kind of recommendations, comments, or inquiry, etc. We will get back to you as soon as we can. Thank you.</h3>
                            </div>
                        </div>
                        <form className="form-input" onSubmit={this.onSubmit} noValidate>
                            <h3>Contact Form</h3>
                            <input type="text" name="fullName" className="fullName" placeholder="Full Name" required/>
                            <br/>
                            {renderFullNameValidationError}
                            <input type="email" name="email" className="email" placeholder="Email Address" required/>
                            <br/>
                            {renderEmailValidationError}
                            <input type="text" name="subject" className="subject" placeholder="Subject" required />
                            <br/>
                            {renderSubjectValidationError}
                            <br/><br/>
                            <textarea name="textarea" id="" placeholder="What's On Your Mind?" required></textarea>
                            <br/>
                            {renderTextareaValidationError}
                            <input type="submit" value="Submit" className="globalButton" style={btnStyle}/>
                        </form>
                    </div>
                </div>
            </>
        );
    };
}

export default Contact;