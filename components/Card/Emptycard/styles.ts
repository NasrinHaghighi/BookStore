import styled from "styled-components";

export const EmptyCardConatiner=styled.div`
padding:100px 0 ;
text-align:center ;
&>h1{
    font-size:42px ;
}
`
export const Title=styled.div`
    color:${props=>props.theme.orange} ;
   margin:50px auto ;
    font-size:32px ;
    display:flex ;
    justify-content:center ;
    align-items:center ;

`
export const Icon=styled.span`

padding:0 ;
`