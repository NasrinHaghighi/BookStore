import styled from "styled-components";



export const FlexConatiner=styled.div`
padding:70px 0;
background-color:${props=>props.theme.grayBG} ;
width:100% ;
`


export const Flex=styled.div`
  max-width: 1920px;
    margin:0 auto ;
    padding:0 50px ;

&>h2{
    font-weight:700 ;
    position:relative ;
    margin-bottom:30px ;
 &:after{
    content: " ";
    width: 30px;
    height: 3px;
    background-color:${props=>props.theme.orange} ;
    position: absolute;
    left: 0;
    bottom:-10px ;
 }   
}
`

export const ListConatiner=styled.div`
display:flex ;
justify-content:space-between ;
`