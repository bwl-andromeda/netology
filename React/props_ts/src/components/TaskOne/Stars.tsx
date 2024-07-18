import Star from './Star';
import './stars.css';


interface FilmStarsPropsCount {
    count: number;
}

function Stars(props: FilmStarsPropsCount) {
    const { count } = props;

    if (!Number.isInteger(count) || count < 1 || count > 5) return null;

    return (
        <ul className="card-body-stars">
            {Array.from({ length: count }).map((_, index) => (
                <Star key={index} />
            ))}
        </ul>
    )
}

export default Stars;