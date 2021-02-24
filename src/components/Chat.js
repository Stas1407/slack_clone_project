import React from 'react'
import styled from 'styled-components'
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function Chat() {
    return (
        <Container>
            <Header>
                <ChannelContainer>
                    <Name>
                        # Channel 1
                        <StarOutlineIcon />
                    </Name>
                    <Description>
                        Some amazing channel
                    </Description>
                </ChannelContainer>
                <DetailsContainer>
                    Details 
                    <HelpOutlineIcon />
                </DetailsContainer>
            </Header>
        </Container>
    )
}

export default Chat

const Container = styled.div`
    height: 100%;
    background-color: rgba(10, 10, 10, 0.88);
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    height: 40px;
    padding-top: 10px;
    color: rgba(255, 255, 255, 0.85);
`

const ChannelContainer = styled.div`
    padding-left: 30px;
`

const DetailsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 30px;
    height: 100%;
    font-size: 19px;
    cursor: pointer;

    svg{
        margin-left: 15%;
        margin-right: 2%;
    }
`

const Name = styled.div`
    display: flex;
    font-size: 23px;
    align-items: center;
    font-weight: bold;
    height: 100%;

    svg{
        margin-left: 5%;
        cursor: pointer;
    }
`

const Description = styled.div`

`