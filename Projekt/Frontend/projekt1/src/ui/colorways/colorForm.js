import { ErrorMessage, Field, Form, Formik } from "formik"
import { useEffect } from "react";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { addNewColorway } from "../../ducks/colorways/operations";
import * as Yup from 'yup';


const ColorwaySchema = Yup.object().shape({
    name: Yup.string()
    .max(50, 'Too Long!')
    .required('Required'),
    code: Yup.string()
    .required('Required')
    .max(7, 'Too Long!')
    .min(5, 'Too Short!')
    .matches(/^#/, 'Color code must start with #')
    

})


const ColorForm = ({ history, addNewColorway, colorways },props) => {
    useEffect(()=>{
        console.log(colorways)
    }, [props])

    const handleSubmit = (values) => {
        console.log("dodano produkt");
        addNewColorway(values);
        history.push('/colorways')
        
    }

    return (
        <div>
            <h3>Add Colorway</h3>
            <Formik
                initialValues={{
                    name: '',
                    code: ''
                }}
                validationSchema={ColorwaySchema}
                onSubmit={(values) => handleSubmit(values)}
                
                
                enableReinitialize={true}>
                 {({ errors, touched }) =>(
                     <Form>
                     <Field name="name" placeholder="Colorway Name"/>
                     {touched.name && errors.name && <div>{errors.name}</div>}
                     <Field name="code" placeholder="Color Code"/>
                     {touched.code && errors.code && <div>{errors.code}</div>}

                     
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
        colorways: state.colorways.colorways
    }
};

const mapDispatchToProps = {
    addNewColorway
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ColorForm));
