import axios from "axios";
import {
    ReactNode,
    createContext,
    useState,
    useEffect
} from "react";

interface Info {
    
    nome: string;
    rotaInicial: string;
    rotaFinal: string;
    horario: string;
    preco: string;
}

interface InfoComID {
    id: string;
    nome: string;
    rotaInicial: string;
    rotaFinal: string;
    horario: string;
    preco: string;
}

interface PropsInfoContext {
    infos: Array<InfoComID>;
   
    
}
export const InfoContext = createContext(
    {} as PropsInfoContext
)
interface PropsInfoProvider {
    children: ReactNode
}
export function InfoProvider({children}: PropsInfoProvider) {

    const [infos, setInfo] = useState([])


useEffect(() => {
    axios.get('http://localhost:3000/rotas')
        .then((res) => {
            setInfo(res.data);
        })
        .catch((error) => {
            console.error('Erro ao buscar dados da API:', error);
        });
}, []);



return (
    <InfoContext.Provider value={{
        infos

    }}>
        
        {children}
    </InfoContext.Provider>
)
}



