import { FaRegUser, FaPhone } from "react-icons/fa";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";
// import { deleteContact } from "../../redux/contactsSlice";
import { deleteContact } from "../../redux/contactsOps";
const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <p>
          <FaRegUser />
          {name}
        </p>
        <p>
          <FaPhone />
          {number}
        </p>
      </div>
      <button
        onClick={() => dispatch(deleteContact(id))}
        type="button"
        className={s.btn}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
