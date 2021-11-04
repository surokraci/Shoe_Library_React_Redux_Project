import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
const DirectorDetails = ({director}, props) => {


    return (
        <div>
            <h3>Director details</h3>

            <div>
                <p>Name: {director.firstname}</p>
                <p>Last name: {director.lastname}</p>
                <p>Age: {director.age}</p>
            </div>
            <div>
            <Link to={`/directors/${director.id}/edit`}>
                <button type="button">
                    Edytuj dane {director.firstname}
                </button>
            </Link>
            </div>
            
        </div>
    )
};


const mapStateToProps = (state, props) => ({
    director: state.directors.find(director => director.id === props.match.params.id)
});

export default withRouter(connect(mapStateToProps, null)(DirectorDetails));