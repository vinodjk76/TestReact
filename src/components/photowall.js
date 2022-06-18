import React from "react";
import Photo from "./Photo";
 

 
function Phototwall(props) {
 
        return (
            <>
            {props.posts.map((item,index)=>                 
                <Photo key={index} removePosts={props.removePosts}  posts={item}  > </Photo> )}    
            </>
        )
}
export default Phototwall;