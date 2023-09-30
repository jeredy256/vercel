// GayNSFW.tsx
import React, { useState, useEffect } from "react";
import { ref, push, onValue } from "firebase/database";
import { db } from "../../../firebase"; // Importe a configuração do Firebase
import style from './Coment.module.css'
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

import a from '../../../Arquivos/Amumu/1.jpg'
import b from '../../../Arquivos/Amumu/2.jpg'
import c from '../../../Arquivos/Amumu/3.jpg'
import d from '../../../Arquivos/Amumu/4.jpg'
import e from '../../../Arquivos/Amumu/5.jpg'
import f from '../../../Arquivos/Amumu/6.jpg'
import g from '../../../Arquivos/Amumu/7.jpg'
import h from '../../../Arquivos/Amumu/8.jpg'
import i from '../../../Arquivos/Amumu/9.jpg'
import j from '../../../Arquivos/Amumu/10.jpg'
import k from '../../../Arquivos/Amumu/11.jpg'
import l from '../../../Arquivos/Amumu/12.jpg'


// Defina o tipo para os comentários
interface Comentario {
  texto: string;
}

function Amumu() {
  const [comentario, setComentario] = useState("");
  const [comentarios, setComentarios] = useState<Comentario[]>([]);
  const comentariosRef = ref(db, "coments/nsfw/gay1"); // Caminho para os comentários da página "Gay" na categoria NSFW

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
      <div className={style.feko}>
      <img src={a} alt="" />
      <img src={b} alt="" />
      <img src={c} alt="" />
      <img src={d} alt="" />
      <img src={e} alt="" />
      <img src={f} alt="" />
      <img src={g} alt="" />
      <img src={h} alt="" />
      <img src={i} alt="" />
      <img src={j} alt="" />
      <img src={k} alt="" />
      <img src={l} alt="" />

      </div>
      {/* e */}
      <h2 className={style.h2o}></h2>
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

export default Amumu;
