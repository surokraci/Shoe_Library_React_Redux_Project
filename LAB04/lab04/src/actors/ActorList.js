import { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Link } from "react-router-dom"

const ActorList = ({actors}, props) => {

    return (
        <div>
            <h3>Actors list</h3>
            {actors.map(actor => {
                return (
                <div>
                    <div>
                    <Link to={`actors/${actor.id}`}>
                        {actor.firstname}
                    </Link>
                    </div>
                </div>)})}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        actors: state.actors
    }
}


export default connect(mapStateToProps, null)(ActorList);