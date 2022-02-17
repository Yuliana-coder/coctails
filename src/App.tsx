import { Routes, Route } from 'react-router-dom';
import { Homepage } from './components/Homepage/Homapage'
import { Header } from './components/Header/Header'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
