import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { XgetShoesList, DeleteShoe } from "../../ducks/shoes/operations";



const ShoeList = ({ shoes, XgetShoesList, loading, DeleteShoe } ,props) => {
    useEffect(() => {
        console.log(shoes);
        if(shoes.length === 0){
            XgetShoesList()
        }
        
    }, []);

    const handleClick = (values) => {
        console.log("shoe deleted");
        DeleteShoe(values);
        
    }


    return (
        <div>
            <h3>Yeezys list</h3>
            {loading ?
                <div>Trwa ładowanie</div>
                :
                shoes.map(c=> {
                    return (
                    <div key={c._id} className="shoeContainer">
                        {/* <Link to={`products/${product.id}`}>{product.title}</Link> */}
                        <div className="shoeSide">
                        <div className="shoeImageInfo">
                            <img src={c.pictureUrl} alt="nothing" />
                        </div>
                        <div className="shoeSideInfo">
                        <div>
                        <Link to={`shoes/${c._id}`}>{c.name}</Link>
                            
                        </div>
                        <div>
                            {c.family}
                        </div>
                        <div>
                            <button onClick={() => 
                                handleClick(c._id)}>Delete</button>
                        </div>
                        <Link to={`/shoes/${c._id}/edit`}>
                            <button type="button">
                                Edit
                            </button>
                        </Link>

                        </div>
                        
                        


                        </div>
                        
                        

                    </div>)})
            }
            <div>
                <Link to="/shoesForm">
                    <button type="button">
                        Add new shoe
                    </button>
                </Link>
            </div>


        </div>
    )
};
const mapStateToProps = (state) => {
    return {
        shoes: state.shoes.shoes,
        loading: state.shoes.loading
    };
}
const mapDispatchToProps = {
    XgetShoesList,
    DeleteShoe
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoeList);