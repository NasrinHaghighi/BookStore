import styled from "styled-components";
import { Dropdown } from "react-bootstrap";



export const DropDownMenuShop = styled(Dropdown.Menu)<{
    show: boolean;
  }>`
    transform: translate(-100px, 31px) !important;  
    width: calc(1500px - 100px);
    box-shadow: ${props=>props.theme.alertBoxshdow};
   display:${props=>props.show ? 'block' : 'none'};
   padding:30px;
 background-color:red;

   @media (max-width:1700px) {
    width: calc(1300px - 100px);

} 
@media (max-width:1400px) {
    width: calc(1100px - 100px);

} 
  `;


  export const DropdownSS = styled(Dropdown)`
    /* right: -16px !important; */

  `;


  export const DropDownToggle = styled(Dropdown.Toggle)`
    background-color: transparent !important;
   border:none !important ;
    position: relative;
    overflow: hidden;
    padding:0 30px ;
    font-size:18px ;
    color:${props=>props.theme.graytext} !important;
    &::after{
  display:none ;
    }
  `

  export const ImageDiv=styled.div`
transition:all 0.3s ease-in-out ;
  `
    export const Bottom=styled.div`
    padding:50px 20px ;
    background-color:${props=>props.theme.lightPink} ;
    display:flex;
    justify-content:space-between ;
    align-items:center ;
    &:hover{
${ImageDiv}{
    transform:translateX(20px) ;
}
    }
     
    `
      export const Shop=styled.button`
  border:none;
  padding:10px 15px ;
  background-color:${props=>props.theme.orange} ;
  border-radius:8px;
       
      `
        export const Off=styled.div`
  &>h1{
    margin:15px  0 ;
  }
       
        `
/*               top */
        
  export const Top=styled.div`
display:grid ;
grid-template-columns:repeat(4, 1fr) ;
padding: 20px ;
 
  `
export const DropdownItem = styled(Dropdown.Item)`
font-size:18px ;
font-weight:700 ;
`
   export const First=styled.div`
display:flex ;
flex-direction:column ;
justify-content:space-between ;

  
   `
    export const Second=styled.div`
   
   
    `
     export const Third=styled.div`
    
    
     `
      export const Fourth=styled.div`
 text-align:center ;
 transition:all 0.3s ease-in-out ;
 &:hover{
    transform:scale(1.1) ;
 }
     
      `