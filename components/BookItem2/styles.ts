import styled from "styled-components";

export const BookItem2Container=styled.div`
display:flex ;
margin-bottom:50px ;
transition: all 0.6s ease-out;
display:grid ;
grid-template-columns:1fr 3fr ;

&:hover{
    transform: scale(1.07);
    box-shadow:${props=>props.theme.boxshadow} ;
}
`
export const InfoContainer=styled.div`

padding-left:30px ;
&>h4{
    font-size:32px;
    font-weight:700 ;
    margin-bottom:30px ;

}
&>h5{
    font-size:26px;
    font-weight:700 ;
    margin-bottom:50px ;
}
&>p{
    font-size:18px;
   margin-bottom:30px ;
}
`
export const ShowMoreBtn=styled.button`
width:100px;
height:30px ;
border-radius:8px ;
border:3px solid ${props=>props.theme.orange} ;
color:${props=>props.theme.orange} ;
&:hover{
    color:${props=>props.theme.orange} ;
    border:3px solid ${props=>props.theme.textStrong} ;
}

`
export const Price=styled.div`
font-size:32px ;
font-weight:600 ;
text-align:right ;
padding-right:100px ;

`
