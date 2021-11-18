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
    director: Yup.string()
    .required('Required')
    

})

const MovieForm = ({ history, addMovieAction, directors, movies},props) => {
    useEffect(()=>{
        console.log(movies)
        console.log(directors);
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
                    actors: []
                }}
                validationSchema={DirectorSchema}
                onSubmit={(values) => handleSubmit(values)}
                
                
                enableReinitialize={true}>
                 {({ errors, touched }) =>(
                     <Form>
                     <Field name="title" />
                     {touched.title && errors.title && <div>{errors.title}</div>}
                     <Field name="productionYear" />
                     {touched.productionYear && errors.productionYear && <div>{errors.productionYear}</div>}
                     <Field  name="director" as="select">
                        <option selected="true"> Brak reżysera </option>  
                        {directors.map(director => 
                            <option value={director.id}>
                                {`${director.firstname} ${director.lastname}`}
                            </option>
                        )}
                        
                     </Field>
                     {touched.director && errors.director && <div>{errors.director}</div>}
                     
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
        movies: state.movies,
        directors: state.directors
    }
};

const mapDispatchToProps = {
    addMovieAction
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieForm));