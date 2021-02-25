import React from 'react'
import styled from 'styled-components'
import { auth, provider } from '../firebase'

function Login(props) {

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            const newUser = {
                name: result.user.displayName,
                photo: result.user.photoURL,
            }
            localStorage.setItem('user', JSON.stringify(newUser));
            props.setUser(newUser);
        })
        .catch((error) => {
            alert(error.message)
        })
    }

    return (
        <Container>
            <Content>
                <SlackImg src="https://i.pinimg.com/originals/a9/c8/95/a9c895442d78c5d8cc15e9a4970a9906.png" />
                <h1>Sign in to Slack</h1>
                <SignInButton onClick={() => signIn()}>
                    Sign in with Google
                </SignInButton>
            </Content>
        </Container>
    )
}

export default Login

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #F8F8F8;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Content = styled.div`
    background-color: white;
    padding: 100px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
`

const SlackImg = styled.img`
    height: 100px;
    margin-bottom: 2px;
`

const SignInButton = styled.button`
    margin-top: 50px;
    background-color: #0A8D48;
    color: white;
    border: 1px solid white;
    border-radius: 4px;
    height: 50px;
    width: 80%;
    cursor: pointer;
    font-size: 15px;

    :hover{
        background-color: #066b36;
    }
`