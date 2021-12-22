import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteGift } from "../actions/GiftAction";

const GiftList = ({ gifts, deleteGift } ,props) => {
    const handleClick = (values) => {
        console.log("usunieto prezent");
        deleteGift(values);
        
    }


    return (
        <div>
            <h3>Produkty</h3>
            
            {
                gifts.map(gift => {
                    return (
                    <div>
                        <Link to={`gifts/${gift.name}`}>{gift.name}</Link>
                        <div>
                            <button onClick={() => 
                                handleClick(product.id)}>Usuń</button>
                        </div>
                    </div>)})
            }
            <div>
                <Link to="/giftForm">
                    <button type="button">
                        Dodaj nowy prezent
                    </button>
                </Link>
            </div>
            
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        gifts: state.gifts
    };
}

const mapDispatchToProps = {
    deleteGift
}


export default connect(mapStateToProps, mapDispatchToProps)(GiftList);