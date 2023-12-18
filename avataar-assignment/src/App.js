
import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import { CarouselData } from './components/CarouselData';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carousel slides={CarouselData} />
      <Footer />
    </div>
  );
}

export default App;
