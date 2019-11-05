import styled from 'styled-components';
import logo from './../../static/logo.jpg';
export const FootWrap =styled.div`
margin: 20px auto;
width: 100%;
height: 200px;
background:#CCCCCC ;
float: left;
`;
export const FootLeft =styled.div`
margin: 0 50px 0 90px;
width: 320px;
height: 200px;
float: left;
p{
margin: 15px 0 0 20px;
}
`;
export const Logo =styled.a`
margin: 0 20px;
height: 50px;
width: 100px;
display: block;
background: url(${logo}) no-repeat;
background-size: contain;
`;
export const FootCenter =styled.div`
margin: 0 50px 0 0;
width: 300px;
height: 200px;
float: left;
img{
width: 140px;
height: 140px;
margin: 32px 10px  0 0;

}
`;
export const FootRight =styled.div`
margin: 0 0;
width: 320px;
height: 200px;
float: left;
span{
display: inline-block;
margin: 10px 20px;

}
`;
export const List =styled.div`

`;
