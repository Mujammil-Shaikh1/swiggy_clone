import {  Typography,Paper, Button, Grid} from "@mui/material"
import Box from "@mui/material/Box"
import { Container, } from "@mui/system"
import { blueGrey, pink} from "@mui/material/colors"
import MoreVertIcon from '@mui/icons-material/MoreVert';


export default function Home()
{
    return(
        <>
            
            <Container>
<Box   padding={4} marginTop={3} boxShadow={20} >

    <Typography variant="h2" align="center" marginBottom={2} color="primary">

      Material UI </Typography>
<Typography variant="h6"  align="justify" color="primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempora labore at delectus pariatur illo praesentium culpa laboriosam, rerum aspernatur impedit, a ipsum expedita voluptatem? Recusandae fugit accusamus natus eos.</Typography>
<hr />
<Typography variant="body1" align="justify" color="secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempora labore at delectus pariatur illo praesentium culpa laboriosam, rerum aspernatur impedit, a ipsum expedita voluptatem? Recusandae fugit accusamus natus eos.</Typography>
<hr />
<Typography variant="subtitle1" align="justify" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempora labore at delectus pariatur illo praesentium culpa laboriosam, rerum aspernatur impedit, a ipsum expedita voluptatem? Recusandae fugit accusamus natus eos.</Typography>
</Box>
</Container>



<Container>
    <Box padding={3}>
    <Paper padding={2} style={{padding:"30px"}} elevation={10} >
        <Typography variant="h3" align="center">Read Docs</Typography>
        <Typography variant="title1" align="justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere animi rem neque veritatis laboriosam vel ipsam eos! Laboriosam sunt ab aperiam cum culpa quo atque, dolores iusto totam, reiciendis accusantium?</Typography>
        <br />
  <br />


    <Button variant="contained" style={{backgroundColor:pink[400] }} > Learn More <MoreVertIcon style={{color:blueGrey[50]}}/> 
</Button>
    </Paper>
    </Box>
</Container>
<Container>
<Grid container  spacing={2}>
    <Grid item xs={3} >
        <Typography variant="h6">Hello world</Typography>
        <img src="https://www.istockphoto.com/resources/images/PhotoFTLP/P4-JAN-iStock-1432854572.jpg" style={{width:"100%"}} alt="image1.jpeg"/>
       <Button variant="contained" color="secondary">View More</Button>
        </Grid>
        <Grid item xs={3}>
        <Typography variant="h6">Hello world</Typography>
        <img src="https://www.istockphoto.com/resources/images/PhotoFTLP/P4-JAN-iStock-1432854572.jpg" style={{width:"100%"}} alt="image2.jpeg"/>
        </Grid>
        <Grid item xs={3}>
        <Typography variant="h6">Hello world</Typography>
        <img src="https://www.istockphoto.com/resources/images/PhotoFTLP/P4-JAN-iStock-1432854572.jpg" style={{width:"100%"}} alt="image3.jpeg"/>
        </Grid>
        <Grid item xs={3}>
        <Typography variant="h6">Hello world</Typography>
        <img src="https://www.istockphoto.com/resources/images/PhotoFTLP/P4-JAN-iStock-1432854572.jpg" style={{width:"100%"}} alt="image4.jpeg"/>
        </Grid>
    <Grid item xs={3}>Hello world</Grid>
    <Grid item xs={3}>Hello world</Grid>
    <Grid item xs={3}>Hello world</Grid>
</Grid>
</Container>
        </>
    )
}