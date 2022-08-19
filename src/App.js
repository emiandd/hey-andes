import './App.css';
import Companies from './pages/Companies.jsx';
import CompanyDetail from './pages/CompanyDetail.jsx';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
     <Routes>
       <Route path="/empresas" element={<Companies />} />
       <Route path="/empresas/:nombre_empresa" element={<CompanyDetail />} />
     </Routes>
    </>
  );
}

export default App;
