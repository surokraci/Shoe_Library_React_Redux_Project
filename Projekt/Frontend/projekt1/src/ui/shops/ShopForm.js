import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik"
import { useEffect } from "react";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { addNewShop } from "../../ducks/stores/operations";
import * as Yup from 'yup';



const ShopSchema = Yup.object().shape({
    seller: Yup.string()
    .max(50, 'Too Long!')
    .required('Required'),
    addres: Yup.string()
    .required('Required'),
    url: Yup.string()
    .required('Required'),
    pictureUrl: Yup.string()
    .required('Required'),

})


const ShopForm = ({ history, addNewShop, shops },props) => {
    useEffect(()=>{
        console.log(shops)
        
    }, [props])

    const handleSubmit = (values) => {
        console.log("shop added");
        addNewShop(values);
        history.push('/shops')
        
    }

    return (
        <div>
            <h3>Add Seller</h3>
            <Formik
                initialValues={{
                    seller: '',
                    addres: '',
                    url: '',
                    pictureUrl: ''
                }}
                validationSchema={ShopSchema}
                onSubmit={(values) => handleSubmit(values)}
                
                
                enableReinitialize={true}>
                 {({ errors, touched }) =>(
                     <Form>
                     <Field name="seller" placeholder="seller"/>
                     {touched.seller && errors.seller && <div>{errors.seller}</div>}
                     <Field name="addres" placeholder="addres"/>
                     {touched.addres && errors.addres && <div>{errors.addres}</div>}
                     <Field name="url" placeholder="url"/>
                     {touched.url && errors.url && <div>{errors.url}</div>}
                     <Field name="pictureUrl" placeholder="pictureUrl"/>
                     {touched.pictureUrl && errors.pictureUrl && <div>{errors.pictureUrl}</div>}

                     
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
        shops: state.shops.shops
    }
};

const mapDispatchToProps = {
    addNewShop
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShopForm));
