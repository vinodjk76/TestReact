import React from "react";
import Headers from "./Header";
import Phototwall from "./photowall";
import AddPhoto from "./AddNewPhoto";

import "../styles/styles.css";
 
class Main extends React.Component{
    constructor(){
        super()
        this.state={
            lists:[],
           screenPage :'photo' //Addphoto, photo
        } 
     
        this.removePosts=this.removePosts.bind(this);
        this.addPost=this.addPost.bind(this);
        console.log("Constructor")
    }
    
    removePosts(removepost)
    {        
        this.setState((state)=>({
            lists: state.lists.filter(item => item !== removepost)
            })
        );    

    }
    
    addPost()
    {
         
        console.log("addPost");
        this.setState((state)=>({
            screenPage:"Addphoto"
            })
        ); 

    }
    componentDidMount()
    {
        const list=simulatefetchfromDB();
        this.setState({
            lists:list 
        })
        console.log("did mount")


    }
  
    render(){
        
        return <div>
            {
                this.state.screenPage==="photo" && (
                 <div>
                     <Headers></Headers>
                    <button className="btnAdd" onClick={this.addPost}>+</button>
                    <div className="photoGrid">
                    <Phototwall posts={this.state.lists} removePosts={this.removePosts} />
                    </div>
                </div>
                )
            }
            {
             this.state.screenPage==="Addphoto" &&(
                <div>
                <AddPhoto></AddPhoto>
                </div>
            )}
        </div>
    }
}
function simulatefetchfromDB()
{
    return [
    {
        id:1,
        name:"vinod",
        imageUrl:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
    },
    {
        id:2,
        name:"vinod1",
        imageUrl:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
    },
    {
        id:3,
        name:"vinod3",
        imageUrl:"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
    }];

}
export default Main;
