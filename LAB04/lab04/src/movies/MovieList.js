import { useEffect } from "react";
import { connect } from "react-redux";
import { deleteMovieAction } from "../actions/MovieAction";
import { withRouter } from "react-router";
import { Link } from "react-router-dom"

const MovieList = ({movies, deleteMovieAction}, props) => {
    useEffect(()=>{
        console.log(movies)
    }, [movies])

    const handleClick = (values) => {
        console.log("usunieto film");
        deleteMovieAction(values);
        
    }

    return (
        <div>
            <h3>Movies list</h3>
            {movies.map(movie => {
                return (
                <div>
                    <div>
                    <Link to={`movies/${movie.id}`}>
                        {movie.title}
                    </Link>
                    </div>
                    <button onClick={() => 
                        handleClick(movie)}>Usuń</button>
                </div>)})}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
}
const mapDispatchToProps = {
    deleteMovieAction
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);