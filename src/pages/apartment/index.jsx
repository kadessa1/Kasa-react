/*import Collapse from "../../components/collapse";*/
import { useParams } from 'react-router-dom';
import Slideshow from "../../components/slideshow";
import Collapse from '../../components/collapse';
import ApartmentsDatas from '../../assets/data/logements.json';
import React from 'react';
import './style.css';
import ratingGrey from "../../assets/pictures/rating-grey.png";
import ratingRed from "../../assets/pictures/rating-red.png";

function Apartment() {
    const { id } = useParams();
    const data = ApartmentsDatas.find(data => data.id === id);
    const getRatingStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            const starClass = (i < rating) ? ratingRed : ratingGrey;
            stars.push(<img src={starClass} alt='rating' key={i} className={starClass} />);
        }
        return stars;
    };
    return (
        <main>
            <Slideshow pictures={data.pictures} picturesLength={data.pictures.length} />
            <article className='apartment-details'>
                <div className='details-left'>
                    <h2 className='apartment-title'>{data.title}</h2>
                    <p className='apartment-location'>{data.location}</p>
                    <div className='apartment-tags'>
                        {data.tags.map((tags, index) => (
                            <span key={`${index}-${tags}`} className='apartment-tag'>{tags}</span>
                        ))}
                    </div>
                </div>
                <div className='details-right'>
                    <div className='apartment-host'>
                        <p className='apartment-host-name'>{data.host.name}</p>
                        <img className='apartment-host-picture' src={data.host.picture} alt={data.host.name}/>
                    </div>
                    <div className='apartment-rating'>
                        {getRatingStars(data.rating)}
                    </div>
                </div>
            </article>
            <article className='apartment-information'>
                <div className='collapse-left'>
                    <Collapse
                        collapseTitle={<h2 className='collapse-title'>Description</h2>}
                        collapseDescription={<p className='description'>{data.description}</p>}
                    />                    
                </div>
                <div className='collapse-right'>
                    <Collapse className='collapse-right'
                        collapseTitle={<h2 className='collapse-title'>Equipements</h2>}
                        collapseDescription={data.equipments.map((equipments, index) => (
                            <li key={`${index}-${equipments}`} className='equipments-list'>{equipments}</li>
                        ))}
                    />
                </div>
            </article>
        </main>
    )
};

export default Apartment