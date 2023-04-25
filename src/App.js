import React,{useState} from 'react';
import './App.css';
import ClickedButton from './components/ClickedButton';
import InputForm from './components/InputForm';
import Result from './components/Result';

function App() {

  const [brutto, setBrutto] = useState('');
  const [podatek, setPodatek] = useState(18);
  const [netto, setNetto] = useState('');

    function handleInputChange(e){
      const {name, value} = e.target;
      name === 'brutto' ? setBrutto(value) : setPodatek(parseInt(value));
    }
    function handleButtonClick(){
      const netto = (brutto *(1 - podatek / 100)).toFixed(2);
      setNetto(netto);
    }
  return  (
    <div className='App'>
      <h1>KALKULATOR WYPŁATY:</h1>
      <InputForm handleInputChange={handleInputChange}/>
      <ClickedButton handleButtonClick={handleButtonClick}/>
    <Result netto={netto}/>

    </div>
  );
}


export default App;
