import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const GiftDetail =({gift}, props)=>{
    useEffect(() => {
        console.log(gift);
    }, []);
    return(
        <div>
            <h3>Gift Detail</h3>
            <div>{gift.name}</div>
            <div>{gift.model}</div>
            
            <div>{gift.colour}</div>
            
            <div>{gift.size}</div>
            
            
            
        </div>
    )
}

const mapStateToProps = (state, props) => ({
    gift: state.gifts.find(x=> x.name == props.match.params.id)
});

export default withRouter(connect(mapStateToProps, null)(GiftDetail));
