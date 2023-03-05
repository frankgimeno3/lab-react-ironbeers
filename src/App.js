import { useState, useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import AllBeers from './pages/AllBeers';
import NewBeer from './pages/New-beer';
import RandomBeer from './pages/RandomBeer';
import HomePage from './pages/HomePage';
import BeerDetails from './pages/BeerDetails';
import axios from 'axios';

function App() {
  const [beers, setBeers] = useState([]);
  const [loading, setloading] = useState(true);
  const [created, setCreated] = useState(false);

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
    .then(results => {
      console.log(results.data);
      setBeers(results.data);
      setTimeout(()=>{
        setloading(false);
      }, 500);
    })
    .catch(err => console.log(err))
  }, [created]);

  const createdBeer = () => {
    setCreated(!created);
  }

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<AllBeers beers={beers} loading={loading} />} />
        <Route path="/beers/:id" element={<BeerDetails beers={beers} />} />
        <Route path="/new-beer" element={<NewBeer createdBeer={createdBeer}/>} />
        <Route path="/random-beer" element={<RandomBeer beers={beers}/>} />
      </Routes>
    </div>
  );
}

export default App;