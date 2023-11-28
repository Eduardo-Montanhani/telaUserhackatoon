import React, { useContext, useState } from "react";
import { InfoContext } from "../Contexts/infoContext";
import { Container } from "./styles";
import SweetAlert2 from "react-sweetalert2";

interface InfoComID {
  id: string;
  nome: string;
  rotaInicial: string;
  rotaFinal: string;
  horario: string;
  preco: string;
}

const ListaInfo: React.FC = () => {
  const { infos } = useContext(InfoContext);

  // Utilize um estado local para controlar a visibilidade do SweetAlert2 para cada item
  const [mostrarModal, setMostrarModal] = useState(false);
  const [infoSelecionado, setInfoSelecionado] = useState<InfoComID | null>(null);

  function mostrarMensagem() {
    // Verifica se há um item selecionado antes de exibir a mensagem
    if (infoSelecionado) {
 // Exclui o item
      setMostrarModal(true); // Exibe a mensagem
    }
  }

  function limparCamposEFecharModal() {
    setMostrarModal(false);
  }

  return (
    
    <Container>
        
      <div>
         <h3>Lista de Rotas</h3>
        <ul>
          {infos.map((info) => (
            <li key={info.id}>
              <div>
                <strong>
                  <p>Rota: {info.nome}</p>
                </strong>
                <strong>
                  <p>Origem: {info.rotaInicial}</p>
                </strong>
                <strong>
                  <p>Destino: {info.rotaFinal}</p>
                </strong>
                <strong>
                  <p>Horário Saída: {info.horario}</p>
                </strong>
                <strong>
                  <p>Valor: {info.preco}</p>
                </strong>

                <button
                  onClick={() => {
                    setInfoSelecionado(info);
                    mostrarMensagem();
                  }}
                >
                  COMPRAR PASSAGEM
                </button>

                <SweetAlert2
                  show={mostrarModal}
                  title="PASSAGEM COMPRADA"
                  text="MUITO OBRIGADO POR USAR NOSSO SITE!!"
                  onConfirm={limparCamposEFecharModal}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default ListaInfo;
