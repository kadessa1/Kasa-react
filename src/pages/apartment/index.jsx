/*import Collapse from "../../components/collapse";*/
import { useParams } from 'react-router-dom';
import Slideshow from "../../components/slideshow";
import datas from '../../assets/data/logements.json';
import React from 'react';
import './style.css'

function Apartment() {
    const { id } = useParams();
    const data = datas.find(data => data.id === id);
   
    return (
        <main>
            <Slideshow pictures={data.pictures} picturesLength={data.pictures.length} />
            <article className='apartment-details'>
                <div>
                    <h2 className='apartment-title'>{data.title}</h2>
                    <p className='apartment-location'>{data.location}</p>
                    <div className='tag-container'>

                    </div>
                </div>
            </article>
        </main>
    )
};

export default Apartment