import { ErrorMessage, Field, Form, Formik } from "formik"
import { useEffect } from "react";
import { addActorAction } from "../actions/ActorActions";
import { connect } from 'react-redux';
import {v4 as uuidv4 } from 'uuid';
import { withRouter } from "react-router";
import * as Yup from 'yup';

const DirectorSchema = Yup.object().shape({
    firstname: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    lastname: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    age: Yup.number().required('Required')
})

const ActorForm = ({ history, addActorAction, actors},props) => {
    useEffect(()=>{
        console.log(actors)
    }, [props])

    const handleSubmit = (values) => {
        console.log("dodano aktora!");
        addActorAction(values);
        history.push('/actors')
        
    }

    return (
        <div>
            <h3>Add Actor</h3>
            <Formik
                initialValues={{
                    id: uuidv4(),
                    firstname: '',
                    lastname: '',
                    age: '',
                    movies: []
                }}
                validationSchema={DirectorSchema}
                onSubmit={(values) => handleSubmit(values)}
                
                
                enableReinitialize={true}>
                 {({ errors, touched }) =>(
                     <Form>
                     <Field name="firstname" />
                     {touched.firstname && errors.firstname && <div>{errors.firstname}</div>}
                     <Field name="lastname" />
                     {touched.lastname && errors.lastname && <div>{errors.lastname}</div>}
                     <Field name="age" type="number" min="10" max="120"/>
                     {touched.age && errors.age && <div>{errors.age}</div>}
                     
                     <button type="submit">
                         Zatwierdz
                     </button>
                    </Form>
                 )}
                    
                </Formik>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        actors: state.actors
    }
};

const mapDispatchToProps = {
    addActorAction
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ActorForm));