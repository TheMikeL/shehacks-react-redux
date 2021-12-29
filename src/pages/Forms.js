import React from "react";
import { useDispatch } from "react-redux";
import { setName } from "../redux/features/personSlice";
import { useFormik } from "formik";

const Forms = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log(values);
      dispatch(setName(values));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <br />
      <label htmlFor="firstName">First Name: </label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
      <br />
      <label htmlFor="lastName">Last Name: </label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />
      <br />
      <label htmlFor="email">Email Address: </label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Forms;
