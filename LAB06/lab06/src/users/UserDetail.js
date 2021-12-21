import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const UserDetail =({user}, props)=>{
    useEffect(() => {
        console.log(user);
    }, []);
    return(
        <div>
            <h3>User Detal</h3>
            <div>{user.username}</div>
            <div>{user.name.firstname}</div>
            <div>{user.name.lastname}</div>
        </div>
    )
}

const mapStateToProps = (state, props) => ({
    user: state.users.users.find(x=> x.id == props.match.params.id)
});

export default withRouter(connect(mapStateToProps, null)(UserDetail));