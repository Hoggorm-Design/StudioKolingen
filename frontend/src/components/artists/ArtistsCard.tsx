import { Link } from 'react-router-dom';

const ArtistCard = () => {
    return (
        <div className="artist-card">
            <h3>Artist Name</h3>
            <p>A brief description of the artist</p>
            <Link to="">Visit artists page</Link>
            <img src="" alt="Artist Name" />
        </div>
    );
};

export default ArtistCard;
