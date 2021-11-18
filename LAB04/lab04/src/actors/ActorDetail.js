import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
const ActorDetails = ({actor}, props) => {


    return (
        <div>
            <h3>Actor details</h3>

            <div>
                <p>Name: {actor.firstname}</p>
                <p>Last name: {actor.lastname}</p>
                <p>Age: {actor.age}</p>
            </div>
            
        </div>
    )
};


const mapStateToProps = (state, props) => ({
    actor: state.actors.find(actor=> actor.id === props.match.params.id)
});

export default withRouter(connect(mapStateToProps, null)(ActorDetails));