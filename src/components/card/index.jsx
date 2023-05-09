import "./style.css";
import datas from '../../assets/data/logements.json';
import { Link } from 'react-router-dom';

function Card() {
    return (
        <div className="cards">
            {datas.map((data) => (
                <Link to={`/apartment/${data.id}`}>
                    <div key={data.id} className="card">
                        <img src={data.cover} alt={data.title} />
                        <h2>{data.title}</h2>
                    </div>    
                </Link>    
            ))}
        </div>
    )
};

export default Card