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
  
}

li {

        list-style-type: none;
         flex: 0 0 auto; /* Tamanho fixo para cada item, sem crescimento ou encolhimento */
         width: 250px; /* Ajuste conforme necessário para o tamanho desejado */
         margin-right: 10px; /* Adiciona algum espaço entre os itens (ajuste conforme necessário) */
         width: 30rem;
        border-radius: 8px;
        margin: 5px;
        border: 2px solid #d7d7d7;
        background: -webkit-linear-gradient(left, #8da6a1, #0381e8);
        background: -moz-linear-gradient(left, #8da6a1, #0381e8);
        background: -ms-linear-gradient(left, #8da6a1, #0381e8);
        background: -o-linear-gradient(left, #8da6a1, #0381e8);
        background: linear-gradient(to right, #8da6a1, #0381e8);


        h4 {
          margin: 5px;
          text-align:center;
            margin-bottom: 10px;
            color: var(--blue-light);
            font-size: 20px;
            font-weight: 750;
        }

        p {
            margin: 5px;
            text-align:center;
            color:#FFFFFF;
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
  margin: 5px auto; /* Auto nas laterais horizontalmente para centralizar */
  background: -webkit-linear-gradient(left, #d7ff00, #cafb05);
  background: -moz-linear-gradient(left, #d7ff00, #cafb05);
  background: -ms-linear-gradient(left, #d7ff00, #cafb05);
  background: -o-linear-gradient(left, #d7ff00, #cafb05);
  background: linear-gradient(to right, #d7ff00, #cafb05);
  border-radius: 10px;
  padding: 5px;
  display: block; /* Para ocupar a largura total disponível */
  text-align: center; /* Para centralizar o texto dentro do botão */
}

}

`
