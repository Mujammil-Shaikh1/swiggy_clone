import { useEffect, useState } from "react"
import {Link} from "react-router-dom"
import data from "./Swiggydata"

export default function SwiggyHome()
{
    const [restaurant,setrestaurant]=useState([])
    useEffect(()=>{
        setrestaurant(data)
    },[])

    return(
        <>
        <div className="container-fluid">
        <div className="row">
         <h1>{restaurant.length} Restaurants </h1>  
         <hr />
      {
        restaurant.map((item)=>{
            return(
                <div className="col-12 col-md-3 p-4" key={item.data.data.id}>
                  <div className="card" style={{height:"400px"}}>
  <Link to={`/swiggydescription/${item.data.data.id}`} className="w-100 h-100">
  <img 
  src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${item.data.data.cloudinaryImageId}`}
   alt={`${item.data.data.cloudinaryImageId}`}
    className="card-img-top w-100" style={{height:"200px"}}/>
  </Link>
  <div className="card-body">
    <h className="card-title" >{item.data.data.name}</h>
    <h6 className="text-secondary">{item.data.data.cuisines[0]}</h6>
    <div className="row ">
        <div className="col-3 col-md-3">
            <span className="bg-success text-light" style={{height:"20px",borderRadius:"5px",fontSize:"12px",padding:"5px"}}><i className="fa fa-star"> </i> {item.data.data.avgRating}</span>
        </div>
        <div className="col-4 col-md-4">
            <span className=" text-secondary" style={{fontSize:"11px"}}>{item.data.data.slaString}</span>
            </div> 
            <div className="col-5 col-md-5 mb-3">
            <span className=" text-secondary" style={{fontSize:"11px"}}>{item.data.data.costForTwoString}</span>
            </div> 
            <hr />
            <div className="col-12 col-md-12">
            <h6 className="text-secondary"><i className="fa fa-percent"></i> {item.data.data.aggregatedDiscountInfo.shortDescriptionList[0].meta}</h6>
            </div>
            <div className="col-12 col-md-12 text-center mt-3">
        <Link to={`/swiggydescription/${item.data.data.id}`}>
        <button className="btn btn-outline-dark btn-sm">Quick View</button>
        </Link> 
            </div>
    </div>
    <br />
  </div>
</div>
                </div>
            )
        })
      }
            </div> 
         </div>

        </>
    )
}