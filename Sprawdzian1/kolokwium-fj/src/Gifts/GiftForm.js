import { Field, Form, Formik } from "formik"
import { useEffect } from "react";
import { connect } from 'react-redux';
import {v4 as uuidv4 } from 'uuid';
import { addGift } from "../actions/GiftAction";
import { withRouter } from "react-router-dom";


const GiftForm = ({addGift, gifts}, props) => {
    const handleSubmit = (values) =>{
        addGift(values)
    }


    return (
        <div>
            <h3>Rzeczy</h3>
            <Formik 
                initialValues={{
                    name: "",
                    gift: ""
                }}
                onSubmit = {(values) => handleSubmit(values)}>
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
        gifts: state.gifts 
    }
}

const mapDispatchToProps = {
    addGift
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps,)(GiftForm))
