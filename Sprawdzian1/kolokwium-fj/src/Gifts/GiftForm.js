import { Field, Form, Formik } from "formik"
import { useEffect } from "react";
import { connect } from 'react-redux';
import { addGift } from "../actions/GiftAction";
import { withRouter } from "react-router-dom";


const GiftForm = ({history, addGift, gifts}, props) => {
    const handleSubmit = (values) =>{
        addGift(values)
        console.log(gifts);
        history.push('/')
    }


    return (
        <div>
            <h3>Rzeczy</h3>
            <Formik 
                initialValues={{
                    name: "",
                    colour: "",
                    model: "",
                    v2:false,
                    size:""

                }}
                onSubmit = {(values) => handleSubmit(values)}>
                    <Form>
                        <Field name="name" placeholder="Imie i Nazwisko"/>
                        <Field name="colour" placeholder="kolorystyka"/>
                        <Field  name="model" as="select">
                        <option value="Yeezy Boost 350"> Yeezy Boost 350 </option>  
                        <option value="Yeezy 450"> Yeezy 450 </option>
                        <option value="Yeezy 500"> Yeezy 500 </option>
                        <option value="Yeezy Boost 700"> Yeezy Boost 700 </option>  
                        </Field>

                        <label>
                            <Field type="checkbox" name="v2" />
                            Model V2
                        </label>
                        <div role="group" aria-labelledby="my-radio-group">
                            <label>
                            <Field type="radio" name="size" value="40" />
                            40
                            </label>
                            <label>
                            <Field type="radio" name="size" value="41" />
                            41
                            </label>
                            <label>
                            <Field type="radio" name="size" value="42" />
                            42
                            </label>
                            <label>
                            <Field type="radio" name="size" value="43" />
                            43
                            </label>
                        </div>
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
