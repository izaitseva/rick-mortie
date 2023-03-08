import { Route, Routes } from 'react-router-dom';
import './App.css';
import CharacterDetails from './pages/CharacterDetails';
import Characters from './pages/Characters';
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import { paths } from './paths';

function App() {
  return (
    <Routes>
      <Route path={paths.main} element={<Main />} />
      <Route path={paths.characters} element={<Characters />} />
      <Route path={paths.characterDetails} element={<CharacterDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
