import React from "react";
import Header from "../components/Header.jsx";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
export default function Criteria() {

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    criteriaName: Yup.string().required('Criteria Name is required'),
    description: Yup.string().required('Description is required'),
  });
  

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    criteriaName: '',
    description: '',
  };
  

  const onSubmit = (values, { setSubmitting }) => {
    const formData = {
        criteriaName: values.criteriaName,
        description: values.description,
      };
    console.log(formData);
    setSubmitting(false);
  };
  return (
    <div class="m-2 m-md-5 mt-5 p-2 p-md-5 bg-white rounded-3xl">
      <Header category="Page" title="Add Criteria" />
      <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">First Name</label>
          <Field type="text" name="firstName" className="form-control" />
          <ErrorMessage name="firstName" component="div" className="text-danger" />
        </div>

        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">Last Name</label>
          <Field type="text" name="lastName" className="form-control" />
          <ErrorMessage name="lastName" component="div" className="text-danger" />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <Field type="email" name="email" className="form-control" />
          <ErrorMessage name="email" component="div" className="text-danger" />
        </div>

        <div className="mb-3">
          <label htmlFor="criteriaName" className="form-label">Criteria Name</label>
          <Field type="text" name="criteriaName" className="form-control" />
          <ErrorMessage name="criteriaName" component="div" className="text-danger" />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <Field as="textarea" name="description" className="form-control" />
          <ErrorMessage name="description" component="div" className="text-danger" />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </Form>
    </Formik>
    </div>
  );
}
