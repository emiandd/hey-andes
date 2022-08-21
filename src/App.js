import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home.jsx';
import Companies from './pages/Companies/Companies.jsx';
import CompanyDetail from './pages/CompanyDetail/CompanyDetail.jsx';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/empresas" element={<Companies />} />
       <Route path="/empresas/:nombre_empresa" element={<CompanyDetail />} />
     </Routes>
    </>
  );
}

export default App;
