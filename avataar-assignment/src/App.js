import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import { CarouselData } from './components/CarouselData';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carousel slides={CarouselData} />
    </div>
  );
}

export default App;
