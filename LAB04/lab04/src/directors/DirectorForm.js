import { ErrorMessage, Field, Form, Formik } from "formik"
import { useEffect } from "react";
import { addDirectorAction } from "../actions/DirectorAction";
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


const DirectorForm = ({ history, addDirectorAction },props) => {
    useEffect(()=>{
        console.log(props.directors)
    }, [props])

    const handleSubmit = (values) => {
        console.log("dodano rezysera");
        addDirectorAction(values);
        history.push('/directors')
        
    }

    return (
        <div>
            <h3>Add Director</h3>
            <Formik
                initialValues={{
                    id: uuidv4(),
                    firstname: '',
                    lastname: '',
                    age: '',
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
        directors: state.directors
    }
};

const mapDispatchToProps = {
    addDirectorAction
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DirectorForm));