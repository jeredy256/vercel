// GayNSFW.tsx
import React, { useState, useEffect } from "react";
import { ref, push, onValue } from "firebase/database";
import { db } from "../../../firebase"; // Importe a configuração do Firebase
import style from './Coment.module.css'
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
//img
import a from '../../../Arquivos/Feline/001.jpg'
import b from '../../../Arquivos/Feline/002.jpg'
import c from '../../../Arquivos/Feline/003.jpg'
import d from '../../../Arquivos/Feline/004.jpg'
import e from '../../../Arquivos/Feline/005.jpg'
import f from '../../../Arquivos/Feline/006.jpg'
import g from '../../../Arquivos/Feline/007.jpg'
import h from '../../../Arquivos/Feline/008.jpg'
import i from '../../../Arquivos/Feline/009.jpg'
import j from '../../../Arquivos/Feline/010.jpg'
import k from '../../../Arquivos/Feline/011.jpg'
import l from '../../../Arquivos/Feline/012.jpg'
import m from '../../../Arquivos/Feline/013.jpg'
import n from '../../../Arquivos/Feline/014.jpg'
import o from '../../../Arquivos/Feline/015.jpg'
import p from '../../../Arquivos/Feline/016.jpg'
import q from '../../../Arquivos/Feline/017.jpg'
import r from '../../../Arquivos/Feline/018.jpg'
import s from '../../../Arquivos/Feline/019.jpg'
import t from '../../../Arquivos/Feline/020.jpg'
import u from '../../../Arquivos/Feline/021.jpg'
import v from '../../../Arquivos/Feline/022.jpg'
import w from '../../../Arquivos/Feline/023.jpg'
import x from '../../../Arquivos/Feline/024.jpg'
import y from '../../../Arquivos/Feline/025.jpg'
import z from '../../../Arquivos/Feline/026.jpg'
import a1 from '../../../Arquivos/Feline/027.jpg'
import a2 from '../../../Arquivos/Feline/028.jpg'


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
      <img src={m} alt="" />
      <img src={n} alt="" />
      <img src={o} alt="" />
      <img src={p} alt="" />
      <img src={q} alt="" />
      <img src={r} alt="" />
      <img src={s} alt="" />
      <img src={t} alt="" />
      <img src={u} alt="" />
      <img src={v} alt="" />
      <img src={w} alt="" />
      <img src={x} alt="" />
      <img src={y} alt="" />
      <img src={z} alt="" />
      <img src={a1} alt="" />
      <img src={a2} alt="" />
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

export default Feline;
