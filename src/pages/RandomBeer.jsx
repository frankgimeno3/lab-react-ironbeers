function RandomBeer({ beers }) {
  const randomBeerIndex = Math.floor(Math.random() * beers.length);
  const beer = beers[randomBeerIndex];

  return (
    <div className="rowContent ">
      <img src={beer.image_url} alt="beerImage" className="biggerImage" />
      <div className="beerCardInfo">
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

export default RandomBeer;