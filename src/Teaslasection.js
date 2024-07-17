
import styled from "styled-components"

export default function TeaslaSection(props){
    return(
    <>
    <Background BI={props.BIMAGE}>
   <Headingofsection>
    <h1>{props.name}</h1>
    <p>{props.pera}</p>
   </Headingofsection>
   
   <Button>
    <Lbutton>{props.lbutton}</Lbutton>
   { props.Rbutton && <Rbutton>{ props.Rbutton}</Rbutton>}
   </Button>
   
   </Background>
   </>
    
    )
}
const Background=styled.div`
background-image: url(image/${sasi=>sasi.BI});
backgroung-repeat:no-repeat;
background-size:cover;
height:100vh;
background-position:center;




`
const Headingofsection=styled.div`
display:flex;
flex-direction:column;
align-items:center;
padding-top:13vh;


`

const Button=styled.div`


text-align:center;
padding-top:48vh;


`
const Lbutton=styled.a`
margin:30px;
background-color:black;
color:white;
padding:15px;
display:inline-block;
width:280px;
opacity:0.7;
border-radius:100px;



`
const Rbutton=styled.a`
margin:30px;
background-color:white;
color:black;
padding:15px;
display:inline-block;
width:280px;
opacity:0.8;
border-radius:100px;

`



