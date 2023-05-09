/*import Collapse from "../../components/collapse";*/
import { useParams } from 'react-router-dom';
import Slideshow from "../../components/slideshow";
import datas from '../../assets/data/logements.json';

function Apartment() {
    const { id } = useParams();
    const data = datas.find(data => data.id === id);
    return (
        <main>
            <Slideshow pictures={data.pictures} picturesLength={data.pictures.length} />
        </main>
    )
};

export default Apartment