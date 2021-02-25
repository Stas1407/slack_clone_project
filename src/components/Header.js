import React from 'react'
import styled from 'styled-components'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function Header({ user, signOut }) {
    return (
        <Container>
            <Main>
                <AccessTimeIcon />
                <SearchContainer>
                    <Search>
                        <input type="text" placeholder="Search..."/>
                    </Search>
                </SearchContainer>
                <HelpOutlineIcon />
            </Main>
            <UserContainer>
                <Name>
                    {user.name}
                </Name>
                <UserImage onClick={signOut}>
                    <img src={user.photo ? user.photo : "https://i.imgur.com/6VBx3io.png"} alt=""/>
                </UserImage>
            </UserContainer>
        </Container>
    )
}

export default Header

const Container = styled.div`
    background-color: rgb(5, 5, 5, 0.88);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 1px 0 0 rgb(255 255 255 / 10%);
    z-index: 10;
`

const Main = styled.div`
    display: flex;
`

const SearchContainer = styled.div`
    min-width: 400px;
    margin-left: 16px;
    margin-right: 16px;
`

const Search = styled.div`
    width: 100%;
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.4);
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    input {
        width: 100%;
        background-color: transparent;
        border: none;
        padding-left: 8px;
        padding-right: 8px;
        color: white;
        padding-top: 4px;
        padding-bottom: 4px;
    }

    input:focus{
        outline: none;
    }
`

const UserContainer = styled.div`
    display: flex;
    align-items: center;
    padding-right: 16px;
    position: absolute;
    right: 0;
`

const Name = styled.div`
    padding-right: 16px;
`

const UserImage = styled.div` 
    width: 30px;
    height: 30px;
    border: none;
    cursor: pointer;

    img {
        width: 100%;
        height: 100%;
        border: 2px solid white;
        border-radius: 50%;
    }
` 