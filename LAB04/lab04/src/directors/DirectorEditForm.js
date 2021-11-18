import { ErrorMessage, Field, Form, Formik } from "formik"
import { useEffect } from "react";
import { editDirectorAction } from "../actions/DirectorAction";
import { connect } from 'react-redux';
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


const DirectorForm = ({ history, editDirectorAction, director },props) => {
    useEffect(()=>{
        console.log(props.directors)
    }, [props])

    const handleSubmit = (values) => {
        editDirectorAction(values);
        history.push(`/directors/${director.id}`)
        
    }

    return (
        <div>
            <h3>Add Director</h3>
            <Formik
                initialValues={{
                    id: director.id,
                    firstname: director.firstname,
                    lastname: director.lastname,
                    age: director.age,
                }}
                validationSchema={DirectorSchema}
                onSubmit={(values) => handleSubmit(values)}
                
                
                enableReinitialize={true}>
                 {({ errors, touched }) =>(
                     <Form>
                     <Field name="firstname" placeholder="Fisrt Name"/>
                     {touched.firstname && errors.firstname && <div>{errors.firstname}</div>}
                     <Field name="lastname" placeholder="Last name"/>
                     {touched.lastname && errors.lastname && <div>{errors.lastname}</div>}
                     <Field name="age" type="number" placeholder="age" />
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

const mapStateToProps = (state, props) => ({
    director: state.directors.find(director => director.id === props.match.params.id)
});

const mapDispatchToProps = {
    editDirectorAction
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DirectorForm));