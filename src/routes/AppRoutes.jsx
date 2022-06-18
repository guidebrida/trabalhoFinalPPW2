import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LayoutBase } from '../components/LayoutBase/LayoutBase';
import { PagCadastroFunkos } from '../components/PagCadastroFunkos/PagCadastroFunkos';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutBase />}>
          <Route path={'/CadastroFunko'} element={<PagCadastroFunkos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
