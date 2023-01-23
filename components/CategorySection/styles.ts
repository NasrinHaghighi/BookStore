import styled from 'styled-components'
export const Conatiner=styled.div`
max-width: 100%;
 margin:0 auto ;
`
export const InnerConatiner=styled.div`
max-width: 1520px;
 margin:0 auto ;
 padding:30px 50px ;


`
export const Title=styled.div`
    font-size: 1.875rem;


`
export const Top=styled.div`
    display:flex ;
    justify-content:space-between ;
    align-items:center ;
   

`
export const ViewAll=styled.div`
    font-size: 1.2rem;
    font-weight:600 ;
    color:${props=>props.theme.orange} ;
    

`
export const Content=styled.div`
   display:flex ;
   justify-content:space-between ;
   align-items:center ;
   margin:50px 0 ;
    

`
export const CategoryItem=styled.div`
  width:250px ;
  height:200px ;
  text-align:center ;
  border-radius:8px ;
 
    

`