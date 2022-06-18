import React from "react";


function Photo(props)  {
         
        var st= props.posts;
        return (<figure className="figure">
            <img src={st.imageUrl} className="photo"  ></img>           
            <figcaption className="photoCaption">{st.name} </figcaption>
            <div className="button-container">
            <button className="remove-button"
             onClick={()=>props.removePosts(st)}
            >Remove</button>
            </div>
           </figure>)     
}
export default Photo;