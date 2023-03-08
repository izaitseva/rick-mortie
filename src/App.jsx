import { Route, Routes } from 'react-router-dom';
import './App.css';
import CharacterPage from './pages/CharacterPage';
import Characters from './pages/Characters';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { paths } from './paths';

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path={paths.characters} element={<Characters />} />
      <Route path={paths.characterPage} element={<CharacterPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes >
  );
}

export default App;
