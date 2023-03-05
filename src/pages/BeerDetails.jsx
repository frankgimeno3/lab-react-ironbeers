import { useParams } from 'react-router-dom';
import "../App.css"

function BeerDetails({ beers }) {
  const { id } = useParams();
  const beer = beers.find(beer => beer._id === id);

  return (
    <div className="rowContent ">
          <img src={beer.image_url} alt="beerImage" class="biggerImage" />
          <div className='beerCardInfo'>
            <h2> {beer.name}</h2>
            <p className='italicstyle'> {beer.tagline}</p>
            <p>First Brewed: {beer.first_brewed}</p>
            <p>Attenuation Level: {beer.attenuation_level}</p>
            <p>Description: {beer.description}</p>
            <h3>Contributed by: </h3>
            <p className='italicstyle'>{beer.contributed_by}</p>
             
          </div>
     </div>
  );
}

export default BeerDetails;