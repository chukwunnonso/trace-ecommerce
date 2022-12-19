import React from 'react'
import styled from 'styled-components'
// import SearchIcon from '@material-ui/icons/Search';
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
// import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { mobile } from '../responsive';

import { AiOutlineSearch } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";


const Container = styled.div`
    height: 60px;
    ${mobile({ backgroundColor: "green" })}
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Left = styled.div`
    flex: 1;
    text-align:center:
`

const Logo = styled.h1`
    font-weight:bold;
    width: 92px;
    height: 43.04px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 42px;
    color: #22262A;
    margin-left:88px;



`

const Language = styled.span`
    font-size: 14px;
    cursor:pointer;

`
const SearchContainer = styled.div `
    display:flex;
    align-items:center;
    justify-content: space-between;
    margin-left: 25px;
    padding: 5px;
`

const Favorite = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    margin-left: 25px;
    margin-right: 25px;
    padding: 5px;
`


const ShoppingCart = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    padding: 5px;
    
`


const Input = styled.input`
    border:none;

`

const Center = styled.div`
    flex: 1;
    display:flex;
    align-items:center;
    justify-content: space-between;
    width: 254px;
    height: 27.67px;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content:flex-end;
    width: 148px;
    height: 18.45px;
    margin:25px 75px 25px 461px;

`;

const MenuItem = styled.div`
    font-size:14px;
    cursor:pointer;
    display:flex;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: #22262A;
`



const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left><Logo>TRACE</Logo></Left>
            <Center>
                        <MenuItem ><Link to='/'>HOME</Link></MenuItem>
                        <MenuItem ><Link to='/productlist'>SHOP</Link></MenuItem>
                        <MenuItem ><Link to='/checkout'>CHECKOUT</Link></MenuItem>
                        {/* <MenuItem to='/ProductsList'>SHOP</MenuItem>
                        <MenuItem to='/checkout'>HOME</MenuItem> */}
                
            </Center>
            <Right>
                <SearchContainer>
                    <AiOutlineSearch/>
                </SearchContainer>
                <Favorite>
                    <BsHeart/>
                </Favorite>
                <ShoppingCart>
                    <BsCart3/>
                </ShoppingCart>
            </Right>
        </Wrapper>

    </Container>
  )
}

export default Navbar
