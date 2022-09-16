import "./App.css";

export default function Movies({movie}) {
    return (
        <div className={'movies text-center'}>
            <div>
                <img
                    src={
                        movie.Poster !== "N/A"
                            ? movie.Poster
                            : "https://via.placeholder.com/300"
                    }
                    alt={"movie"}
                    className={'movie-img mt-3'}
                />
            </div>
            <div className={'movie-text'}>
                <div>Title: {movie.Title}</div>
                <div>Year: {movie.Year}</div>
                <div>Genre: {movie.Type}</div>
                <div>imbd id: {movie.imdbID}</div>
            </div>
        </div>
    )
}