
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import style from './Style.module.css'
import Comentarios from "../../Comentario";

const Gay = () => {
    return(
        <>
        <div>
        <Header />
        <div className={style.container}>
            <h1>finalmente ta ok a pasta gay</h1>
        <img
      src="https://raw.githubusercontent.com/Jefrey256/imgs/main/page7/001.jpg"
      alt="" />
         </div> 
         <Comentarios />
        <Footer />
        </div>
        </>
    )
}
export default Gay;