import styled from "styled-components";

export const HeaderWrapper = styled.nav`
    position: relative;
    z-index: 99;
    max-width: 100%;
    margin:0 140px ;
    height:100px ;
    display:flex ;
    align-items:center ;
    justify-content:space-between ;
`

export const Wrapper = styled.nav`
  display:flex ;
  align-items:center ;
`
export const Wrapper2 = styled.nav`
  display:flex ;
  align-items:center ;
  
`
export const Logo = styled.div`
  width:100px ;
  height:50px ;
color:#f4b41a;
font-weight:800 ;

  display:flex ;
  justify-content:center ;
  align-items:center ;
  font-size:28px ;
  border-radius:8px ;
  padding-left: 20px;
    padding-right: 10px;

`
export const Nav = styled.div`
border-left:1px solid ${props=>props.theme.grayBorder} ;
display:flex ;
justify-content:space-between ;
align-items:center ;

`

export const NavItem = styled.div`
padding:10px 15px ;
font-size:18px ;
display:flex ;
justify-content:center ;
align-items:center ;
position:relative ;
& > span {
   margin-left:10px ;
  }
&::before {
    content: "";
    position: absolute;
    width: 0;
    height: 5px;
    right: 0;
    bottom: 0;
    background-color: #DB1037;
    background-image: linear-gradient(90deg, #DB1037, #CD40E6);;
    transition: .3s ease;
  }
&:hover {
    &::before {
        width: 100%; 
    }

}
&.loginBtn{
   border: 3px solid ${props=>props.theme.orange};
    color: ${props=>props.theme.orange};
    border-radius: 5px;
}
`

export const Lens = styled.div`
color: ${props=>props.theme.linkColor};
font-size:18px ;
padding:0 30px ;
`
export const Basket = styled.div`
color: ${props=>props.theme.linkColor};
font-size:18px ;
padding:0 30px ;
border-left:1px solid ${props=>props.theme.grayBorder}  ;
display:flex ;
  justify-content:center ;
  align-items:center ;
`

export const ShopItems = styled.div`
background-color:${props=>props.theme.red} ;
border-radius: 10px;
    padding: 2px 5px;
    color:#fff ;
    font-size: 11px;
    margin-right:15px ;
`