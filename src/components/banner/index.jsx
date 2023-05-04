import sliderhome from '../../assets/pictures/slide-home.png';
import sliderabout from '../../assets/pictures/slide-about.png';
import './style.css';

function Banner(props) {
    if (props.page === 'home') {
        return (
            <section className='banner'>
                <div className='banner-frame'>
                    <img src={sliderhome} className='banner-img' alt='Côtes mer' title='Chez vous, partout et ailleurs' />
                </div>
                <div className='banner-frame'>
                    <p className='banner-title'>Chez vous, partout et ailleurs</p>
                </div>
            </section>
        )
    } else if (props.page === 'about') {
        return (
            <section className='banner'>
                <div className='banner-frame'>
                    <img src={sliderabout} className='banner-img' alt='...' title='...' />
                </div>
            </section>
        ) 
    };
};

export default Banner