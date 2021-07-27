import './App.css';
import NavBar from './components/Navbar/navbar';
import Example from './components/Carousel/carousel';
import GridCards from './components/Grid/grid';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Example />
      <GridCards />
    </div>
  );
}

export default App;
