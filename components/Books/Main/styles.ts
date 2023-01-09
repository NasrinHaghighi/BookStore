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