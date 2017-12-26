import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {

    renderField(field) {
        // ...field.input maps all the properties to the <input> tag
        //   without having to do it manually one by one
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input className="form-control"
                    type="text"
                    {...field.input}
                />
            </div>
        );
    }

    render() {
        // any arbitrary property assigned to Field is available on the field in the renderer, like label...
        return (
            <form>
                <Field
                    label="Title"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="Tags"
                    name="tags"
                    component={this.renderField}
                />
                <Field
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />
            </form>
        );
    }
}

export default reduxForm({
    form: 'PostsNewForm'
})(PostsNew);