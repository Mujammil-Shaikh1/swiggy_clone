import {Container, Typography, Card, CardHeader,Avatar, CardMedia, CardContent, Grid} from "@mui/material"
import {blue, blueGrey, pink, red} from "@mui/material/colors"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SendIcon from '@mui/icons-material/Send';
import CommentIcon from '@mui/icons-material/Comment';

import { useSelector } from "react-redux";



export default function Post()
{

    const posts=useSelector((item)=>item.ProductReducer.product)

    console.log(posts)
    
    return(
        <>
     <Container boxshadow={3} padding={3}>
        <Grid container spacing={3}>
            {
                posts.length===0?null:
                posts.map((item,i)=>{
                    return(
                        <Grid item xs={4} key={i}>
            <Card>
                <CardHeader
               avatar={
                <Avatar sx={{backgroundColor:pink["A400"]}}>{item.username.slice(0,1)}</Avatar>
               }
                title={item.username}
                subheader={item.title}
                />
                <CardMedia
                component="img"
                height="194"
                image={item.image}
                alt="image.jpeg"
               />
                <CardContent>
           
           <FavoriteIcon style={{fontSize:"30px",color:red[400]}} />
           <CommentIcon  style={{fontSize:"30px",color:blueGrey[400],marginLeft:"10px"}}/>
           <SendIcon  style={{fontSize:"30px",color:blueGrey[400],marginLeft:"10px"}}/>
           <MoreHorizIcon style={{fontSize:"30px",color:blue[400],marginLeft:"10px"}}/>
   <br />
              <Typography variant="p">{item.views} views</Typography>
              <Typography vairant="p" color="primary">{item.taglines}</Typography>
              <Typography variant="title2">{item.description}</Typography>
        <br/><br />
        <Typography variant="p" style={{color:blueGrey[500],float:"right",marginBottom:"20px"}} >30 Minutes Ago</Typography>
          </CardContent>
            </Card>
            </Grid>
                    )
                })
            }
            
           
        </Grid>
     </Container>
        </>
    )
}