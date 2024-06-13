import { Link } from "react-router-dom";
import "./contacts.scss";

export default function Contacts({ contactsIcon, contactsAlt, contactsText }) {
  return (
    <li>
      <Link to="/">
        <div className="contacts__container">
          <div className="img">
            <img src={contactsIcon} alt={contacstAlt} className="icon__image" />
          </div>
          <div className="text">
            <span>{contactsText}</span>
          </div>
        </div>
      </Link>
    </li>
  );
}