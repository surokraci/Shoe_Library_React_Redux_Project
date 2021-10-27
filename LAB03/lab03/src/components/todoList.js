import { connect } from "react-redux";
import { deleteToDo } from "../actions/TodoAction";
import { doneToDo } from "../actions/TodoAction";
import { Link } from "react-router-dom"
const ToDoList = ({ todos, deleteToDo, doneToDo} ,props) => {


    return (
        <div>
            {todos.map(todo => (<div>
                {todo.name} <button onClick={() => deleteToDo(todo)}>Usuń</button>
                <button disabled={todo.done} onClick={()=>doneToDo(todo)}>Zatwierdź</button>
                <div>
                    <Link to={`todos/${todo.id}`}>
                        Informacje
                    </Link>
                </div>
                </div>))}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
}

const mapDispatchToProps = {
    deleteToDo,
    doneToDo
}


export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);