import { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { getShopsList } from "../../ducks/stores/operations";




const ShopDetail = ({shop,shoes, auctions, getShopsList},props)=>{
    
    
    const auctObjects = []
    if(shop){
        for(const z of shop.auctions){
            for(const z1 of auctions){
                if(z===z1._id){
                    auctObjects.push(z1)
                }
            }
        }
    }
    

    
   
    return (
        <div>
            {shop ?
                <div>
                    <h1>{shop.seller}</h1>
            <h2>{shop.url}</h2>
            <div>{shop.addres}</div>
            <div>
                <img src={shop.pictureUrl} alt="nothing" />
                
                <h2>Auctions:</h2>
                <div>
                    {auctObjects.map(c =>{
                        const properShoe = shoes.find(el=> el._id === c.itemid)
                        return (
                            <div>
                                {properShoe.name}
                            
                        </div>)})}
                </div>
                <div>
                <Link to={`shops/${shop._id}/auctionForm`}>
                    <button type="button">
                        Add new auction
                    </button>
                </Link>
                </div>
                
            
                </div>
                </div>
            
            :
            <div>Loading...</div>}
            
            
        </div>
    )

}

const mapStateToProps = (state, props) => ({
    shop: state.shops.shops ? state.shops.shops.find(x=> x._id === props.match.params.id) : null,
    auctions: state.auctions.auctions,
    shoes: state.shoes.shoes
});

const mapDispatchToProps = {
   getShopsList
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShopDetail));