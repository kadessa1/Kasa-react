import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
        <h1>Page d'accueil</h1>
        <Link to="about">A propos</Link>
      </div>
    );
  }
  
  export default Home;
  