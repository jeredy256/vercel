
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons"; // Importe o ícone de casa

import style from './Header.module.css';

const Header = () => {
  return (
    <header className={style.header_conf}>
      <h1 className={style.tico}>Ola mundo</h1>
      <Link to="/furbr">
        <button className={style.button}>
          <FontAwesomeIcon icon={faHome} /> Home
        </button>
      </Link>
    </header>
  );
};

export default Header;
