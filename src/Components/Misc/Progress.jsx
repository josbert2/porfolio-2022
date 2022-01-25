import styled from 'styled-components';

const  Progress  =  styled.div`
  position:  fixed;
  background:  linear-gradient(
    to right,
    rgba(106, 254, 153, .6) ${props => props.scroll},
    transparent  0);
  width:  100%;
  height:  4px;
  transition: width .5s linear;
  z-index:  399;
`;



export  default  Progress;