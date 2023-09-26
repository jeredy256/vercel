// GaySFW.tsx
import React, { useState, useEffect } from "react";
import { ref, push, onValue } from "firebase/database";
import { db } from "../../../firebase"; // Importe a configuração do Firebase
import style from './Coment.module.css'
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

// Defina o tipo para os comentários
interface Comentario {
  texto: string;
}

function GaySFW() {
  const [comentario, setComentario] = useState("");
  const [comentarios, setComentarios] = useState<Comentario[]>([]);
  const comentariosRef = ref(db, "coments/sfw/gay"); // Caminho para os comentários da página "Gay" na categoria SFW

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
      <h2 className={style.h2o}>Comentários para Gay (SFW)</h2>
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

export default GaySFW;
