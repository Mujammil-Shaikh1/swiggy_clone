import {Container,Box, Typography, Button, Card, CardHeader,Avatar, CardMedia, CardContent, Grid} from "@mui/material"
import {blue, blueGrey, pink, red} from "@mui/material/colors"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SendIcon from '@mui/icons-material/Send';
import CommentIcon from '@mui/icons-material/Comment';
import TextField from "@mui/material/TextField"
import { useState } from "react"
import {ADD_PRODUCT} from "../Redux/Action"
import { useDispatch } from "react-redux";

export default function Addpost()
{



    const [posts,setposts]=useState([])

    const [post,setpost]=useState({
        username:"",
        title:"",
        views:"",
        taglines:"",
        description:"",
        image:""
    })
    const handlechange=(e)=>{
        setpost({...post,[e.target.name]:e.target.value})

    }

    const dispatch=useDispatch()

    const handlesubmit=(e)=>{

        setposts([...posts,post])
        dispatch(ADD_PRODUCT(post))
      
    console.log(posts)

        e.preventDefault();
    }
    return(
        <>
   <Container>
    <Box boxShadow={5} padding={2} margin={2}>
        <form method="post" >
<Typography variant="h4" align="center" style={{color:red["A400"]}}>ADD POST</Typography>
<br />
<TextField style={{width:"100%"}} variant="outlined" defaultValue={post.username} name="username" onChange={handlechange} label="Enter Username Here"/>
<br />
<br />
<TextField style={{width:"100%"}} variant="outlined" name="title" defaultValue={post.title} onChange={handlechange}  label="Enter Title Of Post Here"/>
<br/>
<br/>
<TextField style={{width:"100%"}} variant="outlined" name="views" defaultValue={post.views} onChange={handlechange}  label="Enter View count" />
<br/>
<br/>
<TextField style={{width:"100%"}} variant="outlined" name="taglines" defaultValue={post.taglines} onChange={handlechange}  label="Enter Taglines Hashtags" />
<br/>
<br/>
<TextField style={{width:"100%"}} variant="outlined" name="image" defaultValue={post.taglines} onChange={handlechange}  label="Enter Image Link" />

<br /><br />
<TextField style={{width:"100%"}} variant="outlined" name="description" defaultValue={post.description} onChange={handlechange}  label="Enter Description Link" />

<br /><br />
<Button variant="contained" align="center"  style={{backgroundColor:pink["A400"]}}  onClick={handlesubmit}>ADD POST</Button>
</form>
    </Box>
   </Container>

   <Container style={{marginBottom:"200px"}}>
    <Typography variant="h4" align="center" color={pink["A400"]} marginTop={5} marginBottom={5}>Instagram Posts</Typography>
    <Box>
        <Grid container >
            { posts.length!==0?
            posts.map((post,i)=>{
                return(
<Grid item xs={4} key={i}>
   <Card variant="outlined" sx={{maxWidth:345}}>
       <CardHeader
       avatar={
           <Avatar sx={{backgroundColor:pink[500]}}>{post.username.slice(0,1).toUpperCase()}</Avatar>
       }
       title={post.username}
       subheader={post.title}
       />
       <CardMedia
       component="img"
       height="194"
       image={post.image}
       alt="image.jpeg"
       />
       <CardContent>
           
        <FavoriteIcon style={{fontSize:"30px",color:red[400]}} />
        <CommentIcon  style={{fontSize:"30px",color:blueGrey[400],marginLeft:"10px"}}/>
        <SendIcon  style={{fontSize:"30px",color:blueGrey[400],marginLeft:"10px"}}/>
        <MoreHorizIcon style={{fontSize:"30px",color:blue[400],marginLeft:"10px"}}/>
<br />
           <Typography variant="p">{post.views} views</Typography>
           <Typography vairant="p" color="primary">{post.taglines}</Typography>
           <Typography variant="title2">{post.description}</Typography>
     <br/><br />
     <Typography variant="p" style={{color:blueGrey[500],float:"right",marginBottom:"20px"}} >30 Minutes Ago</Typography>
       </CardContent>
     

   </Card>
   </Grid>
                )

            })
   :null
        }
         
        
        </Grid>
    </Box>
   </Container>
        </>
    )

    
}