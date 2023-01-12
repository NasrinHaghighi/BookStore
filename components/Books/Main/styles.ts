import styled from "styled-components";



export const BooksConatiner=styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: 1fr;
grid-column-gap: 0px;
grid-row-gap: 20px;
@media (max-width:1650px) {
    grid-template-columns: repeat(3, 1fr);


}
@media (max-width:1350px) {
    grid-template-columns: repeat(2, 1fr);


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