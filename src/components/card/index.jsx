import "./style.css";
import datas from '../../assets/data/logements.json';

function Card() {
    return (
        <div className="cards">
            {datas.map((data) => (
                <div key={data.id} className="card">
                    <img src={data.cover} alt={data.title} />
                    <h2>{data.title}</h2>
                </div>
            ))}
        </div>
    )
};

export default Card