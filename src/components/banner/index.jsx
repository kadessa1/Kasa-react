import slider from '../../assets/pictures/cotes-mer.png';
import './style.css';

function Banner() {
    return (
        <section className='banner'>
            <div className='banner-frame'>
                <img src={slider} className='banner-img' alt='Côtes mer' title='Chez vous, partout et ailleurs' />
            </div>
            <div className='banner-frame'>
                <p className='banner-title'>Chez vous, partout et ailleurs</p>
            </div>
        </section>
    );
};

export default Banner