import { useEffect } from "react";
import { connect } from "react-redux";
import { getProductList } from "../actions/ProductAction";

const ProductList = ({ products, getProductList, loading } ,props) => {
    useEffect(() => {
        getProductList();
    }, []);


    return (
        <div>
            <h3>Produkty</h3>
            {loading ?
                <div>Trwa ładowanie</div>
                :
                products.map(product => {
                    return (
                    <div>
                        {product.title}
                    </div>)})
            }
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        products: state.products.products,
        loading: state.products.loading
    };
}

const mapDispatchToProps = {
    getProductList
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductList);