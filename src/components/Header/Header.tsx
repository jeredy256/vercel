// import { Link } from "react-router-dom";

import style from './Header.module.css'

const Header = () => {
    return(
        <>
        <header className={style.header_conf}>
            <h1>Ola mundo123456</h1>
            <button><a href="/furbr"> home</a></button>
            {/* <button><Link to={"/furbr"}>click</Link></button> */}

        </header>
        </>
    )
}
export default Header;