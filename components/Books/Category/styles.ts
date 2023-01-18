import styled from "styled-components";

export const Conatiner=styled.div`

`
export const Title=styled.h2`
margin-bottom:60px ;
`
export const CategoryList=styled.ul`
display:flex;
flex-direction:column ;
font-size:22px ;
`

export const CategoryItem=styled.li`
border-bottom:1px solid rgba(0, 0, 0, 0.1) ;
transition:all 0.3 ease-in-out ;
padding:15px 0 ;
&:hover{
   background-color:${props=>props.theme.grayBG} ; 
   color: ${props=>props.theme.textStrong} ; 
}

`