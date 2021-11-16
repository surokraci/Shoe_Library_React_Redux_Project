import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
const MovieDetails = ({directors, movie}, props) => {

    const directorDetailsX = directors.find(director => director.id === movie.director)


    return (
        <div>
            <h3>Movie details</h3>

            <div>
                <p>Title: {movie.title}</p>
                <p>Production Date: {movie.productionYear}</p>
                <p>Director Name: {directorDetailsX.firstname}</p>
                <p>Director Last name: {directorDetailsX.lastname}</p>
            </div>
            
        </div>
    )
};


const mapStateToProps = (state, props) => ({
    directors: state.directors,
    movie: state.movies.find(movie=> movie.id === props.match.params.id)
});

export default withRouter(connect(mapStateToProps, null)(MovieDetails));