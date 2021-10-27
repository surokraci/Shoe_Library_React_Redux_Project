import { Field, Form, Formik } from "formik"
import { useEffect } from "react";
import { connect } from 'react-redux';
import {v4 as uuidv4 } from 'uuid';
import { addToDo } from "../actions/TodoAction";


const ToDoForm = (props) => {
    

    const handleSubmit = (values) =>{
        props.addToDo(values)
    }

    const uuid =()=>{
        return uuidv4()
    }

    return (
        <div>
            <h3>Rzeczy</h3>
            <Formik 
                initialValues={{
                    id: uuidv4(),
                    name: "",
                    date: "",
                    done: false
                }}
                onSubmit = {(values) => handleSubmit(values)}
                enableReinitialize={true}>
                    <Form>
                        <Field name="name"/>
                        <Field name="date"/>
                        <button type="submit">
                            Zatwierdz
                        </button>
                    </Form>
                </Formik>
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        todos: state.todos 
    }
}

const mapDispatchToProps = {
    addToDo
}

export default connect(mapStateToProps, mapDispatchToProps,)(ToDoForm)