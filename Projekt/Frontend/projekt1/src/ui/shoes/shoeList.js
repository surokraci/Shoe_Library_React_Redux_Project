import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { XgetShoesList, DeleteShoe } from "../../ducks/shoes/operations";



const ShoeList = ({ shoes, loading, DeleteShoe } ,props) => {

    const handleClick = (values) => {
        console.log("shoe deleted");
        DeleteShoe(values);
        
    }
    
    const [sortMethod, setSortMethod] = useState("none")

    const ShoesToMap = () =>{
        let shoes_copy = [...shoes]
        if(sortMethod === "StockDesc"){
            shoes_copy = shoes.sort((a,b)=> a.stock !== b.stock ? a.stock > b.stock ? -1 : 1 : 0)
        }else if(sortMethod === "StockAsc"){
            shoes_copy = shoes.sort((a,b)=>a.stock !== b.stock ? a.stock < b.stock ? -1 : 1 : 0)
        }else if(sortMethod === "DateDesc"){
            shoes_copy = shoes.sort((a,b)=> a.releaseDate !== b.releaseDate ? a.releaseDate > b.releaseDate ? -1 : 1 : 0)
        }else if(sortMethod === "DateAsc"){
            shoes_copy = shoes.sort((a,b)=>a.releaseDate !== b.releaseDate ? a.releaseDate < b.releaseDate ? -1 : 1 : 0)
        }else if(sortMethod === "AlDesc"){
            shoes_copy = shoes.sort((a,b)=> a.name !== b.name ? a.name > b.name ? -1 : 1 : 0)
        }else if(sortMethod === "AlAsc"){
            shoes_copy = shoes.sort((a,b)=>a.name !== b.name ? a.name < b.name ? -1 : 1 : 0)
        }else if(sortMethod === "none")
            shoes_copy = shoes.sort((a,b)=> a._id !== b._id ? a._id > b._id ? -1 : 1 : 0)
        return shoes_copy
    }

    

    return (
        <div>
            <h3>Yeezys list</h3>
            <h4>Sortowanie</h4>
                <div>
                    <select onChange={(e)=>{setSortMethod(e.target.value)}}>
                        <option value='none'>Recently added</option>
                        <option value='StockAsc'>Stock Lowest</option>
                        <option value='StockDesc'>Stock Highest</option>
                        <option value='DateDesc'>Release date: newest</option>
                        <option value='DateAsc'>Release date: oldest</option>
                        <option value='AlAsc'>Alphabetically</option>
                        <option value='AlDesc'>Alphabetically reverse</option>
                    </select>
                </div>

            {loading ?
                <div>Trwa ładowanie</div>
                :
                
                ShoesToMap().map(c=> {
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
                        
                        

                    </div>
                    )
                    })
            }
            <div>
                <Link to="/shoesForm">
                    <button type="button">
                        Add new shoe
                    </button>
                </Link>
            </div>
            <div>
                        <button onClick={()=>console.log(ShoesToMap())} type="button">
                                Check
                        </button>
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