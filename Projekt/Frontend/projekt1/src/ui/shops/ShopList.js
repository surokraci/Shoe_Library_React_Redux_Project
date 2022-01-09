import { useEffect } from "react";
import { connect } from "react-redux";
import { getShopsList, DeleteShop } from "../../ducks/stores/operations";
import { Link } from "react-router-dom";



const ShopsList = ({ shops, DeleteShop, getShopsList, loading } ,props) => {
    useEffect(() => {
        console.log(shops);
        if(shops.length === 0){
            getShopsList()
        }
        
    }, []);


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
                            {c.seller}
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
            {/* <div>
                <Link to="/shoesForm">
                    <button type="button">
                        Add new colorway
                    </button>
                </Link>
            </div> */}


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