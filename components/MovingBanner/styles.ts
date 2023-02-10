import styled ,  { keyframes }from "styled-components";

const move = keyframes`
  from {
    background-position: 0 0;
  }
/*use negative width if you want it to flow right to left else and positive for left to right*/
  to {
    background-position: -10000px 0;
  }
    
`;


export const Container=styled.div`
position:relative ;
width:124% ;
height:80vh ;

`
export const InnerContainer=styled.div`
   width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-image:url('/images/land.png') ;
  background-repeat: repeat;
  background-position: 0 0;
  background-size: auto 100%;
  animation: ${move} 200s linear infinite;

`
