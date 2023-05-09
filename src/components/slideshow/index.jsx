import { useState } from 'react';
import arrowPrev from '../../assets/pictures/arrow-prev.png';
import arrowNext from '../../assets/pictures/arrow-next.png';
import './style.css';

function Slideshow({pictures, picturesLength}) {
    const [index, setIndex] = useState(0);
    const prevImg = (index) => {
        index > 0 ? setIndex(index - 1) : setIndex((index = pictures.length - 1))
    };
    const nextImg = (index) => {
        index < picturesLength - 1 ? setIndex(index + 1) : setIndex((index = 0))
    };
    if (picturesLength === 1) {
        return (
            <div className='carrousel-container'>
                <img
                    className='slide'
                    src={pictures[index]}
                    alt="Visuel de l'appartement"
                    key={`Slideshow-${index}`}
                />
            </div>
        );
    } else if (picturesLength > 0) {
        return (
            <div className='carrousel-container'>
                <img
                    className='slide'
                    src={pictures[index]}
                    alt="Visuel de l'appartement"
                    key={`Slideshow-${index}`}
                />
                <div className='arrow-container'>
                    <button className='prev' onClick={() => prevImg(index)}>
                        <img
                            src={arrowPrev}
                            alt='Flèche gauche'
                        />
                    </button>
                    <button className='next' onClick={() => nextImg(index)}>
                        <img
                            src={arrowNext}
                            alt='Flèche droite'
                        />
                    </button>
                </div>
                <p className='number'>
                    {index + 1} / {picturesLength}
                </p>
            </div>
        )
    }
};

export default Slideshow