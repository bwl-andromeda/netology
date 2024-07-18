// import PropTypes from 'prop-types'
import films from './films';
import CardFilm from './CardFilm';


function ViewFilms() {
    return (
        <div className="container">
            <h3>Films</h3>
            {films.map(film => <CardFilm key={film.id} film={film} />)}
        </div>
    )
}

export default ViewFilms;