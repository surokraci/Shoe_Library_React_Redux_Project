import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom"

const DirectorList = ({ directors } ,props) => {
    useEffect(()=>{
        console.log(directors)
    },[directors])

    return (
        <div>
            <h3>Directors List</h3>
            {directors.map(director => {
                return (
                <div>
                    <Link to={`directors/${director.id}`}>
                        {director.firstname}
                    </Link>
                </div>)}
            )}
        </div>
    )};

const mapStateToProps = (state) => {
    return {
        directors: state.directors
    };
}




export default connect(mapStateToProps, null)(DirectorList);