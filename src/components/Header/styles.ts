import styled from 'styled-components'

export const Container = styled.header`
    background-color: var(--blue);
    padding: 1rem 1rem 1rem;
    border: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 4px 15px -3px rgba(1, 77, 99);

    h1 {
        color: #f69a0b;
    }

    button {
        font-size: 1rem;
        color: #fff;
        background-color: var(--blue-light);
        border: 2px;
        padding: 0 3rem;
        margin: 2px;


        border-radius: 8px;
        height: 3rem;

        transition: 1s;

        &:hover {
            background-color: #037fa3;
            border: 2px solid;
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        }

    }


    img {
        max-width:200px;
        max-height:100px;
        width: auto;
        height: auto;
}
 /* Seu arquivo de estilo CSS */

.imagem-container {
  overflow: auto; /* Limpa o float */
}

.imagem-container img {
  float: left;
  margin-right: 10px; /* Adiciona algum espaço entre as imagens (ajuste conforme necessário) */
}
/* Seu arquivo de estilo CSS */

.imagem-container {
  display: flex;
}

.imagem-container img {
  margin-right: 10px; /* Adiciona algum espaço entre as imagens (ajuste conforme necessário) */
}


    `