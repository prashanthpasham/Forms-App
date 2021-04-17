import React from 'react';
import { ErrorMessage, Field } from 'formik';
import TextError from './TextError';
const MyInput = ({ field, form, ...props }) => {
    return <input {...field} {...props} />;
};
function Input(props) {
    const {label, name, type,readonly } = props;
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label><br />
            <Field className="form-control" field={type} id={name} name={name} readOnly={readonly}  />
            <div><ErrorMessage name={name} component={TextError} /></div>
        </div>

    )
}

export default Input
