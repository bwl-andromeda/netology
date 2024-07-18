import './App.css';
import { ItemClass, ItemFunc } from './component';
import item from './component/item';

function App() {
  return (
    <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <>
          <ItemClass info={item}/>
        </>
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <>
          <ItemFunc info={item}/>
        </>
      </div>
    </div>
  );
}

export default App;
