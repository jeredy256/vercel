import Footer from "../../../Footer/Footer"
import Header from "../../../Header/Header"
import img from "../../../../Arquivos/Feline/001.jpg"
// css
import style from "./Gay.module.css"
import { Link } from "react-router-dom"

const Gay = () => {
  return (
    <>
    <Header />
    <div className={style.cont}>
      <div className={style.im}>
        <h1>Feline Cafe</h1>
        <Link to={"/felinecafe"}>
        <img
      src="https://raw.githubusercontent.com/Jefrey256/imgs/main/page7/001.jpg"
      alt="" />
        </Link>
        <h2>Tradutor: Jeredy</h2>
      </div>
      <div>
        

      </div>
    </div>
    <div className="ku">
    <Footer />
    </div>
    </>

  )
}
export default Gay