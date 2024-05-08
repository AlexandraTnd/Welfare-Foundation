import './App.css';
import Ul from './Ul.js';
import Img from './Img.js';
import About from './About';
import Contact from './Contact';
import Calltoaction from './Calltoaction';


function App() {
  return (
    <div className="App">
      <div>
        <div className="px-3 py-2 bg-info">

          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-between">
            <Img src="./1.png" />
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <Ul />
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-center m-4'><Img src="./2.jpg" /></div>
      </div>
      <div className='container'>
        <About />
        <Calltoaction />
      </div>
      <Contact />
    </div>
  );
}

export default App;
