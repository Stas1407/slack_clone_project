import React from 'react'
import styled from 'styled-components'
import SendIcon from '@material-ui/icons/Send';

function ChatInput() {
    return (
        <Container>
            <InputContainer>
                <form>
                    <input type="text" placeholder="Message here..." />
                    <SendButton>
                        <SendIcon />
                    </SendButton>
                </form>
            </InputContainer>
        </Container>
    )
}

export default ChatInput

const Container = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 24px;
`

const InputContainer = styled.div`
    border: 1px solid #8D8D8E;
    border-radius: 4px;

    form{
        display: flex;
        height: 42px;
        align-items: center;
        padding-left: 10px;
        background-color: transparent;

        input{
            flex: 1;
            border: none;
            font-size: 15px;
            background-color: transparent;
            color: white;
        }

        input:focus{
            outline: none;
        }
    }
`

const SendButton = styled.div`
    background: #007A5A;
    border-radius: 2px;
    color: white;
    width: 45px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    :hover{
        background: #00b586;
    }
`