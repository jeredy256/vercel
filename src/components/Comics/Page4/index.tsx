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
import a2 from '../../../Arquivos/pager4/28.jpg'
import a3 from '../../../Arquivos/pager4/29.jpg'
import a4 from '../../../Arquivos/pager4/30.jpg'
import a5 from '../../../Arquivos/pager4/31.jpg'
import a6 from '../../../Arquivos/pager4/32.jpg'
import a7 from '../../../Arquivos/pager4/33.jpg'
import a8 from '../../../Arquivos/pager4/34.jpg'
import a9 from '../../../Arquivos/pager4/35.jpg'
import a10 from '../../../Arquivos/pager4/36.jpg'
import a11 from '../../../Arquivos/pager4/37.jpg'
import a12 from '../../../Arquivos/pager4/38.jpg'
import a13 from '../../../Arquivos/pager4/39.jpg'
import a14 from '../../../Arquivos/pager4/40.jpg'
import a15 from '../../../Arquivos/pager4/41.jpg'
import a16 from '../../../Arquivos/pager4/42.jpg'
import a17 from '../../../Arquivos/pager4/43.jpg'
import a18 from '../../../Arquivos/pager4/44.jpg'
import a19 from '../../../Arquivos/pager4/45.jpg'
import a20 from '../../../Arquivos/pager4/46.jpg'
import a21 from '../../../Arquivos/pager4/47.jpg'
import a22 from '../../../Arquivos/pager4/48.jpg'
import a23 from '../../../Arquivos/pager4/49.jpg'
import a24 from '../../../Arquivos/pager4/50.jpg'
import a25 from '../../../Arquivos/pager4/51.jpg'
import a26 from '../../../Arquivos/pager4/52.jpg'
import a27 from '../../../Arquivos/pager4/53.jpg'
import a28 from '../../../Arquivos/pager4/54.jpg'
import a29 from '../../../Arquivos/pager4/55.jpg'
import a30 from '../../../Arquivos/pager4/56.jpg'
import a31 from '../../../Arquivos/pager4/57.jpg'
import a32 from '../../../Arquivos/pager4/58.jpg'
import a33 from '../../../Arquivos/pager4/59.jpg'
import a34 from '../../../Arquivos/pager4/60.jpg'
import a35 from '../../../Arquivos/pager4/61.jpg'
import a36 from '../../../Arquivos/pager4/62.jpg'
import a37 from '../../../Arquivos/pager4/63.jpg'
import a38 from '../../../Arquivos/pager4/64.jpg'
import a39 from '../../../Arquivos/pager4/65.jpg'
import a40 from '../../../Arquivos/pager4/66.jpg'
import a41 from '../../../Arquivos/pager4/67.jpg'
import a42 from '../../../Arquivos/pager4/68.jpg'
import a43 from '../../../Arquivos/pager4/69.jpg'
import a44 from '../../../Arquivos/pager4/70.jpg'
import a45 from '../../../Arquivos/pager4/71.jpg'
import a46 from '../../../Arquivos/pager4/72.jpg'
import a47 from "../../../Arquivos/pager4/final.jpg"



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
      <img src={a2} alt="" />
      <img src={a3} alt="" />
      <img src={a4} alt="" />
      <img src={a5} alt="" />
      <img src={a6} alt="" />
      <img src={a7} alt="" />
      <img src={a8} alt="" />
      <img src={a9} alt="" />
      <img src={a10} alt="" />
      <img src={a11} alt="" />
      <img src={a12} alt="" />
      <img src={a13} alt="" />
      <img src={a14} alt="" /> 
      <img src={a15} alt="" />
      <img src={a16} alt="" />
      <img src={a1} alt="" />
      <img src={a18} alt="" />
      <img src={a19} alt="" />
      <img src={a20} alt="" />
      <img src={a23} alt="" />
      <img src={a24} alt="" />
      <img src={a25} alt="" />
      <img src={a26} alt="" />
      <img src={a27} alt="" />
      <img src={a28} alt="" />
      <img src={a29} alt="" />
      <img src={a30} alt="" />
      <img src={a31} alt="" />
      <img src={a32} alt="" />
      <img src={a33} alt="" />
      <img src={a34} alt="" />
      <img src={a35} alt="" />
      <img src={a36} alt="" />
      <img src={a37} alt="" />
      <img src={a38} alt="" />
      <img src={a39} alt="" />
      <img src={a40} alt="" />
      <img src={a41} alt="" />
      <img src={a42} alt="" />
      <img src={a43} alt="" />
      <img src={a44} alt="" />
      <img src={a45} alt="" />
      <img src={a46} alt="" />
      <img src={a47} alt="" />
      
      
      
      


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
