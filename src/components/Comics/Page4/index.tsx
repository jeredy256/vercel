// GayNSFW.tsx
import React, { useState, useEffect } from "react";
import { ref, push, onValue } from "firebase/database";
import { db } from "../../../firebase"; // Importe a configuração do Firebase
import style from './Coment.module.css'
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

import a from '../../../Arquivos/pager4/1.jpg'
import b from '../../../Arquivos/pager4/2.jpg'
import c from '../../../Arquivos/pager4/3.jpg'
import d from '../../../Arquivos/pager4/4.jpg'
import e from '../../../Arquivos/pager4/5.jpg'
import f from '../../../Arquivos/pager4/6.jpg'
import g from '../../../Arquivos/pager4/7.jpg'
import h from '../../../Arquivos/pager4/8.jpg'
import i from '../../../Arquivos/pager4/9.jpg'
import j from '../../../Arquivos/pager4/10.jpg'
import k from '../../../Arquivos/pager4/11.jpg'
import l from '../../../Arquivos/pager4/12.jpg'
import m from '../../../Arquivos/pager4/13.jpg'
import n from '../../../Arquivos/pager4/14.jpg'
import o from '../../../Arquivos/pager4/15.jpg'
import p from '../../../Arquivos/pager4/16.jpg'
import q from '../../../Arquivos/pager4/17.jpg'
import r from '../../../Arquivos/pager4/18.jpg'
import s from '../../../Arquivos/pager4/19.jpg'
import t from '../../../Arquivos/pager4/20.jpg'
import u from '../../../Arquivos/pager4/21.jpg'
import v from '../../../Arquivos/pager4/22.jpg'
import w from '../../../Arquivos/pager4/23.jpg'
import x from '../../../Arquivos/pager4/24.jpg'
import y from '../../../Arquivos/pager4/25.jpg'
import z from '../../../Arquivos/pager4/26.jpg'
import a1 from '../../../Arquivos/pager4/27.jpg'
import a2 from '../../../Arquivos/pager4/72.jpg'


// Defina o tipo para os comentários
interface Comentario {
  texto: string;
}

function pager4() {
  const [comentario, setComentario] = useState("");
  const [comentarios, setComentarios] = useState<Comentario[]>([]);
  const comentariosRef = ref(db, "coments/nsfw/pager4"); // Caminho para os comentários da página "Gay" na categoria NSFW

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

export default pager4;
