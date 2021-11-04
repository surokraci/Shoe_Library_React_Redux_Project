import { ErrorMessage, Field, Form, Formik } from "formik"
import { useEffect } from "react";
import { addMovieAction } from "../actions/MovieAction";
import { connect } from 'react-redux';
import {v4 as uuidv4 } from 'uuid';
import { withRouter } from "react-router";
import * as Yup from 'yup';

const DirectorSchema = Yup.object().shape({
    title: Yup.string()
    .max(50, 'Too Long!')
    .required('Required'),
    productionYear: Yup.date()
    .required('Required'),
    

})

const MovieForm = ({ history, addMovieAction },props) => {
    useEffect(()=>{
        console.log(props.movies)
    }, [props])

    const handleSubmit = (values) => {
        console.log("dodano film!");
        addMovieAction(values);
        history.push('/movies')
        
    }

    return (
        <div>
            <h3>Add Movie</h3>
            <Formik
                initialValues={{
                    id: uuidv4(),
                    title: '',
                    productionYear: '',
                    director: '',
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
        movies: state.movies
    }
};

const mapDispatchToProps = {
    addMovieAction
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieForm));