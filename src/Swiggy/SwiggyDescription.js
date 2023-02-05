import { useEffect, useState } from "react"
import { useParams,Link } from "react-router-dom"
import data from "./Swiggydata"


export default function SwiggyDescription()
{

    const [restaurant,setrestaurat]=useState("")
    const {id}=useParams()

    const getrestaurant=()=>{
        const result= data.filter((item)=>item.data.data.id===id)
        setrestaurat(result[0])

    }
    console.log(restaurant)
   useEffect(()=>{
 getrestaurant();   
   },[id])

    return(
        <>
        {
            !restaurant?<div>Loading...</div> :<div className="container-fluid bg-dark ">
            <Link to="/swiggyhome" className="text-light">Home/Back</Link>

            <div className="row  p-5">

                <div className="col-12 col-md-3">
                    <img 
                    src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${restaurant.data.data.cloudinaryImageId}`}
                     alt={`${restaurant.data.data.cloudinaryImageId}`}
                     style={{borderRadius:"20px",height:"200px"}} 
                     className="w-100"
                     />
                </div>
                <div className="col-12 col-md-6 text-light">
                    <h2>{restaurant.data.data.name}</h2>
                <h6> {restaurant.data.data.slugs.restaurant} <span className="ms-5">{restaurant.data.data.cuisines[0]}</span></h6>
                <p>{restaurant.data.data.address}</p>
                <div className="row">
                <div className="col-3 col-md-3" style={{borderRadius:"1px solid black !important"}}>
                <span className="bg-success text-light" style={{height:"20px",borderRadius:"5px",fontSize:"15px",padding:"5px"}}><i className="fa fa-star"> </i> {restaurant.data.data.avgRating}</span>
                </div>
                <div className="col-4 col-md-4">
            <span className=" text-secondary" style={{fontSize:"15px"}}>{restaurant.data.data.slaString}</span>
            </div> 
            <div className="col-5 col-md-5 mb-3">
            <span className=" text-secondary" style={{fontSize:"15px"}}>{restaurant.data.data.costForTwoString}</span>
            </div> 
                </div>

                </div>
                <div className="col-12 col-md-3 pt-3" >
                    <h5 className="text-light">OFFER</h5>
            <p className="text-success"><i className="fa fa-percent"></i> {restaurant.data.data.aggregatedDiscountInfo.shortDescriptionList[0].meta}</p>
            <p className="text-success"><i className="fa fa-percent"></i> Free Delivery</p>

                </div>
            </div>
        </div>
        }

        </>
    )
}