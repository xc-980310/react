import styled from 'styled-components';
import logo from './../../static/logo.jpg';

export const HeadWrap =styled.div`
height: 60px;
background: #ccc;
`;
export const Logo =styled.a`
height: 60px;
width: 140px;
display: block;
margin-left: 40px;
background: url(${logo}) no-repeat;
background-size: contain;
float: left;

`;
export const Nav =styled.div`
height: 60px;
width: 300px;
float: left;
margin-left: 100px;
`;
export const NavItem =styled.a.attrs({href:props=>props.href})`
font-size: 30px;
line-height: 60px;
display: inline-block;
margin-left: 20px;
cursor:pointer;
color: blue;
`;
export const Search =styled.div`
position: relative;
float: right;
span{
position: absolute;
right: 165px;
top: 22px;
}
`;
export const Inp =styled.input.attrs({placeholder:'搜索商品'})`
margin-right: 150px;
height: 30px;
width: 150px;
box-sizing: border-box;
border:none;
outline: none;
margin-top: 15px;
border-radius: 30px;
padding-left: 20px;
transition: 2s;
  &.flag{
        width:180px;
        transition: 2s;
`;
export const SearchInfo = styled.div`
    width: auto;
    height: 60px;
    line-height: 60px;
    float: left;
    margin-right: 80px;
    span{
        margin: 15px;
        color: #48f;
        font-size: 16px;
    }
`;

