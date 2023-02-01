import React from "react"
import {Button,Box, Typography} from "@mui/material"
import {pink} from "@mui/material/colors"
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import Home from "./Components/Home"
import Practice from "./Components/Practice"
import Post from "./Components/AddPost"
import Posts from "./Components/Posts"
export default function App()
{
  return(
    <>
  
    <Router>
      <Box style={{backgroundColor:pink["A400"]}} padding={2}>
       
        <Typography variant="h6" align="left" style={{marginTop:"15px" ,marginBottom:"10px",color:"white"}}> INSTAGRAM</Typography>
<div align="right" style={{marginTop:"-40px"}}>
      <Link to="/" style={{textDecoration:"none"}} ><Button style={{color:"white"}}>Home</Button></Link>
      <Link to="/post" style={{textDecoration:"none"}} ><Button style={{color:"white"}} >Post</Button></Link>
      <Link to="/posts" style={{textDecoration:"none"}}> <Button  style={{color:"white"}}>Posts</Button></Link>
      <Link to="/practice" style={{textDecoration:"none"}}> <Button  style={{color:"white"}}>Practice</Button></Link>
      </div>
      </Box>
      
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/post" element={<Post/>}/>
      <Route path="posts" element={<Posts/>}/>
      <Route path="/practice" element={<Practice/>}/>
      </Routes>
    </Router>
    </>
  )
}