import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const ProductDetail =({product}, props)=>{
    useEffect(() => {
        console.log(product);
    }, []);
    return(
        <div>
            <h3>Product Detail</h3>
            <div>{product.title}</div>
            <div>{product.price}</div>
            <div>{product.category}</div>
            <div>{product.description}</div>
            <div>
                <img src={product.image} alt="Product picture"></img>
            </div>
            <div>{product.rating.rate}</div>
            
        </div>
    )
}

const mapStateToProps = (state, props) => ({
    product: state.products.products.find(x=> x.id == props.match.params.id)
});

export default withRouter(connect(mapStateToProps, null)(ProductDetail));