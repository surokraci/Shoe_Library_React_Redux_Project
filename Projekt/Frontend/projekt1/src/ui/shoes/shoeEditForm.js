import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik"
import { useEffect } from "react";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { editShoe } from "../../ducks/shoes/operations";
import * as Yup from 'yup';
import { getColorwaysList } from "../../ducks/colorways/operations";


const ShoeSchema = Yup.object().shape({
    name: Yup.string()
    .max(50, 'Too Long!')
    .required('Required'),
    family: Yup.string()
    .required('Required'),
    colorway: Yup.array()
    .required('Required')
    .min(3, 'Pick all three colors'),
    stock: Yup.number()
    .required('Required')
    .min(1, "too low"),
    description: Yup.string()
    .required('Required'),
    region: Yup.array()
    .required('Required'),
    pictureUrl: Yup.string()
    .required('Required'),
    releaseDate: Yup.date()
    .required('Required')
    
    

})


const ShoeEditForm = ({ history, editShoe, colorways, getColorwaysList, shoe },props) => {
    useEffect(()=>{
        console.log(colorways)
        if(colorways.length == 0){
            getColorwaysList()
        }
    }, [props])

    const handleSubmit = (values) => {
        console.log("shoe edit");
        editShoe(values);
        history.push('/shoes')
        
    }

    return (
        <div>
            {shoe ?
            <div>
                <h3>Edit Shoe</h3>
            <Formik
                initialValues={{
                    _id: shoe._id,
                    name: shoe.name,
                    family: shoe.family,
                    boost: shoe.boost,
                    colorway: [],
                    stock: shoe.stock,
                    description:shoe.description,
                    region: [...shoe.region],
                    pictureUrl: shoe.pictureUrl,
                    auctions: [...shoe.auctions],
                    releaseDate: shoe.releaseDate,
                    OLDcolorway: [...shoe.colorway]
                }}
                validationSchema={ShoeSchema}
                onSubmit={(values) => handleSubmit(values)}
                
                
                enableReinitialize={true}>
                {({ errors, touched}) =>(
                     <Form>
                     <Field name="name" placeholder="Shoe Name"/>
                     {touched.name && errors.name && <div>{errors.name}</div>}
                     <Field as="select" name="family" placeholder="Shoe Family">
                     <option defaultValue disabled value=''> Select Family </option>  
                        <option value="350">350</option>
                        <option value="450">450</option>
                        <option value="500">500</option>
                        <option value="700">700</option>
                        <option value="750">750</option>
                        <option value="950">950</option>
                        <option value="Slides">Slides</option>
                        <option value="Foam Runner">Foam Runner</option>
                        <option value="QNTM">QNTM</option>
                    </Field>
                     {touched.family && errors.family && <div>{errors.family}</div>}
                     <label>
                        <Field type="checkbox" name="boost" />
                        Boost
                    </label>
                    





                    <div role="group" aria-labelledby="select-group">
                        <label>
                        <Field  name="colorway[0]" as="select">
                        <option disabled selected value=''> Pick Main Colorway </option>  
                        {colorways.map(color => 
                            <option key ={color._id} value={color._id}>
                                {`${color.name}`}
                            </option>
                        )}
                        
                        </Field>
                        {touched.colorway && errors.colorway && <div>{errors.colorway}</div>}
                        
                            Main Color
                        </label>
                        <label>
                        <Field  name="colorway[1]" as="select">
                        <option disabled selected value=''> Pick Second Colorway </option>  
                        {colorways.map(color => 
                            <option key ={color._id} value={color._id}>
                                {`${color.name}`}
                            </option>
                        )}
                        
                        </Field>
                        {touched.colorway && errors.colorway && <div>{errors.colorway}</div>}
                            Second Color
                        </label>
                        <label>
                        <Field  name="colorway[2]" as="select">
                        <option disabled selected value=''> Pick Accent Color </option>  
                        {colorways.map(color => 
                            <option key ={color._id} value={color._id}>
                                {`${color.name}`}
                            </option>
                        )}
                        
                        </Field>
                        {touched.colorway && errors.colorway && <div>{errors.colorway}</div>}
                            Accent Color
                        </label>
                    
                    </div>
                     <Field name="stock" type='number' placeholder="Stock"/>
                     {touched.stock && errors.stock && <div>{errors.stock}</div>}
                     <Field name="description" placeholder="Description"/>
                     {touched.description && errors.description && <div>{errors.description}</div>}
                     <div role="group" aria-labelledby="checkbox-group">
                        <label>
                        <Field type="checkbox" name="region" value="EU" />
                            EU
                        </label>
                        <label>
                        <Field type="checkbox" name="region" value="USA" />
                            USA
                        </label>
                        <label>
                        <Field type="checkbox" name="region" value="Asia" />
                            Asia
                        </label>
                    </div>
                     <Field name="releaseDate" placeholder="Release Date"/>
                     {touched.releaseDate && errors.releaseDate && <div>{errors.releaseDate}</div>}
                     <Field name="pictureUrl" placeholder="Picture URL"/>
                     {touched.pictureUrl && errors.pictureUrl && <div>{errors.pictureUrl}</div>}
                     <button type="submit">
                         Confirm
                     </button>
                    </Form>
                 )}
                    
                </Formik>
            </div>:<div>Loading...</div>}
            
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        colorways: state.colorways.colorways,
        shoe: state.shoes.shoes.find(x=> x._id === props.match.params.id)
    }
};

const mapDispatchToProps = {
    editShoe,
    getColorwaysList
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShoeEditForm));