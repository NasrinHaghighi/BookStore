import styled from "styled-components";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
export const Container=styled.div`

max-width: 100%;
 margin:0 auto ;


`

export const InnerConatiner=styled.div`
max-width: 1520px;
 margin:0 auto ;
 padding:30px 50px ;
 

`
export const TitleDiv=styled.div`
max-width: 1520px;
text-align:center ;
 

`

export const SubTitle=styled.h6`
color: ${props=>props.theme.graytext};
margin:20px 0 ;
/* @media (max-width:1200px) {
    display:none;


} */
`

export const Div=styled.div`
text-align:center ;

`
export const Photo=styled.div`
position:absolute ;
bottom: 5px;
border-radius:50% ;
overflow: hidden;

&.even{
right:0 ;

}
&.odd{
left:0 ;
}

@media (max-width:1200px) {
    &.even{
right:0 ;

}
&.odd{
left:0 ;
}


}
`
export const SS=styled(VerticalTimelineElement)`



`

