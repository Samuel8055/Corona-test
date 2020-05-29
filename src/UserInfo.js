import React, { useContext } from "react";
import { useFormik } from "formik";
import { AuthContext } from "./context/AuthContext";

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  }

  if (!values.age) {
    errors.age = "Required";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.contact) {
    errors.contact = "Required";
  } else if (values.contact.length !== 10) {
    errors.contact = "Please enter a valid number";
  }

  if (!values.state) {
    errors.state = "Required";
  }

  if (!values.city) {
    errors.city = "Required";
  }

  return errors;
};

const UserInfo = (props) => {
  const { setAuthenticated } = useContext(AuthContext);

  const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
      email: "",
      contact: "",
      state: "",
      city: "",
    },
    validate,
    onSubmit: (values) => {
      setAuthenticated(true);

      props.history.push("/main");
    },
  });

  return (
    <div className='container-fluid'>
      <div className='col-md-5 col-lg-5 mx-auto form-container'>
        <form onSubmit={formik.handleSubmit} autoComplete='off'>
          <h4 className='text-center mb-4'>Please fill in the details</h4>
          <div className='form-group'>
            <label htmlFor='name'>Name:</label>
            <input
              type='text'
              id='name'
              className='form-control'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              autoComplete='off'
            />
          </div>

          {formik.touched.name && formik.errors.name ? (
            <p style={errorText}>{formik.errors.name}</p>
          ) : null}

          <div className='form-group'>
            <label htmlFor='age'>Age:</label>
            <input
              type='number'
              id='age'
              className='form-control'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.age}
              autoComplete='off'
            />
          </div>

          {formik.touched.age && formik.errors.age ? (
            <p style={errorText}>{formik.errors.age}</p>
          ) : null}

          <div className='form-group'>
            <label htmlFor='email'>Email:</label>
            <input
              type='text'
              id='email'
              className='form-control'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              autoComplete='off'
            />
          </div>

          {formik.touched.email && formik.errors.email ? (
            <p style={errorText}>{formik.errors.email}</p>
          ) : null}

          <div className='form-group'>
            <label htmlFor='contact'>Contact:</label>
            <input
              type='text'
              id='contact'
              className='form-control'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.contact}
              autoComplete='off'
            />
          </div>

          {formik.touched.contact && formik.errors.contact ? (
            <p style={errorText}>{formik.errors.contact}</p>
          ) : null}

          <input type='hidden' name='country' id='countryId' value='IN' />

          <div className='form-group'>
            <label htmlFor='stateId'>State:</label>
            <select
              name='state'
              className='states order-alpha form-control'
              id='stateId'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.state}
            >
              <option value=''>Select State</option>
            </select>
          </div>

          {formik.touched.state && formik.errors.state ? (
            <p style={errorText}>{formik.errors.state}</p>
          ) : null}

          <div className='form-group'>
            <label htmlFor='cityId'>City:</label>
            <select
              name='city'
              className='cities order-alpha form-control'
              id='cityId'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.city}
            >
              <option value=''>Select City</option>
            </select>
          </div>

          {formik.touched.city && formik.errors.city ? (
            <p style={errorText}>{formik.errors.city}</p>
          ) : null}

          <button
            type='submit'
            className='btn btn-primary d-block mx-auto mt-4'
          >
            Proceed
          </button>
        </form>
      </div>
    </div>
  );
};

const errorText = {
  color: "red",
  marginBottom: "10px",
  marginTop: "-15px",
};

export default UserInfo;
