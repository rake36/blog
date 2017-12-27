import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {

    renderField(field) {
        // ...field.input maps all the properties to the <input> tag
        //   without having to do it manually one by one

        const { meta: { touched, error } } = field;  // destructuring: meta, touched, error all assigned to relevant properties in field

        const className = `form-group ${touched && error ? 'has-danger' : ''}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input className="form-control"
                    type="text"
                    {...field.input}
                />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        );
    }

    onSubmit(values) {
        // this === component due to .bind(this) in onSubmit wiring
        // console.log(values);
        // this.props.history.push('/');  // will navigate to the designated route
        
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
    }

    render() {

        const { handleSubmit } = this.props;

        // any arbitrary property assigned to Field is available on the field in the renderer, like label...
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Title"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

function validate(values) {
    // console.log(values) -> { title: 'asdf', categories: 'asdf', etc.}
    const errors = {};

    // validate the inputs from 'values'
    if (!values.title || values.title.length < 3) {
        errors.title = "Enter a title of at least 3 chars...";
    }
    if (!values.categories) {
        errors.categories = "Enter at least one category...";
    }
    if (!values.content) {
        errors.content = "Enter some content...";
    }

    return errors;  // if errors is empty, passes validation
}

// export default reduxForm({
//     validate,
//     form: 'PostsNewForm'
// })(PostsNew);

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(connect(null, { createPost })(PostsNew));

