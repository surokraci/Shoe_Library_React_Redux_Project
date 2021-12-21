import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getUserList } from "../actions/UserActions";

const UserList = ({ users, getUserList, loading } ,props) => {
    useEffect(() => {
        if(users.length == 0){
            getUserList();
        }
        console.log(users);
    }, []);


    return (
        <div>
            <h3>Users list</h3>
            {loading ?
                <div>Trwa ładowanie</div>
                :
                users.map(user => {
                    return (
                    <div>
                        <Link to={`users/${user.id}`}>{user.username}</Link>
                    </div>)})
            } 
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        loading: state.users.loading
    };
}

const mapDispatchToProps = {
    getUserList
}


export default connect(mapStateToProps, mapDispatchToProps)(UserList);