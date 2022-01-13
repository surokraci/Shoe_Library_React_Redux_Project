import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik"
import { useEffect } from "react";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

import * as Yup from 'yup';

import { addNewAuction } from "../../ducks/auctions/operations";


const AuctionSchema = Yup.object().shape({
    itemid: Yup.string()
    .required('Required'),
    sizes: Yup.array()
    .required('Required'),
    price: Yup.number()
    .required('Required')
    .min(1, "too low"),
    
    

})


const AuctionForm = ({ history, addNewAuction, shoes, shop},props) => {
    useEffect(()=>{
        console.log(shop)
    }, [props])

    const handleSubmit = (values) => {
        console.log("dodano aukcje");
        addNewAuction(values);
        history.push(`/shops/${shop._id}`)
        
    }

    return (
        <div>
            {shop ?
            <div>
                <h3>Add Auction</h3>
            <Formik
                initialValues={{
                    sellerid: shop._id,
                    itemid: '',
                    sizes: [],
                    price: 0,
                }}
                validationSchema={AuctionSchema}
                onSubmit={(values) => handleSubmit(values)}
                
                
                enableReinitialize={true}>
                {({ errors, touched}) =>(
                     <Form>
                         <Field  name="itemid" as="select">
                        <option disabled selected value=''> Pick Item </option>  
                        {shoes.map(shoe => 
                            <option value={shoe._id}>
                                {`${shoe.name} ${shoe.family}`}
                            </option>
                        )}
                        
                        </Field>
                        {touched.itemid && errors.itemid && <div>{errors.itemid}</div>}
                    
                     <Field name="price" type='number' placeholder="Price"/>
                     {touched.price && errors.price && <div>{errors.price}</div>}
                     <div role="group" aria-labelledby="checkbox-group">
                        <label>
                        <Field type="checkbox" name="sizes" value="36" />
                            36
                        </label>
                        <label>
                        <Field type="checkbox" name="sizes" value="37" />
                            37
                        </label>
                        <label>
                        <Field type="checkbox" name="sizes" value="38" />
                            38
                        </label>
                        <label>
                        <Field type="checkbox" name="sizes" value="39" />
                            39
                        </label>
                        <label>
                        <Field type="checkbox" name="sizes" value="40" />
                            40
                        </label>
                        <label>
                        <Field type="checkbox" name="sizes" value="41" />
                            41
                        </label>
                        <label>
                        <Field type="checkbox" name="sizes" value="42" />
                            42
                        </label>
                        <label>
                        <Field type="checkbox" name="sizes" value="43" />
                            43
                        </label>
                        <label>
                        <Field type="checkbox" name="sizes" value="44" />
                            44
                        </label>
                        <label>
                        <Field type="checkbox" name="sizes" value="45" />
                            45
                        </label>
                        <label>
                        <Field type="checkbox" name="sizes" value="46" />
                            46
                        </label>
                        <label>
                        <Field type="checkbox" name="sizes" value="47" />
                            47
                        </label>
                    </div>
                     <button type="submit">
                         Confirm
                     </button>
                    </Form>
                 )}
                    
                </Formik>
            </div>
            :
            <div>Loading...</div>}
            
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        shop: state.shops.shops.find(x=> x._id === props.match.params.id),
        shoes: state.shoes.shoes
    }
};

const mapDispatchToProps = {
    addNewAuction
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AuctionForm));