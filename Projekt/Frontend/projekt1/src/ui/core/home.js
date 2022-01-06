import { useEffect } from "react";
import { XgetShoesList } from "../../ducks/shoes/operations";
import { getColorwaysList } from "../../ducks/colorways/operations";
import { connect } from "react-redux";

const Home = ({shoes, colorways, XgetShoesList, getColorwaysList}, props) =>{
    useEffect(() => {
        if(shoes.length === 0 && colorways.length == 0){
            XgetShoesList()
            getColorwaysList()

        }
        
    }, []);
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
