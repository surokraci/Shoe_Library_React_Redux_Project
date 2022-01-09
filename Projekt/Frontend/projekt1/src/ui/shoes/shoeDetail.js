import { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { XgetShoesList } from "../../ducks/shoes/operations";




const ShoeDetail = ({colorways, shoe, XgetShoesList, history},props)=>{
    const cwObjects = []
    for(const x of shoe.colorway){
        for(const y of colorways){
            if(x===y._id){
                cwObjects.push(y)
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
            
                </div>
            
            }
            
        </div>
    )

}

const mapStateToProps = (state, props) => ({
    shoe: state.shoes.shoes.find(x=> x._id === props.match.params.id),
    colorways: state.colorways.colorways
});
const mapDispatchToProps = {
    XgetShoesList
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShoeDetail));
