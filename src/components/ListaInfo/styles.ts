import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 2rem;
  margin-left: 1rem;
  margin-right: 1rem;
  
  h3 {
    text-align: center;
    font-size: 25px;
    font-weight: 700;
    color: var(--blue-light);
    margin: 0 0 25px 0;
    
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    width: 30rem;
    border-radius: 8px;
    margin: 5px;
    border: 10px solid #d7d7d7;
    background-color: #ebecf0;
  }

  li {
    list-style-type: none;
    flex: 0 0 auto; /* Tamanho fixo para cada item, sem crescimento ou encolhimento */
    width: 230px; /* Ajuste conforme necessário para o tamanho desejado */
    margin-right: 10px; /* Adiciona algum espaço entre os itens (ajuste conforme necessário) */
    width: 30rem;
    border-radius: 5px;
    background-color: #ebecf0;


    h4 {
      margin: 5px;
      text-align: center;
      margin-bottom: 10px;
      color: var(--blue-light);
      font-size: 20px;
      font-weight: 750;
    }

    div {
      margin: 20px;
    }

    p { 
        padding: 3px;
        text-align: left;
        color:#012c38;
    }

    li {
        padding: 1rem 2rem;
        color: var(--text-body);
        background-color: #fff;
        border: 0;
        border-radius: 8px;
        margin: 10px;
        list-style: none;

        display: flex;
        justify-content: space-between;
    }
        
    button {
      margin: 5px auto; 
      border-radius: 10px;
      padding: 5px;
      display: block; /* Para ocupar a largura total disponível */
      text-align: center; /* Para centralizar o texto dentro do botão */
    }

    button:hover {
      background-color: #b5b3b3;
      transition: 1s;
    }

  }

`
