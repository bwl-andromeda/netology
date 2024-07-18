import Stars from "./Stars";
import './CardFilm.css';


interface CardFilmProps {
    film: {
        id: string;
        title: string;
        count: number;
    }
}

function CardFilm(props: CardFilmProps) {
    const { film } = props;
    return (
        <div className="film" id={film.id}>
            <div className="film-content">
                <h5>{film.title}</h5>
                <Stars count={film.count} />
            </div>
        </div>
    )
}

export default CardFilm;