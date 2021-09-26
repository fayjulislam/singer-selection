import './App.css';
import Banner from './component/Banner/Banner';
import Header from './component/Header/Header';
import Singers from './component/Singers/Singers';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Singers></Singers>
    </div>
  );
}

export default App;


