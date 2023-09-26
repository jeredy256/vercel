// GayNSFW.tsx
import React, { useState, useEffect } from "react";
import { ref, push, onValue } from "firebase/database";
import { db } from "../../../firebase"; // Importe a configuração do Firebase
import style from './Coment.module.css'
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
//img


// Defina o tipo para os comentários
interface Comentario {
  texto: string;
}

function Feline() {
  const [comentario, setComentario] = useState("");
  const [comentarios, setComentarios] = useState<Comentario[]>([]);
  const comentariosRef = ref(db, "coments/nsfw/gay"); // Caminho para os comentários da página "Gay" na categoria NSFW

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Adicione o comentário ao banco de dados
    const novoComentario: Comentario = { texto: comentario };
    push(comentariosRef, novoComentario); // Armazena o comentário no Firebase

    // Limpe o campo de entrada do comentário
    setComentario("");
  };

  useEffect(() => {
    // Use 'onValue' para ouvir atualizações em tempo real
    onValue(comentariosRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const comentariosArray: Comentario[] = Object.values(data);
        // Inverta a ordem dos comentários para exibir os mais recentes primeiro
        setComentarios(comentariosArray.reverse());
      } else {
        setComentarios([]);
      }
    });
  }, []);

  return (
    <>
    <Header />
    <div className={style.driv}>
      {/* s */}
      <div >
     <div>
      <img
      src="https://raw.githubusercontent.com/Jefrey256/imgs/main/page7/001.jpg"
      alt="" />
     </div>
       <img
      src="https://raw.githubusercontent.com/Jefrey256/imgs/main/page7/002.jpg"
      alt="" />
       <img
      src="https://raw.githubusercontent.com/Jefrey256/imgs/main/page7/003.jpg"
      alt="" />
       <img
      src="https://raw.githubusercontent.com/Jefrey256/imgs/main/page7/004.jpg"
      alt="" />
       <img
      src="https://raw.githubusercontent.com/Jefrey256/imgs/main/page7/005.jpg"
      alt="" />
       <img
      src="https://raw.githubusercontent.com/Jefrey256/imgs/main/page7/006.jpg"
      alt="" />
      <img
      src="https://raw.githubusercontent.com/Jefrey256/imgs/main/page7/007.jpg"
      alt="" />
      <img
      src="https://raw.githubusercontent.com/Jefrey256/imgs/main/page7/008.jpg"
      alt="" />
      <img
      src="https://raw.githubusercontent.com/Jefrey256/imgs/main/page7/009.jpg"
      alt="" />
      <img
      src="https://raw.githubusercontent.com/Jefrey256/imgs/main/page7/010.jpg"
      alt="" />
      <img
      src="https://raw.githubusercontent.com/Jefrey256/imgs/main/page7/011.jpg"
      alt="" />
      <img
      src="https://raw.githubusercontent.com/Jefrey256/imgs/main/page7/012.jpg"
      alt="" />
      <img
      src="https://raw.githubusercontent.com/Jefrey256/imgs/main/page7/013.jpg"
      alt="" />
      <img
      src="https://raw.githubusercontent.com/Jefrey256/imgs/main/page7/014.jpg"
      alt="" />
      <img
      src="https://raw.githubusercontent.com/Jefrey256/imgs/main/page7/015.jpg"
      alt="" />
      <img
      src="https://raw.githubusercontent.com/Jefrey256/imgs/main/page7/016.jpg"
      alt="" />
      <img
      src="https://raw.githubusercontent.com/Jefrey256/imgs/main/page7/017.jpg"
      alt="" />
      <img
      src="https://raw.githubusercontent.com/Jefrey256/imgs/main/page7/018.jpg"
      alt="" />
      <img
      src="https://raw.githubusercontent.com/Jefrey256/imgs/main/page7/019.jpg"
      alt="" />
      <img
      src="https://raw.githubusercontent.com/Jefrey256/imgs/main/page7/020.jpg"
      alt="" />
      <img
      src="https://raw.githubusercontent.com/Jefrey256/imgs/main/page7/021.jpg"
      alt="" />
      <img
      src="https://raw.githubusercontent.com/Jefrey256/imgs/main/page7/022.jpg"
      alt="" />
      <img
      src="https://raw.githubusercontent.com/Jefrey256/imgs/main/page7/023.jpg"
      alt="" />
      <img
      src="https://raw.githubusercontent.com/Jefrey256/imgs/main/page7/024.jpg"
      alt="" />
      <img
      src="https://raw.githubusercontent.com/Jefrey256/imgs/main/page7/025.jpg"
      alt="" />
      <img
      src="https://raw.githubusercontent.com/Jefrey256/imgs/main/page7/026.jpg"
      alt="" />
      <img
      src="https://raw.githubusercontent.com/Jefrey256/imgs/main/page7/027.jpg"
      alt="" />
      <img
      src="https://raw.githubusercontent.com/Jefrey256/imgs/main/page7/028.jpg"
      alt="" />
      </div>
      {/* e */}
      <h2 className={style.h2o}>Comentários para Feline cafe (NSFW)</h2>
      <form className={style.form1} onSubmit={handleSubmit}>
        <input className={style.input1}
          type="text"
          placeholder="Digite seu comentário"
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
        />
        <button className={style.button1} type="submit">Enviar</button>
      </form>
      <ul className={style.ul1}>
        {comentarios.map((comentario, index) => (
          <li className={style.li1} key={index}>{comentario.texto}</li>
        ))}
      </ul>
    </div>
    <Footer />
    </>
  );
}

export default Feline;
