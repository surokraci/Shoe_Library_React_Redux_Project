import { useEffect } from "react";
import { connect } from "react-redux";
import { getShopsList, DeleteShop } from "../../ducks/stores/operations";
import { Link } from "react-router-dom";



const ShopsList = ({ shops, DeleteShop, getShopsList, loading } ,props) => {


    const handleClick = (values) => {
        console.log("shop deleted");
        DeleteShop(values);
        
    }


    return (
        <div>
            <h3>Shops list</h3>
            {loading ?
                <div>Loading</div>
                :
                shops.map(c=> {
                    return (
                    <div key={c._id}>
                        <div>
                        <Link to={`shops/${c._id}`}>{c.seller}</Link>
                        </div>
                        <div>
                            <img src={c.pictureUrl} alt="nothing" />
                        </div>
                        <div>
                            <button onClick={() => 
                                handleClick(c._id)}>Delete</button>
                        </div>

                    </div>)})
            }
            <div>
                <Link to="/shopsForm">
                    <button type="button">
                        Add new shop
                    </button>
                </Link>
            </div>


        </div>
    )
};
const mapStateToProps = (state) => {
    return {
        shops: state.shops.shops,
        loading: state.shops.loading
    };
}
const mapDispatchToProps = {
    getShopsList,
    DeleteShop
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopsList);