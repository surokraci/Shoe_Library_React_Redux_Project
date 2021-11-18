import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { removeActorFromMovie } from "../actions/MovieAction";
import { removeMeFromMovie } from "../actions/ActorActions";
const MovieDetails = ({directors, movie, actors, removeActorFromMovie, removeMeFromMovie}, props) => {

    const directorDetailsX = directors.find(director => director.id === movie.director)

    const handleClick = (values) => {
        console.log("usunieto aktora z filmu");
        removeActorFromMovie(values);
        removeMeFromMovie(values)
        
    }


    return (
        <div>
            <h3>Movie details</h3>

            <div>
                <p>Title: {movie.title}</p>
                <p>Production Date: {movie.productionYear}</p>
                <p>Director Name: {directorDetailsX.firstname}</p>
                <p>Director Last name: {directorDetailsX.lastname}</p>
                <div>Actors:</div>
                <div>
                    {movie.actors.map(id =>{
                        const properActor = actors.find(el=>el.id == id)
                        return (
                            <div>
                                {`${properActor.firstname} ${properActor.lastname}`}
                                <button onClick={() => 
                                    handleClick({id:movie.id, actorId:properActor.id})}>Usuń</button>
                            </div>)})}
                </div>
                <div>
                <Link to={`/movies/${movie.id}/addActor`}>
                    <button type="button">
                        Dodaj aktora do: {movie.title}
                    </button>
                </Link>
            </div>
            </div>
            
        </div>
    )
};


const mapStateToProps = (state, props) => ({
    directors: state.directors,
    movie: state.movies.find(movie=> movie.id === props.match.params.id),
    actors: state.actors
});
const mapDispatchToProps = {
    removeActorFromMovie,
    removeMeFromMovie
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieDetails));