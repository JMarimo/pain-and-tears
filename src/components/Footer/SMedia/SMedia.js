import { Link } from "react-router-dom";
import "./smedia.scss";

export default function SMedia({ SMediaIcon, SMediaAlt }) {
  return (
    <li>
      <Link to="/">
        <div className="SMedia__img">
          <img src={SMediaIcon} alt={SMediaAlt} />
        </div>
      </Link>
    </li>
  );
}