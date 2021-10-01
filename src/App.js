import React from "react";
import {useFormik, validateYupSchema} from 'formik';

function App() {
  const formik = useFormik({
    initialValues:{
      name:'',
      email:'',
      password:''
    },
    onSubmit: values => {
      window.alert("Login Successful");
    },
    validate: values => {
      let errors = {};
      console.log(values.email.indexOf('@'));
      if(values.email.indexOf('@') < 0) errors.email = 'Username should be an email';
      if(!values.password) errors.password = 'Field required';
      return errors;
    }    
  })
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input id="emailField" name="email" onChange={formik.handleChange} value={formik.values.email} type="text" />
        {formik.errors.email ? <div id="emailError" style={{color:'red'}}>{formik.errors.email}</div> : null}

        <div>Password</div>
        <input name="password" id="pswField" onChange={formik.handleChange} value={formik.values.password} type="password" />
        {formik.errors.password ? <div id="pswError" style={{color:'red'}}>{formik.errors.password}</div> : null}
        <button type="submit" id="submitBtn">Submit</button>
      </form>
    </div>
  );
}

export default App;