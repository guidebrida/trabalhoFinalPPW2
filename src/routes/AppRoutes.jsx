import { BrowserRouter } from "react-router-dom"
import { PagCadastroFunkos } from "../components/PagCadastroFunkos/PagCadastroFunkos"



export const AppRoutes = () => {
    return(
        <BrowserRouter>
        <Routes>
        <Route path={"/CadastroFunko"} element={<PagCadastroFunkos />} />   
        </Routes>    
        </BrowserRouter>
    )
}