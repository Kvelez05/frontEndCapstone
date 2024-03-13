import './App.css';
import { Header } from './Header.js';
import { Nav } from './Nav.js';
import { Footer } from './Footer.js';
import { Main } from './Main.js';

function App() {
  return (
    <>
    <Header >
      <Nav></Nav>
    </Header>
    <Main />
    <Footer />
    </>
  );
}

export default App;
