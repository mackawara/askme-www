import React from 'react'
import { Container, Grid } from '@mui/material'
import { useState } from 'react'
import { Message, MessageType } from '../../types'
import MessageComponent from './message'

interface MessageHistory {
    messageList: Message[];
}

const MessageHistory: React.FC<MessageHistory> = ({ messageList }) => {
    return (<Grid container sx={{ height: 'auto' }}>
        {messageList.map((item, index) => {
            return (
                <MessageComponent key={index} type={item.type} content={item.content} />
            )
        })}
    </Grid>)


}
export default MessageHistory