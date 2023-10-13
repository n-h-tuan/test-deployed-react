import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/navbar.component';
import { Home } from './components/home.component';
import About from './components/about.component';
import Contact from './components/contact.component';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
