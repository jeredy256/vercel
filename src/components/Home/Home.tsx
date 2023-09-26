import  { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import Footer from '../Footer/Footer';


const Home = () => {
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
      <div id="hamburger">&#9776;</div>
      
      <div id="menu">
        <ul className="reto">
          <li><a href="#">Página Inicial</a></li>
          <li><a href="./src/html/lancamentos.html">Lançamentos</a></li>
          <li><a href="./src/html/teste.html">Serviços</a></li>
          <li className="has-submenu">
            <a className="anc" href="#">SFW<span className="submenu-icon">&#709;</span></a>
            <ul className="lulu">
              <li><Link to={"/furbr/gay_"}>Gay</Link></li>
              <li><Link to={'/furbr/hetero_'}>Hétero</Link></li>
              <li><Link to={'/furbr/lesbi_'}>Lesbi</Link></li>
            </ul>
          </li>
          <li className="has-submenu">
            <a href='#' >NSFW <span className="submenu-icon">&#709;</span></a>
            <ul className="lulu">
              <li><Link to={'/furbr/gay'}>Gay</Link></li>
              <li>
                <Link to={"/furbr/hetero"}>Hetero</Link></li>
              <li><Link to={"/furbr/futa"}>Futa</Link></li>
              <li><Link to={"/furbr/lesbi"}> Lesbi</Link></li>
            </ul>
          </li>
        </ul>
      </div>
      
      
      <section className="pig">
        <div className="cont">
          <div className="ft">
            <h2 >NEKO ARC</h2>
            <img src="https://media.tenor.com/rBTJCRQgBvgAAAAi/neco-arc.gif" alt=""/>
            <h2 >Editor: JEREDY</h2>
          </div>
          <div className="ft">
            <h2 >NEKO ARC</h2>
            <img src="https://art.ngfiles.com/images/2714000/2714398_lovetopullmicke_neco-arc.png?f1662171604" alt=""/>
            <h2 >Editor: JEREDY</h2>
          </div>
          <div className="ft">
            <h2 >NEKO ARC</h2>
            <img src="https://preview.redd.it/is-there-a-neco-arc-plush-v0-b30tarzwh0ya1.jpg?width=1080&crop=smart&auto=webp&s=92008f75a40b5025b7b946721c73f502ecbd3d88" alt=""/>
            <h2 >Editor: JEREDY</h2>
          </div>
        </div>
      </section>

      
    <section>
        <h2>Postagens</h2>
        <div className="postagem">
            <h3>Feline Café</h3>
            <a href="http://furrbrcomics.byethost13.com/index.php"><p>click</p></a>
        </div>
        <div className="postagem">
            <h3>Título da Postagem 2</h3>
            <p>Conteúdo da Postagem 2</p>
        </div>
        {/* <!-- Adicione mais postagens aqui --> */}
    </section>

      <Footer />
    </>
  );
};

export default Home;

 