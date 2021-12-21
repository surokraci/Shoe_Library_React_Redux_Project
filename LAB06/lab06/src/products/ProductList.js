import { useEffect } from "react";
import { connect } from "react-redux";
import { getProductList } from "../actions/ProductAction";
import { Link } from "react-router-dom";
import { DeleteProduct, sortProduct, getCategoriesMid } from "../actions/ProductAction";

const ProductList = ({ products, getProductList,DeleteProduct, sortProduct,getCategoriesMid, loading, categories } ,props) => {
    useEffect(() => {
        if(products.length == 0){
            getProductList();
            getCategoriesMid()
        }
        
        
    }, []);

    const handleClick = (values) => {
        console.log("usunieto produkt");
        DeleteProduct(values);
        
    }
    const handleChange = (value) =>{
        sortProduct(value)
    }
    const handleChange2 = (value) =>{
        console.log(value)
    }


    return (
        <div>
            <h3>Produkty</h3>
            <div>
                <h4>Sortowanie</h4>
                <div>
                    <select onChange={(e)=>{handleChange(e.target.value)}}>
                        <option value='none'>Brak sortowanie</option>
                        <option value='asc'>Sortowanie rosnące</option>
                        <option value='desc'>Sortowanie malejące</option>
                    </select>
                </div>
                <h4>Filtrowanie</h4>
                <div>
                    <select onChange={(e)=>{handleChange2(e.target.value)}}>
                        {categories.map(category=>{
                            return <option value={category}>{category}</option>
                        })}
                    </select>
                </div>
                
            </div>
            {loading ?
                <div>Trwa ładowanie</div>
                :
                products.map(product => {
                    return (
                    <div>
                        <Link to={`products/${product.id}`}>{product.title}</Link>
                        <div>
                            <button onClick={() => 
                                handleClick(product.id)}>Usuń</button>
                        </div>
                    </div>)})
            }
            <div>
                <Link to="/productForm">
                    <button type="button">
                        Dodaj nowy produkt
                    </button>
                </Link>
            </div>
            
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        products: state.products.products,
        loading: state.products.loading,
        categories: state.products.categories
    };
}

const mapDispatchToProps = {
    getProductList,
    DeleteProduct,
    sortProduct,
    getCategoriesMid
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductList);