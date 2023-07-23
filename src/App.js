import { Route, Routes } from 'react-router-dom';
import './App.css';
import Countries from './Components/Countries';
import Header from './Components/Header';
import useLocalStorage from 'use-local-storage';
import Details from './Components/Details';


function App() {
  const [countryDetails,setCountryDetails]=useLocalStorage({})
  const [mode, setMode] = useLocalStorage("light")
  return (
    <div className={`container-fluid body ${mode} min-vh-100 pb-md-0 pb-5`}>
      <Header mode={mode} setMode={setMode} />

      <Routes>
        <Route path='REST-Countries-API/' element={<Countries mode={ mode} setMode={setMode} countryDetails={countryDetails} setCountry={setCountryDetails} /> } />
        <Route path='REST-Countries-API/details' element={<Details mode={ mode} setMode={setMode}  countryDetails={countryDetails} setCountry={setCountryDetails}/> } />
      </Routes>
    </div>
  );
}

export default App;
