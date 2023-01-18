import styled from "styled-components";

export const Container=styled.div`
padding:0 10px ;
`
export const Top=styled.div`
display:flex ;
justify-content:space-between ;
height:150px ;
width:100% ;
padding:80px ;
`
export const Grid=styled.div`


&>span{
   
    cursor: pointer;
    width:30px ;
    height:30px ;
    font-size:30px ;
    margin:0 10px ;
   
    &.active{
        color:orange;
    }
}
`
export const BooksConatiner=styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: 1fr;
grid-column-gap:20px;
grid-row-gap: 20px;
@media (max-width:1650px) {
    grid-template-columns: repeat(2, 1fr);


}
@media (max-width:1350px) {
    grid-template-columns: repeat(1, 1fr);


}

`
export const LoadMore=styled.button`
background-color:${props=>props.theme.orange} ;
width:300px ;
height:50px ;
border-radius: 5px;
text-align:center ;
border:none ;
position:relative ;
font-size:18px ;
font-weight:700 ;
&::before {
    content: "";
    position: absolute;
    width: 0px;
    height: 5px;
    right:5px;
    bottom: 0;
    background-color: #DB1037;
    background-image: linear-gradient(90deg, #DB1037, #CD40E6);;
    transition: .3s ease;
  }
  &:hover {
    &::before {
        width: 95%; 
    }

}

`
export const BooksConatiner2=styled.div`


`

