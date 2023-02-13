import styled ,{keyframes}from "styled-components";


const FadIn= keyframes`
from { opacity: 0; right:0}
    to { opacity:1; right:50px}; 
    
`;const Fadout= keyframes`
from { opacity: 1; right:50px}
    to { opacity:0; right:0px}; 
    
`;
const FadIn2= keyframes`
from { opacity: 0; right:0}
    to { opacity:1; right:365px}; 
    
`;const Fadout2= keyframes`
from { opacity: 1; right:365px}
    to { opacity:0; right:0px}; 
    
`;
const FadIn3= keyframes`
from { opacity: 0; top:300PX}
    to { opacity:1; top:230px}; 
    
`;const Fadout3= keyframes`
from { opacity: 1; top:230px}
    to { opacity:0; top:300px}; 
    
`;
const FadInBlue= keyframes`
from { opacity: 0; }
    to { opacity:1; }; 
    
`;const FadoutBlue= keyframes`
from { opacity: 1;}
    to { opacity:0; }; 
    
`;
export const Container = styled.div`
height:80vh ;

`
export const InnerContainer = styled.div`
max-width:1720px ;

padding:300px 0 ;
margin:0 auto ;
display:flex ;
justify-content:space-between ;
align-items:center ;

`

export const Text = styled.div`
background-color:lightblue ;
width:100% ;
`
export const Anim = styled.div`

width:100% ;
position:relative ;

`


export const Tablet=styled.div`
position:absolute ;
z-index:4;
right:50px ;
opacity:0 ;
&.enter{
    animation: ${FadIn} 1s forwards;
}
&.exit{
    animation: ${Fadout} 1s forwards;
}



`
export const Phone=styled.div`
position:absolute ;
z-index:5 ;
opacity:0 ;
right: 365px;
top: 118px;
&.enter{
    animation: ${FadIn2} 2s forwards;
}
&.exit{
    animation: ${Fadout2} 2s forwards;
}
`

export const AduioDiv=styled.div`
position:absolute ;
z-index:3 ;
opacity:0 ;
top:400px ;
 &.enter{
    animation: ${FadIn3} 2s forwards;
}
&.exit{
    animation: ${Fadout3} 2s forwards;
}

`
export const Blue=styled.div`
position:absolute ;
z-index:1 ;
right:401px ;
top:26px ;
&.enter{
    animation: ${FadInBlue} 1s forwards;
}
&.exit{
    animation: ${FadoutBlue} 1s forwards;
}
`
export const Headphone=styled.div`
position:absolute ;
z-index:2 ;
right:300px ;
top:-128px ;
&.enter{
    animation: ${FadInBlue} 1s forwards;
}
&.exit{
    animation: ${FadoutBlue} 1s forwards;
}
`