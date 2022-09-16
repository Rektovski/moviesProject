import "./App.css";

export default function Movies({movie}) {
    return (
        <ul className="cards">
            <li>
                <div className="card">
                    <img src={movie.Poster} className="card__image" alt=""/>
                    <div className="card__overlay">
                        <div className="card__header">
                            <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                                <path/>
                            </svg>
                            <div className="card__header-text">
                                <h3 className="card__title">{movie.Title}</h3>
                                <span className="card__status">Year of Release: {movie.Year}</span>
                            </div>
                        </div>
                        <p className="card__description">IMDB-Code: {movie.imdbID}</p>
                    </div>
                </div>
            </li>
        </ul>
    )
}