

import {Routes, Route} from 'react-router-dom'

//Rotas
import Home from '../components/Home/Home'
import Header from '../components/Header/Header'
import Erro from '../components/Error'
import Comentarios from '../components/Comentario'

//Nsfw
import Gay from '../components/pages/Nsfw/Gay/Gay'
import Hetero from '../components/pages/Nsfw/Hetero'
import Lesbi from '../components/pages/Nsfw/Lesbi'
import Futa from '../components/pages/Nsfw/Futa'
//Sfw
import Gays_ from '../components/pages/Sfw/Gays'
import Hetero_ from '../components/pages/Sfw/Hetero'
import Lesbi_ from '../components/pages/Sfw/Lesbica'
import Testt from '../components/pages/Teste'
//comics
import Feline from '../components/Comics/FelineCafe'


const MainRouter = () => {
    return(
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
      {/* //teste */}
      <Route path='/testt' element={<Testt />}/>
       {/* Comics*/}
       <Route path='/felinecafe' element={<Feline />} />




      <Route path='*' element={<Erro />} />
      

        </Routes>
    )
}

export default MainRouter