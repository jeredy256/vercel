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
    
        <section className={style.pig}>
          <div className={style.cont}>
            <div className={style.ft}>
              <h1>Feline Cafe</h1>
        <Link to={"/felinecafe"}>
        <img src={img} alt="" />
        </Link>
        <h2>Tradutor: Jeredy</h2>
            </div>
          </div>
        </section>
        
  
    
    <Footer />
    
    </>

  )
}
export default Gay