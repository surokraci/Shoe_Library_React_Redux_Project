import { ErrorMessage, Field, Form, Formik } from "formik"
import { useEffect } from "react";
import { connect } from 'react-redux';
import {v4 as uuidv4 } from 'uuid';
import { withRouter } from "react-router-dom";
import { addNewProduct } from "../actions/ProductAction";



const ProductForm = ({ history, addNewProduct, products },props) => {
    useEffect(()=>{
        console.log(products)
    }, [props])

    const handleSubmit = (values) => {
        console.log("dodano produkt");
        addNewProduct(values);
        history.push('/products')
        
    }

    return (
        <div>
            <h3>Add Product</h3>
            <Formik
                initialValues={{
                    id: uuidv4(),
                    title: '',
                    price: '',
                    description: '',
                    category: '',
                    image: '',
                    rating: {rate: 0, count: 0}
                }}
                onSubmit={(values) => handleSubmit(values)}
                
                
                enableReinitialize={true}>
                 {({ errors, touched }) =>(
                     <Form>
                     <Field name="title" placeholder="title"/>
                     <Field name="price" placeholder="price"/>
                     <Field name="description" placeholder="description"/>
                     <Field name="category" placeholder="category"/>
                     <Field name="image" placeholder="image"/>
                     
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
        products: state.products.products
    }
};

const mapDispatchToProps = {
    addNewProduct
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductForm));