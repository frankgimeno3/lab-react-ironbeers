import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import "../App.css"

function AllBeers() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    fetch('https://ih-beers-api2.herokuapp.com/beers')
      .then(response => response.json())
      .then(data => {
        setBeers(data);
      })
      .catch(error => console.error(error));
  }, []);

  const deleteBeer = (beerId) => {
    fetch(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const filteredBeers = beers.filter(beer => beer._id !== beerId);
      setBeers(filteredBeers);
    })
    .catch(error => console.error(error));
  }

  return (
    <div className="centralContent ">
      <h1>Beers</h1>
      {beers.map(beer => (
        <div key={beer._id} className="beerCard">
          <img src={beer.image_url} alt="beerImage" class="smallImage" />
          <div className='beerCardInfo'>
            <h2> {beer.name}</h2>
            <p className='italicstyle'> {beer.tagline}</p>
            <h3>Contributed by: </h3>
            <p className='italicstyle'>{beer.contributed_by}</p>
            <Link to={`/beers/${beer._id}`} >
              <button type="button" class="btn btn-primary">More Details</button>
            </Link>
            <button type="button" class="btn btn-danger btn-danger-15" onClick={() => deleteBeer(beer._id)}>Delete Beer</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AllBeers;