import React from 'react'
import styled from 'styled-components'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

function Sidebar() {
    return (
        <Container>
            <WorkspaceContainer>
                <Name>
                    SlackCloneProject
                </Name>
                <NewMessage>
                    <AddCircleOutlineIcon />
                </NewMessage>
            </WorkspaceContainer>
        </Container>
    )
}

export default Sidebar

const Container = styled.div`
    background-color: #3F0E40;
`

const WorkspaceContainer = styled.div`
    color: white;
    height: 64px;
    display: flex;
    align-items: center;
    padding-left: 10%;
    padding-right: 10%;
    justify-content: space-between;
    border-bottom: 1px solid #532753;
`

const Name = styled.div`

`

const NewMessage = styled.div`
    width: 36px;
    height: 36px;
    background: white;
    color: #3F0E40;
    fill: #3F0E40;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;

    svg{
        width: 70%;
        height: 70%;
    }
`