import "./style.css";
import datas from '../../assets/data/logements.json';
import { Link } from 'react-router-dom';
import React from "react";

function Card() {
    return (
        <div className="cards">
            {React.Children.toArray(
                datas.map((data) => (
                    <Link to={`/apartment/${data.id}`}>
                        <div className="card">
                            <img src={data.cover} alt={data.title} />
                            <h2>{data.title}</h2>
                        </div>
                    </Link>
                ))
            )}
        </div>
    );
};

export default Card