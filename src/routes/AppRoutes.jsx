import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LayoutBase } from '../components/LayoutBase/LayoutBase';
import { PagCadastroFunkos } from '../components/PagCadastroFunkos/PagCadastroFunkos';
import { PagCadastroUsuarios } from '../components/PagCadastroUsuario/PagCadastroUsuarios';
import { PagLoja } from '../components/PagLoja/PagLoja';
import { PagLogin } from '../components/PagLogin/PagLogin';
import { PagMeuUsuario } from '../components/PagMeuUsuario/PagMeuUsuario';
import { CompCheckLogin } from '../components/CompCheckLogin/CompCheckLogin';


export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutBase />}>
          <Route path={'/CadastroUsuario'} element={<PagCadastroUsuarios />} />
          <Route path={'/loja'} element={<PagLoja />} />
          <Route path={'/Login'} element={<PagLogin />} />
          <Route element={<CompCheckLogin />}>
          <Route path={'/CadastroFunko'} element={<PagCadastroFunkos />} />
          <Route path={'/MeuUsuario'} element={<PagMeuUsuario />} />
          </Route>
          <Route path={'*'} element={<Navigate to='/loja' replace/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
