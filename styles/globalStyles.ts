import next from "next";
import { createGlobalStyle } from "styled-components";

const MyGlobalStyle = createGlobalStyle`

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  overflow-x: hidden;
  background-color: #f5f5f5;
  color:#616161;

}
a {
  color: initial;
  text-decoration: none;
}
ul {
  list-style-type: none;
}
a,
a:hover,
a:active,
a:focus,
input:hover,
input:active,
input:focus,
button:hover,
button:visited,
button:active,
button:focus,
.form-control:focus {
  outline: none !important;
  color: inherit;
}
*:focus {
  outline: none !important;
}
input.middle:focus {
  outline-width: 0;
}
textarea:hover,
input:hover,
textarea:active,
input:active,
textarea:focus,
input:focus,
button:focus,
button:active,
button:hover,
label:focus,
.btn:active,
.btn.active {
  outline: 0px !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
}
li {
  list-style: none;
}

.css-187mznn-MuiSlider-root {
  color:#ffa500 !important;
}


.vertical-timeline::before {
 background:#f4e6 ;
}
.vertical-timeline--animate .vertical-timeline-element-content.bounce-in{
  background:#f6e0f466

}

`

export default MyGlobalStyle;