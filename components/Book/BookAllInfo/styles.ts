import styled from "styled-components";

export const Conatiner=styled.div`
width:100% ;
background-color:#fff ;

`
export const Tabs=styled.div`
max-width:50% ;
margin:0 auto ;
 padding:0 10px ;
    height:100px ;
    display:flex ;
    align-items:center ;
    justify-content:space-between ;
`
export const Tab=styled.div`
cursor: pointer;
font-size:24px ;
font-weight:400 ;
padding:20px ;
transition:all .3s ease-in-out ;
&.active{
    border-bottom:3px solid ${props=>props.theme. graytext} ;
}
`
