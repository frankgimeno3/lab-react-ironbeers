import { Link } from "react-router-dom";
import beersImage from "../assets/beers.png";
import newbeerImage from "../assets/new-beer.png";
import randombeerImage from "../assets/random-beer.png";
import "../App.css"

function HomePage() {
  return (
    <div className="centralContent">
      <Link to={`/beers`} className="nolink">
        <img src={beersImage} alt="Beers" />
        <h2>All Beers</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed
          sollicitudin massa, ut mattis nisl. Mauris non tempor ante. Phasellus
          vulputate, odio nec vehicula pulvinar, justo velit scelerisque lectus,
          sit amet sollicitudin magna mi et orci. Nunc interdum orci massa, sit
          amet lacinia sapien posuere et.
        </p>
      </Link>
      <Link to={`/new-beer`} className="nolink">
        <img src={newbeerImage} alt="New Beers" />
        <h2>New Beers</h2>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed
          sollicitudin massa, ut mattis nisl. Mauris non tempor ante. Phasellus
          vulputate, odio nec vehicula pulvinar, justo velit scelerisque lectus,
          sit amet sollicitudin magna mi et orci. Nunc interdum orci massa, sit
          amet lacinia sapien posuere et.
        </p>
      </Link>
      <Link to={`/random-beer`}  className="nolink">
        <img src={randombeerImage} alt="Random Beers" />
        <h2>Random Beers</h2>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed
          sollicitudin massa, ut mattis nisl. Mauris non tempor ante. Phasellus
          vulputate, odio nec vehicula pulvinar, justo velit scelerisque lectus,
          sit amet sollicitudin magna mi et orci. Nunc interdum orci massa, sit
          amet lacinia sapien posuere et.
        </p>
      </Link>
    </div>
  );
}

export default HomePage;