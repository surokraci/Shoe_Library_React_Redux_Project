import { connect } from "react-redux";

const Home = ({movies}, props) => {
    let movieList3 = []
    {if(movies.length>0){
        movieList3 = movies.slice(Math.max(movies.length - 3, 0))
    }}
    return (
        <div>
            <h3>Najnowsze Filmy</h3>
            {movieList3.map(movie => {
                return (
                <div>
                    {movie.title}
                </div>)})}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps, null)(Home);