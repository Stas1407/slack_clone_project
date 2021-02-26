import React from 'react'
import styled from 'styled-components'

function NoChannel() {
    return (
        <Container>
            <Wrapper>
                <Text>
                    Please select a channel or create one.
                </Text>
                <img src="https://cdn.pixabay.com/photo/2016/05/30/14/23/detective-1424831__340.png" alt=""/>
            </Wrapper>
        </Container>
    )
}

export default NoChannel

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(10, 10, 10, 0.88);
`

const Wrapper = styled.div`
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    
    img{
        width: 250px;
        width: 250px;
    }
`

const Text = styled.div`
    color: white;
    font-size: 40px;
    font-weight: 200;
    width: 60%;
    padding-right: 10px;
    text-align: center;
`