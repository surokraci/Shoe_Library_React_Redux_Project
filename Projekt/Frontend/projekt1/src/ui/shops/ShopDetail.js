import { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { getShopsList } from "../../ducks/stores/operations";
import { DeleteAuction } from "../../ducks/auctions/operations";




const ShopDetail = ({shop,shoes, auctions, DeleteAuction},props)=>{
    
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
    const handleClick = (values) => {
        console.log("auction deleted");
        DeleteAuction(values);
        
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
                        return (
                            <div key={c._id}>
                                
                                <Link to={`/shoes/${shoes.find(el=> el._id === c.itemid)._id}`}>{shoes.find(el=> el._id === c.itemid).name}</Link>
                                
                            <div>
                                {c.sizes.map(x=>{
                                    return(
                                        <span key={x}>{x} </span>
                                    )
                                })}
                            </div>
                            <div>
                                Price: {c.price}$
                            </div>
                            <div>
                            <button onClick={() => 
                                handleClick(c._id)}>Delete</button>
                            </div>
                            
                        </div>
                        )
                    })}
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
   DeleteAuction
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShopDetail));