import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { selectFilter, selectorContacts } from "../../redux/selector";
const ContactList = () => {
  const contacts = useSelector(selectorContacts);
  const filter = useSelector(selectFilter);
  const filteredData = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul className={s.wrapper}>
      {filteredData.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact
              key={contact.id}
              name={contact.name}
              number={contact.number}
              id={contact.id}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
