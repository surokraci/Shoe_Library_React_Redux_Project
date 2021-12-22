import { Field, Form, Formik } from "formik"
import { useEffect } from "react";
import { connect } from 'react-redux';
import {v4 as uuidv4 } from 'uuid';
import { addGift } from "../actions/GiftAction";


const GiftForm = (props) => {
    

   
}

const mapStateToProps = (state) => {
    return {
        gifts: state.gifts 
    }
}

const mapDispatchToProps = {
    addGift
}

export default connect(mapStateToProps, mapDispatchToProps,)(GiftForm)
