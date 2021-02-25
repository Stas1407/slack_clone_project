import React, { useState } from 'react'
import styled from 'styled-components'
import SendIcon from '@material-ui/icons/Send';

function ChatInput({ sendMessage }) {

    const [input, setInput] = useState("");

    const send = (e) => {
        e.preventDefault();
        if(!input) return;
        sendMessage(input);
        setInput("");
    }

    return (
        <Container>
            <InputContainer>
                <form>
                    <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder="Message here..." />
                    <SendButton onClick={send} type="submit">
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

const SendButton = styled.button`
    background: #007A5A;
    border-radius: 2px;
    color: white;
    width: 45px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;

    :hover{
        background: #00b586;
    }
`