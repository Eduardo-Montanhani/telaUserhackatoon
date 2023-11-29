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
    display: flex; /* Make the list a flex container */
    flex-wrap: wrap;
    gap: 10px; /* Add some space between the list items */
    padding: 10px; /* Add padding to the ul */
  }

  li {
    list-style-type: none;
    width: 230px;
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
      color: #012c38;
    }

    button {
      margin: 5px auto;
      border-radius: 10px;
      padding: 5px;
      display: block;
      text-align: center;
    }

    button:hover {
      background-color: #b5b3b3;
      transition: 1s;
    }
  }
`;
