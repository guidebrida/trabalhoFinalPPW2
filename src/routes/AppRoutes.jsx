import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LayoutBase } from '../components/LayoutBase/LayoutBase';
import { PagCadastroFunkos } from '../components/PagCadastroFunkos/PagCadastroFunkos';
import { PagCadastroUsuarios } from '../components/PagCadastroUsuario/PagCadastroUsuarios';
import { CompFunkoCard } from '../components/CompFunkoCard/CompFunkoCard';


export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutBase />}>
          <Route path={'/CadastroFunko'} element={<PagCadastroFunkos />} />
          <Route path={'/CadastroUsuario'} element={<PagCadastroUsuarios />} />
          <Route path={'/loja'} element={<CompFunkoCard />} />

        </Route>

        
      </Routes>
    </BrowserRouter>
  );
};
