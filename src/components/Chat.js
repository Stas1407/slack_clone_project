import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'
import db from '../firebase'
import { useParams } from 'react-router-dom';
import firebase from 'firebase'

function Chat({ user }) {

    let { channelId } = useParams();
    const [ channel, setChannel ] = useState({name: "Loading..."});
    const [ messages, setMessages ] = useState([]); 

    const getMessages = () => {
        db.collection('rooms')
        .doc(channelId)
        .collection('messages')
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) => {
            let messages = snapshot.docs.map((doc) => doc.data());
            setMessages(messages);
        })
    }

    const sendMessage = (text) => {
        if(channelId){
            let payload = {
                text: text,
                timestamp: firebase.firestore.Timestamp.now(),
                user: user.name,
                userImage: user.photo
            }
            db.collection('rooms').doc(channelId).collection('messages').add(payload);

            console.log(payload)
        }
    }

    const getChannel = () => {
        db.collection('rooms')
        .doc(channelId)
        .onSnapshot((snapshot) => {
            setChannel(snapshot.data());
        })
    }

    useEffect(() =>{
        getChannel();
        getMessages();
    }, [channelId]) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Container>
            <Header>
                <ChannelContainer>
                    <Name>
                        # {channel.name}
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
                {
                    messages.length > 0 &&
                    messages.map((data, index) => (
                        <ChatMessage 
                            text={data.text}
                            name={data.user}
                            image={data.userImage}
                            timestamp={data.timestamp}
                            key={index}
                        />
                    ))
                }
            </MessageContainer>
            <ChatInput sendMessage={sendMessage} />
        </Container>
    )
}

export default Chat

const Container = styled.div`
    height: 100%;
    background-color: rgba(10, 10, 10, 0.88);
    display: grid;
    grid-template-rows: 65px auto min-content;
    min-height: 0;
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
    display: flex;
    flex-direction: column-reverse;
    overflow-y: scroll;
    -ms-overflow-style: none;  
    scrollbar-width: none; 

    ::-webkit-scrollbar{
        display: none;
    }
`
