import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { registerUser } from "../../redux/auth/operations";
import s from "./RegistrationForm.module.css";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    name: "",
    password: "",
  };
  const handleSubmit = (values, options) => {
    dispatch(registerUser(values));
    options.resetForm();
  };
  return (
    <div className={s.wrapper}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <Field
            className={s.input}
            name="name"
            placeholder="Enter your name"
          />
          <Field
            className={s.input}
            name="email"
            placeholder="Enter your email"
          />
          <Field
            className={s.input}
            name="password"
            type="password"
            placeholder="Enter your password"
          />
          <button className={s.button} type="submit">
            Register
          </button>

          <p className={s.text}>
            You already have account?
            <Link className={s.link} to="/login">
              Sign in
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};
export default RegisterForm;
