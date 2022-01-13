import { useEffect } from "react";
import { connect } from "react-redux";
import { getColorwaysList, DeleteColorway } from "../../ducks/colorways/operations";
import { Link } from "react-router-dom";



const ColorwayList = ({ colorways, getColorwaysList, loading, DeleteColorway } ,props) => {
    

    const handleClick = (values) => {
        console.log("colorway deleted");
        DeleteColorway(values);
        
    }


    return (
        <div>
            <h3>Colorways list</h3>
            {loading ?
                <div>Trwa ładowanie</div>
                :
                colorways.map(c=> {
                    return (
                    <div key={c._id}>
                        {/* <Link to={`products/${product.id}`}>{product.title}</Link> */}
                        <div className='colorName' style={{color: c.code}}>
                            {c.name}
                        </div>
                        <div>
                            {c.shoes.map(x=>{return(
                                <div key={x._id}>
                                    <Link to={`shoes/${x._id}`}>{x.name}</Link>
                                </div>
                                
                            )})}
                        </div>
                        <div>
                            <button onClick={() => 
                                handleClick(c._id)}>Delete</button>
                        </div>

                    </div>)})
            }
            <div>
                <Link to="/colorwaysForm">
                    <button type="button">
                        Add new colorway
                    </button>
                </Link>
            </div>


        </div>
    )
};
const mapStateToProps = (state) => {
    return {
        colorways: state.colorways.colorways,
        loading: state.colorways.loading
    };
}
const mapDispatchToProps = {
    getColorwaysList,
    DeleteColorway
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorwayList);