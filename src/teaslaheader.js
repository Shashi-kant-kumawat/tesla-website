
import styled from "styled-components"
export default function Teaslaheader(){
    return(
        <>
        <Mainlogo>
       <Logo>
        <img src='image/sasi10.jpeg'></img>
       

       </Logo>
       <CenterMenu>
        <ul>
            <li><a href="">MODEL S</a></li>
            <li><a href="">MODEL 3</a></li>
            <li><a href="">MODEL X</a></li>
            <li><a href="">MODEL Y</a></li>
            <li><a href="">Solar Roof</a></li>
            <li><a href="">Solar Panels</a></li>

        </ul>
       </CenterMenu>
       <RightMenu>
        <ul>
        <li><a href="">Shop</a></li>
        <li><a href="">Account</a></li>
        <li><a href="">Menu</a></li>
        </ul>

       </RightMenu>
       </Mainlogo>

        </>
    )
}
const Mainlogo=styled.header`
postion:fixed;
display:flex;



align-items:center;
padding:0 2rem;
ul{
    display:flex;
    list-style:none;
    
}
ul a{
  text-decoration:none;
  padding:20px;
  
}



`
const Logo=styled.header`
img{
    width:10rem;
}



`
const CenterMenu=styled.header`
margin:0 130px ;



`
const RightMenu=styled.header`

`