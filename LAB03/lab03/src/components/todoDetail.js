import { connect } from "react-redux";
import { withRouter } from "react-router";

const ToDoDetails = ({todo}, props) => {


    return (
        <div>
            <h3>User details</h3>

            <div>
                <p>Nazwa: {todo.name}</p>
                <p>Data: {todo.date}</p>
            </div>
            
        </div>
    )
};


const mapStateToProps = (state, props) => ({
    todo: state.todos.find(todo => todo.id === props.match.params.id)
});

export default withRouter(connect(mapStateToProps, null)(ToDoDetails));