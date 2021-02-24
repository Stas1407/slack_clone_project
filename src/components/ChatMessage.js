import React from 'react'
import styled from 'styled-components'

function ChatMessage() {
    return (
        <Container>
            <UserAvatar>
                <img src="https://randomuser.me/api/portraits/men/64.jpg" alt="" />
            </UserAvatar>
            <MessageContent>
                <Name>
                    Stas Ninja
                    <span>2/23/2021 11:35:55 AM</span>
                </Name>
                <Text>
                    This is the best challenge
                </Text>
            </MessageContent>
        </Container>
    )
}

export default ChatMessage

const Container = styled.div`
    padding: 8px 20px;
    display: flex;
    align-items: center;
    color: white;

    :hover{
        background-color: rgba(10, 10, 10, 0.4);
    }
`

const UserAvatar = styled.div`
    width: 36px;
    height: 36px;
    border-radius: 2px;
    overflow: hidden;

    img{
        width: 100%;
    }
`

const MessageContent = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 10px;
`

const Name = styled.span`
    font-weight: 900;
    color: rgba(255, 255, 255, 0.88);
    font-size: 15px;
    line-height: 1.4;

    span {
        margin-left: 8px;
        font-weight: 400;
        color: rgb(97, 96, 97);
    }
`

const Text = styled.span`

`