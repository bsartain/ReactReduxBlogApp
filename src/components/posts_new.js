import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//Field is just form fields. reduxForm is a function, similar to connect(See below),
//to hook up our form to redux. 
import { Field, reduxForm } from 'redux-form'; 
import { createPost } from '../actions/index';
import { connect } from 'react-redux';

class PostsNew extends Component {

    
    renderFormField(field){
        //Destructuring the meta property from field then destructuring the "touched" and "error" property from meta
        const { meta: { touched, error } } = field;
        //Without the destructuring its the same as saying: const className = `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`
        const classNameDangerInput = `form-control ${touched && error ? 'is-invalid' : ''}`;
        

        return(
            <div className="form-control-wrapper">
                <label>{field.label}</label>
                <input
                    className={classNameDangerInput}
                    type='text'
                    {...field.input}
                />
                {/* This displays the error message to the user and is connected to the vaildate(values) function below */}
                {/* If the field is in a touched state, meaning if the user fills out a field, then show the error if there is one. If not, don't show the error */}
                {/* Redux Forms sees 3 different states on the form: 
                    1. Pristine State: form hasn't been touched yet. Fields are empty 
                    2. Touched State: Form has been touched or a field has been entered
                    3. Error State: Where there are errors in the form. 
                */}
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        )
    }

    onSubmit(values){
        //Should call an action creator to submit the values to the api
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
        
    }

    render() {
        const { handleSubmit } = this.props
        return (
            <div className="navigation-links row">
                <div className="col-md-12">
                    <h3>Add a Post</h3>
                    <hr/>                
                </div>
                <div className="col-md-12">
                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                        {/* <Field /> is only responsible for handling the state of our form fields */}
                        <Field 
                            label="Title"
                            name="title"
                            //The fields are attached to the {this.renderFormField} function to render the field on the page
                            component={this.renderFormField}
                        />
                        <Field 
                            label="Categories"
                            name="categories"
                            component={this.renderFormField}
                        />
                        <Field 
                            label="Post Content"
                            name="content"
                            component={this.renderFormField}
                        />
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <Link className="btn btn-danger" to="/">Cancel</Link>
                    </form>
                </div>
            </div>
        )
    }
}

//The "values" argument collects the values from the props on the <Field/> entered by the user
//It is used in the validate process that redux forms takes care of for us.
//This is passing the props of <Field/> down to this method.
function validate(values){
    //Errors starts as an empty object
    const errors = {};
    //If the title field, on the prop name="title", is missing a value collect the error
    if(!values.title || values.title.length < 3){
        errors.title = 'Please fill out a title!' //const errors = {errors.title} return invalid
    }
    if(!values.categories){
        errors.categories = 'Please add a category!' //const errors = {errors.categories} return invalid
    }
    if(!values.content){
        errors.content = 'Please enter some content!' //const errors = {errors.content} return invalid
    }
    return errors; //If the errors object returns empty you're good. If it has something then the form will render invalid.
}

export default reduxForm({
    //Validate is passed into the reduxForm method
    validate: validate,
    form: 'PostsNewForm'
})(
    connect(null, { createPost })(PostsNew)
);

