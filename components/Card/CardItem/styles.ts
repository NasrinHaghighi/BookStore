import styled from "styled-components";


export const CardItemContainer=styled.div`
height: 150px;
width:100% ;
color:#ffff ;
font-size:20px ;
display: grid;
grid-template-columns:0.25fr 0.5fr 2fr 1fr .75fr 1fr;
grid-column-gap: 0px;
grid-row-gap: 0px;
align-items:center ;
&.even{
    background-color:${props=>props.theme.grayBG} ; 
}
`

export const Trash=styled.div`
text-align:center ;
color:${props=>props.theme.orange} ;

`

export const BookPhoto=styled.div`
`


export const Name=styled.div`
color:${props=>props.theme. graytext} ;

`
export const Price=styled.div`
color:${props=>props.theme. graytext} ;
`
export const Amount=styled.input`
width:100px ;
height:50px ;
border-radius:50px ;
background-color: transparent;
padding:0 10px ;
outline:none ;
border:3px solid ${props=>props.theme.grayBorder};
font-size:20px ;
font-weight:600 ;
z-index:10 ;
color:${props=>props.theme.graytext} !important;
appearance: none;
    display: inline-block;
&:hover{
    color:${props=>props.theme.graytext} ;  
}

`

export const TotalPrice=styled.div`
color:${props=>props.theme. graytext} ;
`