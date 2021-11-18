import { connect } from "react-redux";

const Home = ({movies, actors}, props) => {
    let movieList3 = []
    {if(movies.length>0){
        movieList3 = movies.slice(Math.max(movies.length - 3, 0))
    }}
    let movieListMax = movies.sort(function(a, b){return a.actors.length-b.actors.length}).slice(Math.max(movies.length - 3, 0)).reverse()
    let actorsListMax = actors.sort(function(a, b){return a.movies.length-b.movies.length}).slice(Math.max(actors.length - 3, 0)).reverse()
    return (
        <div>
            <h3>Najnowsze Filmy</h3>
            {movieList3.map(movie => {
                return (
                <div>
                    {movie.title}
                </div>)})}

            <h3>Filmy z największa iloscia aktorow</h3>
            {movieListMax.map(movie => {
                return (
                <div>
                    {movie.title}
                </div>)})}

            <h3>Aktorzy z największa iloscia filmow</h3>
            {actorsListMax.map(actor => {
                return (
                <div>
                    {actor.lastname}
                </div>)})}
        </div>
        
        

    )
};

const mapStateToProps = (state) => {
    return {
        movies: state.movies,
        actors: state.actors
    }
}

export default connect(mapStateToProps, null)(Home);