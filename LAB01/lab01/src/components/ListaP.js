import {useEffect, useState} from "react";
import axios from "axios";



function Comments(props) {

  useEffect(()=>{
    props.produkty()
  }, [props.produkty])

  return (
      <div>
        
        <div>
          {props.add.map((item) => (<div >
            <h1>{item.title}</h1>
            <img src={item.image} alt="   "/>
            
            
            </div>))}
        </div>
        {/*<CommentDetails id={selectedComment}/>*/}
      </div>
  )
}

export default Comments;
