import  { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.module.css';



const Header = () => {
  useEffect(() => {
    // Função para manipulação do evento do hamburguer
    const handleHamburguerClick = () => {
      const menu = document.getElementById('menu');
      if (menu) {
        menu.classList.toggle('active');
      }
    };

    // Adiciona o ouvinte de evento ao elemento com ID 'hamburger'
    const hamburguer = document.getElementById('hamburger');
    if (hamburguer) {
      hamburguer.addEventListener('click', handleHamburguerClick);
    }

    // Adiciona os ouvintes de evento aos itens de submenu
    const submenuItems = document.querySelectorAll('#menu .has-submenu');
    submenuItems.forEach(item => {
      item.addEventListener('click', () => {
        item.classList.toggle('active');
      });
    });

    // Função para remover os ouvintes de evento quando o componente é desmontado
    return () => {
      if (hamburguer) {
        hamburguer.removeEventListener('click', handleHamburguerClick);
      }
      submenuItems.forEach(item => {
        item.removeEventListener('click', () => {
          item.classList.toggle('active');
        });
      });
    };
  }, []);
  

  return (
    <>
      <header>
      <h1 className="h1alt">Seja Bem vindo a FURBRComics</h1>
      </header>
      <div id="hamburger" className="btn">&#9776;</div>
      
      <div id="menu">
      <div id="qi">
        <ul className="reto">
          <li><a> <Link to={"/"}>Página Inicial</Link>  </a></li>
          {/* <li><a href="./src/html/lancamentos.html">Lançamentos</a></li> */}
          {/* <li><a href="./src/html/teste.html">Serviços</a></li> */}
          <li className="has-submenu">
            <a className="anc" href="#">SFW<span className="submenu-icon">&#709;</span></a>
            <ul className="lulu">
              <li><Link to={"/gay_"}>Gay</Link></li>
              <li><Link to={'/hetero_'}>Hétero</Link></li>
              <li><Link to={'/lesbi_'}>Lesbico</Link></li>
            </ul>
          </li>
          <li className="has-submenu">
            <a href='#' >NSFW <span className="submenu-icon">&#709;</span></a>
            <ul className="lulu">
              <li><Link to={'/gay'}>Gay</Link></li>
              <li>
                <Link to={"/hetero"}>Hétero</Link></li>
              <li><Link to={"/futa"}>Futanari</Link></li>
              <li><Link to={"/lesbi"}> Lesbico</Link></li>
            </ul>
          </li>
        </ul>
        </div>
      </div>
      
     

      
   

     
    </>
  );
};

export default Header;

 