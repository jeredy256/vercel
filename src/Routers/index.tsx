import { Routes, Route } from "react-router-dom";
//Rotas
import Home from "../components/Home/Home";
import Header from "../components/Header/Header";
import Comentarios from "../components/Comentario";
//Nsfw
import Gay from "../components/pages/Nsfw/Gay";
import Futa from "../components/pages/Nsfw/Futa";
import Hetero from "../components/pages/Nsfw/Hetero";
import Lesbi from "../components/pages/Nsfw/Lesbi";
//Sfw
import Gays_ from "../components/pages/Sfw/Gays";
import Hetero_ from "../components/pages/Sfw/Hetero";
import Lesbi_ from "../components/pages/Sfw/Lesbica";
//Error
import Erro from "../components/Error";





const MainRouters = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
      <Route path='/header' element={<Header />} />
        {/* nsfw */}
        {/* <Route path='/gay' element={<Gay />} /> */}
        <Route path='/gay' element={<Gay />}/>

      <Route path='/hetero' element={<Hetero />} />
      <Route path='/lesbi' element={<Lesbi />} />
      <Route path='/futa' element={<Futa />} />
      {/* sfw */}
      <Route path='/gay_' element={<Gays_ />} />
      <Route path='/hetero_' element={<Hetero_ />} />
      <Route path='/lesbi_' element={<Lesbi_ />} />

      <Route path="/coment" element={<Comentarios />} />
      <Route path='*' element={<Erro />} />
      

        </Routes>
    )
}

export default MainRouters