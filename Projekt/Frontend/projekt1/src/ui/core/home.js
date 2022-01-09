import { useEffect } from "react";
import { XgetShoesList } from "../../ducks/shoes/operations";
import { getColorwaysList } from "../../ducks/colorways/operations";
import { connect } from "react-redux";
import { getShopsList } from "../../ducks/stores/operations";
import { getAuctionsList } from "../../ducks/auctions/operations";

const Home = ({shoes, colorways, XgetShoesList, getColorwaysList, getAuctionsList, getShopsList}, props) =>{
    
    return(
        <div className="homecore">
            <h1>Yeezy's all on your sofa</h1></div>
    )
}

const mapStateToProps = (state) => {
    return {
        shoes: state.shoes.shoes,
        colorways: state.colorways.colorways
    };
}
const mapDispatchToProps = {
    XgetShoesList,
    getColorwaysList
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
