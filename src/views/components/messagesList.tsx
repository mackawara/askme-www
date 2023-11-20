import React from 'react'
import { Grid } from '@mui/material'
import { Message } from '../../types'
import MessageComponent from './message'

interface MessageHistory {
    messageList: Message[];
}

const MessageHistory: React.FC<MessageHistory> = ({ messageList }) => {
    return (<Grid container sx={{ flexBasis: '90%', overflow: 'scroll' }}>
        {messageList.map((item, index) => {
            return (
                <MessageComponent key={index} type={item.type} content={item.content} />
            )
        })}
    </Grid>)


}
export default MessageHistory