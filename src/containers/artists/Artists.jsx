import './artists.css';
import Card from '../../components/exhibition/Card';
import { exhibitions } from '../../constants/data';

function Artists () {
    return (
        <div className="Artists" id="exhibitions">
            <span><h2 class="gradient__text">Artists & Exhibitions</h2></span>
            <div className="exhibitions">
                {exhibitions.map((item) => (
                    <Card data={item} />
                ))}
            </div>
        
        </div>
    )
}

export default Artists;