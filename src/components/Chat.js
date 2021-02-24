import React from 'react'
import styled from 'styled-components'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'

function Chat() {
    return (
        <Container>
            <Header>
                <ChannelContainer>
                    <Name>
                        # Channel 1
                    </Name>
                    <Description>
                        Some amazing channel
                    </Description>
                </ChannelContainer>
                <DetailsContainer>
                    Details 
                    <InfoOutlinedIcon />
                </DetailsContainer>
            </Header>
            <MessageContainer>
                <ChatMessage />
            </MessageContainer>
            <ChatInput />
        </Container>
    )
}

export default Chat

const Container = styled.div`
    height: 100%;
    background-color: rgba(10, 10, 10, 0.88);
    display: grid;
    grid-template-rows: 65px auto min-content;
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    color: rgba(255, 255, 255, 0.85);
    padding-left: 30px;
    padding-right: 30px;
`

const ChannelContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`

const DetailsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: 19px;
    cursor: pointer;

    svg{
        margin-left: 15%;
        margin-right: 2%;
    }
`

const Name = styled.div`
    font-size: 23px;
    font-weight: bold;

    svg{
        margin-left: 5%;
        cursor: pointer;
    }
`

const Description = styled.div`

`

const MessageContainer = styled.div`
    padding-top: 15px;
`
