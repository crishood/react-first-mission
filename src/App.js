import logo from './logo.svg';
import './App.css';
import { Button } from './Button';
import { Title } from './Title';
import { Subtitle } from './Subtitle';



function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <Title/>
        <Subtitle/>
        <Button/>
      </header>
    </div>
  );
}

export default App;
