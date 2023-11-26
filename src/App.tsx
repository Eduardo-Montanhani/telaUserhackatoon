
import { InfoProvider } from "./components/Contexts/infoContext";
import ListaInfo from "./components/ListaInfo";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import Modal from 'react-modal';

Modal.setAppElement('#root');
function App() {


  return (
    <>
      <InfoProvider>
        <GlobalStyle />
        <Header />
        <ListaInfo />

      </InfoProvider>
    </>
  );
}

export default App;
