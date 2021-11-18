import { ErrorMessage, Field, Form, Formik } from "formik"
import { useEffect } from "react";
import { addMovieAction } from "../actions/MovieAction";
import { connect } from 'react-redux';
import {v4 as uuidv4 } from 'uuid';
import { withRouter } from "react-router";
import * as Yup from 'yup';
import { addActorToMovie } from "../actions/MovieAction";
import { actorToMovie } from "../actions/ActorActions";

const DirectorSchema = Yup.object().shape({
    actor: Yup.string()
    .required('Required')

})

const AddActorMovie = ({ history, movie, actors, addActorToMovie, actorToMovie},props) => {
    useEffect(()=>{
        console.log(movie)
    }, [props])

    const handleSubmit = (values) => {
        console.log("dodano aktora do filmu!");
        addActorToMovie(values);
        actorToMovie(values);
        history.goBack()
        
    }

    return (
        <div>
            <h3>Add Actor to Movie</h3>
            <Formik
                initialValues={{
                    id: movie.id,
                    actor: ''
                }}
                validationSchema={DirectorSchema}
                onSubmit={(values) => handleSubmit(values)}
                
                
                enableReinitialize={true}>
                 {({ errors, touched }) =>(
                     <Form>
                     <Field  name="actor" as="select">
                        <option selected="true"> Dodaj aktora </option>  
                        {actors.map(actor => 
                            <option value={actor.id}>
                                {`${actor.firstname} ${actor.lastname}`}
                            </option>
                        )}
                        
                     </Field>
                     {touched.actor && errors.actor && <div>{errors.actor}</div>}
                     
                     <button type="submit">
                         Zatwierdz
                     </button>
                    </Form>
                 )}
                    
                </Formik>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        movie: state.movies.find(movie=> movie.id === props.match.params.id),
        actors: state.actors
    }
};

const mapDispatchToProps = {
    addActorToMovie,
    actorToMovie
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddActorMovie));