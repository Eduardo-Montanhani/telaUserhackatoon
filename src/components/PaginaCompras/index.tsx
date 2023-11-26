import React from "react";
import { useLocation } from "react-router-dom";

interface InfoComID {
    id: string;
    nome: string;
    rotaInicial: string;
    rotaFinal: string;
    horario: string;
    preco: string;
  }
  

const PaginaCompras: React.FC = () => {
  const location = useLocation();
  const infoSelecionado: InfoComID | null = (location.state as any)?.infoSelecionado || null;

  return (
    <div>
      <h2>Detalhes da Compra</h2>
      {infoSelecionado && (
        <div>
          <p>Rota: {infoSelecionado.nome}</p>
          <p>Origem: {infoSelecionado.rotaInicial}</p>
          <p>Destino: {infoSelecionado.rotaFinal}</p>
          <p>Horário de Saída: {infoSelecionado.horario}</p>
          <p>Preço: {infoSelecionado.preco}</p>
        </div>
      )}
    </div>
  );
};

export default PaginaCompras;
