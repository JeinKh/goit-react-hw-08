import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
// import { nanoid } from "@reduxjs/toolkit";
// import { addContact } from "../../redux/contactsSlice";

const ContactForm = () => {
  const registerSchema = Yup.object({
    name: Yup.string()
      .required("This field is required")
      .min(3, "Too short")
      .max(50, "Too long"),
    number: Yup.string()
      .required("This field is required")
      .min(3, "Number must be more than 3 numbers!")
      .max(50, "It is to match !"),
  });

  // const handleSubmit = (data, actions) => {
  //   onSubmit(data);
  //   actions.resetForm();
  // };

  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    number: "",
  };

  const onSubmit = (values, options) => {
    // const newContact = {
    //   name: values.name,
    //   number: values.number,
    //   id: nanoid(),
    // };
    dispatch(addContact({ name: values.name, number: values.number }));
    options.resetForm();
  };

  return (
    <div className={s.wrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={registerSchema}
      >
        <Form className={s.form}>
          <label className={s.label}>
            <span className={s.subtitle}>Name</span>
            <Field name="name" className={s.input} />
            <ErrorMessage name="name" component="span" className={s.error} />
          </label>
          <label className={s.label}>
            <span className={s.subtitle}>Number</span>
            <Field name="number" className={s.input} />
            <ErrorMessage name="number" component="span" className={s.error} />
          </label>
          <button type="submit" className={s.btn}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
