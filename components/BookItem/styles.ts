import styled from "styled-components";

export const BookItemContainer=styled.div`
max-width: 344px;
height: 350px;
transition: all 0.6s ease-out;
text-align:center ;
&>span{
    box-shadow:${props=>props.theme.boxshadow} ;
}
&:hover{
    transform: scale(1.07);
}
&>h4{
    margin:15px 0 ;
}
&>h5{
    margin:15px 0 ;
}

`