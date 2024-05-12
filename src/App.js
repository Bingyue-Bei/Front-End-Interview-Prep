
import './App.css';

import Accordion from './components/Accordion';
import RandomColor from './components/RandomColor';
import StarRating from './components/StarRating';
import ImageSlider from './components/ImageSlider';
import LoadMore from './components/LoadMore';

function App() {
  return (
    <div className="App">
      <div className="Menu">
        <ul>
          <li>Accordion</li>
          <li>Random Color Generator</li>
          <li>Star Rating</li>
          <li>Image Slider</li>
        </ul>
        <LoadMore />
      </div>
    </div>
  );
}

export default App;
