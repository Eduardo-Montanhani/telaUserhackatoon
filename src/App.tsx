import { useState } from 'react'
import { InfoProvider } from "./components/Contexts/infoContext";
import ListaInfo from "./components/ListaInfo";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import Modal from 'react-modal';
import { UsersProvider } from "./components/Contexts/userContext";
import { CustomUser } from './components/CustomUser';

Modal.setAppElement('#root');
function App() {
  const [isVisibleUser, setIsVisibleUser] = useState(false)

  function abrirUser() {
      setIsVisibleUser(true)
  }

  function fecharUser() {
      setIsVisibleUser(false)
  }

  return (
    <>
      <InfoProvider>
        <GlobalStyle />
        <Header 
        abrirUser={abrirUser}/>
        <ListaInfo />

      </InfoProvider>
      <UsersProvider>
            <CustomUser
                    UserVisible={isVisibleUser}
                    fecharUser={fecharUser}

                />
            </UsersProvider>
    </>
  );
}

export default App;
