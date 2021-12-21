import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Link } from "react-router-dom"


const Home = () =>{

    return(
        <div>
            <div><Link to={'users'}>Users</Link></div>
            
            <div><Link to={'products'}>Products</Link></div>
        </div>
    )
}

export default Home