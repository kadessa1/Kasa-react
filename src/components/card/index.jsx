import "./style.css";
import datas from '../../assets/data/logements.json';
import { Link } from 'react-router-dom';
import React from "react";

export default function Card(props) {
    if (props.page === 'home') {
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
        )
    }
};

/*
export default Card

import "./style.css";
//import datas from '../../assets/data/logements.json';
import { Link } from 'react-router-dom';
import React, { useState } from "react";

function Card(props) {
    /*
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch( "localhost:8080/api/properties", {
            method: "GET",
        })
            .then((response) => response.json())
            .then((data) => {
                setJoke(data[0].joke);
                console.log(data);
            })
            .catch((error) => console.log(error));
    }, []);


    if (props.page === 'home') {
        return (
            <div className="cards">
                {
                    fetch("localhost:8080/api/properties",{ method: "GET" }).then(
                        res => res.json().then(
                            data => React.Children.toArray(data.map((data) => (
                                <Link to={`/apartment/${data.id}`}>
                                    <div className="card">
                                        <img src={data.cover} alt={data.title} />
                                        <h2>{data.title}</h2>
                                    </div>
                                </Link>
                            ))
                        )
                    )
                    //
                    //   datas

                )
                }
            </div>
        )
    }
};

export default Card
*/