import styled from 'styled-components'

const Primarybtn=styled.button`
background: ${(props)=>(props.variant==="outlined"?'black':'white')||(props.theme==='dark'?'black':'white')};
border-radius: 5px;
font-size:15px;
margin:10px;
cursor:pointer;
border: 1px solid black;
padding:10px 12px;
color: white;
`


export const Darkbtn=styled(Primarybtn)`
background: ${(props)=>(props.variant==="filled"?'white':'black')||(props.theme==='dark'?'white':'black')};
background:
border:${(props)=>(props.variant==="filled"?'1px solid black':'none')};
color:${(props)=>(props.theme==='dark'?'black':'white')};

`

export default Primarybtn