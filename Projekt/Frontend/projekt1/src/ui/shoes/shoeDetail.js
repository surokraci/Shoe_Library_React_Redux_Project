import { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { XgetShoesList } from "../../ducks/shoes/operations";




const ShoeDetail = ({colorways, shoe, XgetShoesList, history, shops, auctions},props)=>{
    if(shoe == undefined){
        history.push('/shoes')
    }
    const cwObjects = []
    for(const x of shoe.colorway){
        for(const y of colorways){
            if(x===y._id){
                cwObjects.push(y)
            }
        }
    }
    const auctObjects = []
    for(const z of shoe.auctions){
        for(const z1 of auctions){
            if(z===z1._id){
                auctObjects.push(z1)
            }
        }
    }

    const storesObjects = []
    for(const m of auctObjects){
        for(const m1 of shops){
            if(m.sellerid===m1._id){
                storesObjects.push(m1)
            }
        }
    }
    useEffect(() => {
        if(shoe == undefined){
            history.push('/shoes')
        }
        
    }, []);
    return (
        <div>
            {shoe === undefined ?
                history.push('/shoes')
                :
                <div>
                    <h1>Yeezy {shoe.boost === true ? 'Boost': ''} {shoe.family}</h1>
            <h2>{shoe.name}</h2>

            <div>
                <img src={shoe.pictureUrl} alt="nothing" />
                <p>Release Date: {shoe.releaseDate}</p>
                <p>Stock: {shoe.stock}</p>
                <p>{shoe.description}</p>
                <div>Colorways:</div>
                <div>
                    {cwObjects.map(c =>{
                        return (
                            <div key={c._id}>
                        
                            <div className='colorName' style={{color: c.code}}>
                                {c.name}
                            </div>
                        </div>)})}
                </div>
                <div>
                <div>Regions:</div>
                <div>
                            {shoe.region.map(x=>{return(
                                <div>{x}</div>
                            )})}
                        </div>
                
                </div>
                </div>
                <div>Awailable in {storesObjects.length} {storesObjects.length !== 1 ? <span>stores</span> : <span>store</span>}:</div>
                <div>
                    {storesObjects.map(c =>{
                        return (
                            <div key={c._id}>
                        
                            <div>
                                {c.seller}
                            </div>
                        </div>)})}
                </div>
            
                </div>
            
            }
            
        </div>
    )

}

const mapStateToProps = (state, props) => ({
    shoe: state.shoes.shoes.find(x=> x._id === props.match.params.id),
    colorways: state.colorways.colorways,
    auctions: state.auctions.auctions,
    shops: state.shops.shops
});
const mapDispatchToProps = {
    XgetShoesList
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShoeDetail));
