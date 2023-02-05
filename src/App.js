import React from "react"
import {Button,Box} from "@mui/material"
import {orange} from "@mui/material/colors"
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import Home from "./Components/Home"
import Practice from "./Components/Practice"
import Post from "./Components/AddPost"
import Posts from "./Components/Posts"
import SwiggyHome from "./Swiggy/SwiggyHome"
import SwiggyDescription from "./Swiggy/SwiggyDescription"
export default function App()
{
  return(
    <>
  
    <Router>
      <Box style={{backgroundColor:orange["A400"]}} padding={2}>
       <Link to="/swiggyhome">
       <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza" alt="logo.jpeg" style={{height:"30px",width:"100px"}}/>

       </Link>
<div align="right" style={{marginTop:"-40px"}}>
      <Link to="/" style={{textDecoration:"none"}} ><Button style={{color:"white"}}>Home</Button></Link>
      <Link to="/post" style={{textDecoration:"none"}} ><Button style={{color:"white"}} >Post</Button></Link>
      <Link to="/posts" style={{textDecoration:"none"}}> <Button  style={{color:"white"}}>Posts</Button></Link>
      <Link to="/practice" style={{textDecoration:"none"}}> <Button  style={{color:"white"}}>Practice</Button></Link>
      <Link to="/swiggyhome" style={{textDecoration:"none"}}> <Button  style={{color:"white"}}>Swiggy</Button></Link>
      </div>
      </Box>
      
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/post" element={<Post/>}/>
      <Route path="posts" element={<Posts/>}/>
      <Route path="/practice" element={<Practice/>}/>
      <Route path="swiggyhome" element={<SwiggyHome/>}></Route>
      <Route path="swiggydescription/:id" element={<SwiggyDescription/>}></Route>
      </Routes>
    </Router>
    </>
  )
}