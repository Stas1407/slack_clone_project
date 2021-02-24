import React from 'react'
import styled from 'styled-components'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {sidebarItemsData} from '../data/SidebarData'
import AddIcon from '@material-ui/icons/Add';
import db from '../firebase'

function Sidebar(props) {

    const addChannel = () => {
        const promptName = prompt("Enter channel name")
        if(promptName){
            db.collection('rooms').add({
                name: promptName
            })
        }
    }

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
            <MainChannels>
                {
                    sidebarItemsData.map(item => (
                        <MainChannelItem>
                            {item.icon}
                            {item.text}
                        </MainChannelItem>
                    ))
                }
            </MainChannels>
            <ChannelsContainer>
                <NewChannelContainer>
                    <div>
                        Channels
                    </div>
                    <AddIcon onClick={addChannel}/>
                </NewChannelContainer>
                <ChannelsList>
                    {
                        props.rooms.map(item => (
                            <Channel>
                               # {item.name}
                            </Channel>
                        ))
                    }
                </ChannelsList>
            </ChannelsContainer>
        </Container>
    )
}

export default Sidebar

const Container = styled.div`
    background-color: rgba(10, 10, 10, 0.88);
    border-right: 1px solid rgba(255, 255, 255, 0.2);
`

const WorkspaceContainer = styled.div`
    color: white;
    height: 64px;
    display: flex;
    align-items: center;
    padding-left: 10%;
    padding-right: 10%;
    justify-content: space-between;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
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

const MainChannels = styled.div`
    padding-top: 20px;
`

const MainChannelItem = styled.div`
    color: rgb(255, 255, 255, 0.66);
    display: grid;
    grid-template-columns: 15% auto;
    height: 28px;
    align-items: center;
    padding-left: 19px;
    padding-top: 5px;
    cursor: pointer;
    :hover{
        background: rgb(5, 5, 5, 0.7);
    }
`

const ChannelsContainer = styled.div`
    color: rgb(255, 255, 255, 0.66);
    margin-top: 25px;
`

const NewChannelContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 20px;
    padding-left: 19px;
    padding-right: 19px;

    svg{
        cursor: pointer;
    }
`

const ChannelsList = styled.div`
    padding-top: 5px;
`

const Channel = styled.div`
    display: flex;
    align-items: center;
    padding-left: 12%;
    padding-top: 2px;
    cursor: pointer;
    :hover{
        background: rgb(5, 5, 5, 0.7);
    }
`