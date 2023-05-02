import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ResultadoContextProvider } from './contexts';
import Home from './pages/Home';
import Menu from './components/Menu/Menu';
import LotofacilPage from './pages/LotofacilPage';
import MegaSenaPage from './pages/MegaSenaPage';
import QuinaPage from './pages/QuinaPage';


function App() {
  return (
    <ResultadoContextProvider>
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lotofacil" element={<LotofacilPage />} />
          <Route path="/megasena" element={<MegaSenaPage />} />
          <Route path="/quina" element={<QuinaPage />} />
        </Routes>
      </Router>
    </ResultadoContextProvider>
  );
}

export default App;
